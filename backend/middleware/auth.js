const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("❌ No valid auth header");
      return res.status(401).json({
        success: false,
        message: "Access denied. No valid token provided.",
      });
    }

    const token = authHeader.substring(7);

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        console.log("❌ User not found in database");
        return res.status(401).json({
          success: false,
          message: "Invalid token. User not found.",
        });
      }

      if (!user.isVerified) {
        console.log("❌ User not verified, blocking access");
        return res.status(403).json({
          success: false,
          message: "Account not verified. Please verify your email.",
        });
      }

      // Add user to request object
      req.user = user;
      next();
    } catch (tokenError) {
      console.log("❌ Token verification failed:", tokenError.message);
      return res.status(401).json({
        success: false,
        message: "Invalid token.",
      });
    }
  } catch (error) {
    console.error("❌ Authentication middleware error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during authentication",
    });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Insufficient permissions",
      });
    }

    next();
  };
};

module.exports = {
  authenticate,
  authorize,
};
