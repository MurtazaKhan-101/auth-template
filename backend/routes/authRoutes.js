const express = require("express");
const authController = require("../controllers/authController");
const { authenticate } = require("../middleware/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/verify-otp", authController.verifyOTP);
router.post("/resend-otp", authController.resendOTP);
router.post("/forgot-password", authController.sendForgotPasswordOTP);
router.post("/verify-reset-otp", authController.verifyResetOTP);
router.post("/reset-password", authController.resetPassword);
router.post("/refresh-token", authenticate, authController.refreshToken);
router.get("/me", authenticate, authController.getMe);
module.exports = router;
