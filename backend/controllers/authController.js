const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const { sendOTP } = require("../config/email");

// Helper function to generate access and refresh tokens
const generateTokens = (user) => {
  // Short-lived access token (15 minutes)
  const accessToken = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );

  // Long-lived refresh token (7 days)
  const refreshToken = crypto.randomBytes(64).toString("hex");
  const refreshTokenExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  return { accessToken, refreshToken, refreshTokenExpiry };
};

class AuthController {
  // User Registration
  async register(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Validation
      if (!firstName || !lastName || !email) {
        return res.status(400).json({
          success: false,
          message: "First name, last name, and email are required",
        });
      }

      // For regular registration, password is required
      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Password is required",
        });
      }

      // Check if user already exists
      const existingUser = await User.findOne({
        email: email.toLowerCase().trim(),
      });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists with this email",
        });
      }

      // Validate password length
      if (password.length < 8) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 8 characters long",
        });
      }

      // Hash the password
      const saltRounds = parseInt(process.env.SALT_ROUNDS);
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create new user
      const newUser = new User({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        isVerified: false,
      });

      await newUser.save();

      // Generate and send OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP
      const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

      // Update user with OTP
      newUser.otp = otp;
      newUser.otpExpiry = otpExpiry;
      await newUser.save();

      // Send OTP email
      const emailResult = await sendOTP(newUser.email, otp);
      if (!emailResult.success) {
        console.error("Failed to send OTP email:", emailResult.error);
        // Don't fail registration if email fails, but log it
      }

      res.status(201).json({
        success: true,
        message:
          "User registered successfully. Please check your email for OTP verification.",
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({
        success: false,
        message: "Server error during registration",
      });
    }
  }

  // User Login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Validation
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      // Find user
      const user = await User.findOne({ email: email.toLowerCase().trim() });
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Check if this is an OAuth user (no password)
      if (!user.password && user.googleId) {
        return res.status(400).json({
          success: false,
          message:
            "This account was created with Google. Please use Google Sign-In.",
        });
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      // Check if user is verified
      if (!user.isVerified) {
        return res.status(403).json({
          success: false,
          message: "Please verify your email address before logging in",
          email: user.email,
        });
      }

      // Generate JWT tokens
      const { accessToken, refreshToken, refreshTokenExpiry } =
        generateTokens(user);

      // Save refresh token to user
      user.refreshToken = refreshToken;
      user.refreshTokenExpiry = refreshTokenExpiry;
      await user.save();

      // Set refresh token as HTTP-only cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Use HTTPS in production
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: "/",
      });

      res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isVerified: user.isVerified,
          profileImage: user.profileImage,
        },
        token: accessToken, // Only send access token, not refresh token
      });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({
        success: false,
        message: "Server error during login",
      });
    }
  }

  // OTP Verification
  async verifyOTP(req, res) {
    try {
      const { email, otp } = req.body;

      if (!email || !otp) {
        return res.status(400).json({
          success: false,
          message: "Email and OTP are required",
        });
      }

      // Find user by email
      const user = await User.findOne({ email: email.toLowerCase().trim() });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Check if OTP matches and is not expired
      if (user.otp !== otp) {
        return res.status(400).json({
          success: false,
          message: "Invalid OTP",
        });
      }

      if (user.otpExpiry < new Date()) {
        return res.status(400).json({
          success: false,
          message: "OTP has expired",
        });
      }

      // Mark user as verified and clear OTP
      user.isVerified = true;
      user.otp = null;
      user.otpExpiry = null;
      await user.save();

      // Generate JWT tokens
      const { accessToken, refreshToken, refreshTokenExpiry } =
        generateTokens(user);

      // Save refresh token to user
      user.refreshToken = refreshToken;
      user.refreshTokenExpiry = refreshTokenExpiry;
      await user.save();

      // Set refresh token as HTTP-only cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: "/",
      });

      res.status(200).json({
        success: true,
        message: "Email verified successfully",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          isVerified: user.isVerified,
          profileImage: user.profileImage,
        },
        token: accessToken, // Only send access token
      });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      res.status(500).json({
        success: false,
        message: "Server error during OTP verification",
      });
    }
  }

  // Resend OTP
  async resendOTP(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }

      // Find user by email
      const user = await User.findOne({ email: email.toLowerCase().trim() });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Generate new OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP
      const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

      // Update user with new OTP
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      await user.save();

      // Send OTP email
      const emailResult = await sendOTP(user.email, otp);
      if (!emailResult.success) {
        console.error("Failed to send OTP email:", emailResult.error);
        return res.status(500).json({
          success: false,
          message: "Failed to send OTP email",
        });
      }

      res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } catch (error) {
      console.error("Error resending OTP:", error);
      res.status(500).json({
        success: false,
        message: "Server error during OTP resend",
      });
    }
  }

  async refreshToken(req, res) {
    try {
      // Refresh token is now verified by middleware from HTTP-only cookie
      const user = req.user;
      const oldRefreshToken = req.refreshToken;

      // Generate new tokens (token rotation)
      const {
        accessToken,
        refreshToken: newRefreshToken,
        refreshTokenExpiry,
      } = generateTokens(user);

      // Update user with new refresh token (rotate the refresh token)
      user.refreshToken = newRefreshToken;
      user.refreshTokenExpiry = refreshTokenExpiry;
      await user.save();

      // Set new refresh token as HTTP-only cookie
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        path: "/",
      });

      res.json({
        success: true,
        message: "Token refreshed successfully",
        token: accessToken, // Only send access token
      });
    } catch (error) {
      console.error("Token refresh error:", error);
      res.status(500).json({
        success: false,
        message: "Server error during token refresh",
      });
    }
  }

  async logout(req, res) {
    try {
      const user = req.user;

      // Clear refresh token from database
      user.refreshToken = null;
      user.refreshTokenExpiry = null;
      await user.save();

      // Clear the refresh token cookie
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      res.json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({
        success: false,
        message: "Server error during logout",
      });
    }
  }

  async getMe(req, res) {
    try {
      res.status(200).json({
        success: true,
        user: req.user,
      });
    } catch (error) {
      console.error("Error fetching user info:", error);
      res.status(500).json({
        success: false,
        message: "Server error fetching user info",
      });
    }
  }
  // Send Forgot Password OTP
  async sendForgotPasswordOTP(req, res) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Email is required",
        });
      }

      // Check if user exists
      const user = await User.findOne({
        email: email.toLowerCase().trim(),
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "No account found with this email address",
        });
      }

      // Generate 4-digit OTP
      const otp = Math.floor(1000 + Math.random() * 9000).toString();
      const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      // Save OTP to user (using resetPasswordOTP and resetPasswordOTPExpires fields)
      user.resetPasswordOTP = otp;
      user.resetPasswordOTPExpires = otpExpires;
      await user.save();

      // Send OTP email
      console.log(`📧 Attempting to send reset OTP to ${email}`);
      const emailResult = await sendOTP(email, otp, "password-reset");

      if (!emailResult.success) {
        console.error("❌ Email sending failed:", emailResult.error);
        throw new Error(`Failed to send email: ${emailResult.error}`);
      }

      console.log(`✅ Forgot password OTP sent to ${email}: ${otp}`);

      res.status(200).json({
        success: true,
        message: "Password reset OTP sent to your email",
      });
    } catch (error) {
      console.error("Error sending forgot password OTP:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send reset OTP. Please try again.",
      });
    }
  }

  // Verify Reset Password OTP
  async verifyResetOTP(req, res) {
    try {
      const { email, otp } = req.body;

      if (!email || !otp) {
        return res.status(400).json({
          success: false,
          message: "Email and OTP are required",
        });
      }

      // Find user with valid reset OTP
      const user = await User.findOne({
        email: email.toLowerCase().trim(),
        resetPasswordOTP: otp,
        resetPasswordOTPExpires: { $gt: Date.now() },
      });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired OTP",
        });
      }

      console.log(`✅ Reset OTP verified for ${email}`);

      res.status(200).json({
        success: true,
        message: "OTP verified successfully",
        email: email,
      });
    } catch (error) {
      console.error("Error verifying reset OTP:", error);
      res.status(500).json({
        success: false,
        message: "Server error during OTP verification",
      });
    }
  }

  // Reset Password
  async resetPassword(req, res) {
    try {
      const { email, otp, newPassword } = req.body;

      if (!email || !otp || !newPassword) {
        return res.status(400).json({
          success: false,
          message: "Email, OTP, and new password are required",
        });
      }

      // Validate password
      if (newPassword.length < 8) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 8 characters long",
        });
      }

      if (/\s/.test(newPassword)) {
        return res.status(400).json({
          success: false,
          message: "Password cannot contain spaces",
        });
      }

      // Find user with valid reset OTP
      const user = await User.findOne({
        email: email.toLowerCase().trim(),
        resetPasswordOTP: otp,
        resetPasswordOTPExpires: { $gt: Date.now() },
      });

      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired OTP",
        });
      }

      // Hash new password
      const saltRounds = parseInt(process.env.SALT_ROUNDS) || 12;
      const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

      // Update user password and clear reset OTP
      user.password = hashedPassword;
      user.resetPasswordOTP = undefined;
      user.resetPasswordOTPExpires = undefined;
      await user.save();

      console.log(`🔐 Password reset successful for ${email}`);

      res.status(200).json({
        success: true,
        message: "Password reset successfully",
      });
    } catch (error) {
      console.error("Error resetting password:", error);
      res.status(500).json({
        success: false,
        message: "Failed to reset password. Please try again.",
      });
    }
  }
}

// Create and bind methods
const authController = new AuthController();

module.exports = {
  register: authController.register.bind(authController),
  login: authController.login.bind(authController),
  verifyOTP: authController.verifyOTP.bind(authController),
  resendOTP: authController.resendOTP.bind(authController),
  sendForgotPasswordOTP:
    authController.sendForgotPasswordOTP.bind(authController),
  verifyResetOTP: authController.verifyResetOTP.bind(authController),
  resetPassword: authController.resetPassword.bind(authController),
  refreshToken: authController.refreshToken.bind(authController),
  logout: authController.logout.bind(authController),
  getMe: authController.getMe.bind(authController),
};
