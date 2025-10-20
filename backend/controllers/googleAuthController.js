const jwt = require("jsonwebtoken");
const User = require("../models/User");

class GoogleAuthController {
  initiate(req, res) {
    try {
      const googleAuthURL =
        `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${process.env.GOOGLE_CLIENT_ID}&` +
        `redirect_uri=${encodeURIComponent(process.env.GOOGLE_REDIRECT_URI)}&` +
        `response_type=code&` +
        `scope=profile email&` +
        `access_type=offline&` +
        `prompt=consent`;
      res.redirect(googleAuthURL);
    } catch (error) {
      console.error("Error initiating Google OAuth:", error);
      res.redirect(
        `${process.env.CLIENT_URL}/auth/login?error=oauth_init_failed`
      );
    }
  }

  // Callback to handle Google response, create/link user and return JWT
  async callback(req, res) {
    try {
      const { code, error } = req.query;

      console.log("📨 Google OAuth callback received:", {
        hasCode: !!code,
        error: error,
        clientId: process.env.GOOGLE_CLIENT_ID ? "Set" : "Missing",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ? "Set" : "Missing",
      });

      if (error) {
        console.error("Google OAuth error:", error);
        return res.redirect(
          `${process.env.CLIENT_URL}/auth/login?error=oauth_failed`
        );
      }

      if (!code) {
        console.error("No authorization code received from Google");
        return res.redirect(
          `${process.env.CLIENT_URL}/auth/login?error=no_code`
        );
      }

      // Exchange code for access token
      const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          code: code,
          grant_type: "authorization_code",
          redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenData.access_token) {
        console.error("Failed to get access token:", tokenData);
        throw new Error(
          `Failed to get access token: ${tokenData.error || "Unknown error"}`
        );
      }

      console.log("🔑 Token data received:", {
        hasAccessToken: !!tokenData.access_token,
        hasRefreshToken: !!tokenData.refresh_token,
      });

      // Get user info from Google
      const userResponse = await fetch(
        `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${tokenData.access_token}`
      );
      const googleUser = await userResponse.json();

      if (!googleUser.id || !googleUser.email) {
        throw new Error("Invalid user data received from Google");
      }

      // Check if user already exists with this Google ID
      let existingUser = await User.findOne({ googleId: googleUser.id });

      if (existingUser) {
        console.log("✅ User found with Google ID:", existingUser.email);
        // Update refresh token if a new one is provided
        if (tokenData.refresh_token) {
          existingUser.googleRefreshToken = tokenData.refresh_token;
          await existingUser.save();
          console.log("🔄 Updated refresh token for existing user");
        }
      } else {
        // Check if user exists with same email
        existingUser = await User.findOne({ email: googleUser.email });

        if (existingUser) {
          // Link Google account to existing user
          existingUser.googleId = googleUser.id;
          existingUser.isVerified = true;
          if (googleUser.picture && !existingUser.profileImage) {
            existingUser.profileImage = googleUser.picture;
          }
          // Store refresh token if available
          if (tokenData.refresh_token) {
            existingUser.googleRefreshToken = tokenData.refresh_token;
          }
          await existingUser.save();
          console.log(
            "🔗 Linked Google account to existing user:",
            existingUser.email
          );
        } else {
          // Create new user
          existingUser = new User({
            googleId: googleUser.id,
            firstName: googleUser.given_name || "Unknown",
            lastName: googleUser.family_name || "User",
            email: googleUser.email,
            profileImage: googleUser.picture || null,
            isVerified: true,
            password: null,
            googleRefreshToken: tokenData.refresh_token || null,
          });

          await existingUser.save();
        }
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      const userData = {
        id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        isVerified: existingUser.isVerified,
        profileImage: existingUser.profileImage,
      };

      const encodedUserData = encodeURIComponent(JSON.stringify(userData));
      const encodedToken = encodeURIComponent(token);

      res.redirect(
        `${process.env.CLIENT_URL}/auth/oauth-success?user=${encodedUserData}&token=${encodedToken}`
      );
    } catch (error) {
      console.error("❌ OAuth callback error:", error);
      res.redirect(`${process.env.CLIENT_URL}/auth/login?error=oauth_error`);
    }
  }

  // Refresh Google Access Token
  async refreshGoogleToken(req, res) {
    try {
      const userId = req.user._id;

      // Get user with refresh token
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      if (!user.googleRefreshToken) {
        return res.status(400).json({
          success: false,
          message:
            "No Google refresh token available. Please re-authenticate with Google.",
        });
      }

      console.log("🔄 Refreshing Google access token for user:", user.email);

      // Request new access token using refresh token
      const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          refresh_token: user.googleRefreshToken,
          grant_type: "refresh_token",
        }),
      });

      const tokenData = await tokenResponse.json();

      if (!tokenData.access_token) {
        console.error("Failed to refresh Google token:", tokenData);

        // If refresh token is invalid, clear it
        if (tokenData.error === "invalid_grant") {
          user.googleRefreshToken = null;
          await user.save();
        }

        return res.status(400).json({
          success: false,
          message: "Failed to refresh Google token. Please re-authenticate.",
          error: tokenData.error || "Unknown error",
        });
      }

      // If a new refresh token is provided, update it
      if (tokenData.refresh_token) {
        user.googleRefreshToken = tokenData.refresh_token;
        await user.save();
        console.log("🔄 Updated refresh token");
      }

      console.log("✅ Google access token refreshed successfully");

      res.status(200).json({
        success: true,
        message: "Google access token refreshed successfully",
        accessToken: tokenData.access_token,
        expiresIn: tokenData.expires_in,
      });
    } catch (error) {
      console.error("❌ Error refreshing Google token:", error);
      res.status(500).json({
        success: false,
        message: "Server error while refreshing Google token",
      });
    }
  }
}

const controller = new GoogleAuthController();

module.exports = {
  initiate: controller.initiate.bind(controller),
  callback: controller.callback.bind(controller),
  refreshGoogleToken: controller.refreshGoogleToken.bind(controller),
};
