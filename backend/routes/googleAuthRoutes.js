const express = require("express");
const googleAuthController = require("../controllers/googleAuthController");
const { authenticate } = require("../middleware/auth");
const router = express.Router();

// Middleware to check if Google OAuth is configured
const checkGoogleOAuthConfig = (req, res, next) => {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    return res.status(500).json({
      success: false,
      message: "Google OAuth is not properly configured on the server",
    });
  }
  next();
};

router.get("/google", checkGoogleOAuthConfig, googleAuthController.initiate);

router.get(
  "/google/callback",
  checkGoogleOAuthConfig,
  googleAuthController.callback
);

router.post(
  "/google/refresh-token",
  authenticate,
  checkGoogleOAuthConfig,
  googleAuthController.refreshGoogleToken
);

module.exports = router;
