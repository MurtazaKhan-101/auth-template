const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: false },
    profileImage: {
      type: String,
      default: "https://pub-ab2287d8b98448b28b402cbb2d7098d8.r2.dev/user.svg",
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isVerified: { type: Boolean, default: false },
    googleId: { type: String, default: null },
    googleRefreshToken: { type: String, default: null },
    refreshToken: { type: String, default: null },
    refreshTokenExpiry: { type: Date, default: null },
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },
    resetPasswordOTP: { type: String, default: null },
    resetPasswordOTPExpires: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ googleId: 1 });
userSchema.index({ createdAt: -1 });

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.methods.toSafeObject = function () {
  const user = this.toObject();
  delete user.password;
  delete user.otp;
  delete user.otpExpiry;
  delete user.resetPasswordOTP;
  delete user.resetPasswordOTPExpires;
  delete user.googleRefreshToken;
  delete user.refreshToken;
  delete user.refreshTokenExpiry;
  delete user.twoFactorSecret;
  delete user.activeSessions;
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
