const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: false },
    profileImage: {
      type: String,
      default:
        "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?t=st=1760699880~exp=1760703480~hmac=1526284b509ef026be2d473d785e36fea4341d604665ca9d7d03ccce458b3219&w=1060",
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isVerified: { type: Boolean, default: false },
    googleId: { type: String, default: null },
    googleRefreshToken: { type: String, default: null },
    otp: { type: String, default: null },
    otpExpiry: { type: Date, default: null },
    resetPasswordOTP: { type: String, default: null },
    resetPasswordOTPExpires: { type: Date, default: null },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
