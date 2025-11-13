const nodemailer = require("nodemailer");

const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

const alternativeTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS,
  },
});

const testEmailConnection = async (transporter) => {
  try {
    await transporter.verify();
    console.log("Email server is ready to send messages");
    return true;
  } catch (error) {
    console.log("Email configuration error:", error);
    return false;
  }
};

const sendOTP = async (email, otp, type = "verification") => {
  try {
    const transporter = createTransporter();

    const isPasswordReset = type === "password-reset";

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: isPasswordReset
        ? "Your OTP for Auth Template Password Reset"
        : "Your OTP for Auth Template Verification",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; text-align: center; margin-bottom: 20px;"> ${
              isPasswordReset
                ? "Reset your password"
                : "Welcome to Auth Template"
            }</h2>
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              ${
                isPasswordReset
                  ? "To reset your password, please use the following One-Time Password (OTP):"
                  : "Thank you for registering with Auth Template. To complete your email verification, please use the following One-Time Password (OTP):"
              }
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <span style="font-size: 32px; font-weight: bold; color: #007bff; background-color: #e7f3ff; padding: 15px 30px; border-radius: 8px; letter-spacing: 5px;">
                ${otp}
              </span>
            </div>
            <p style="color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
              This OTP will expire in 5 minutes. Please do not share this code with anyone.
            </p>
            <p style="color: #666; font-size: 14px; line-height: 1.6;">
              ${
                isPasswordReset
                  ? "If you didn't request password reset, please ignore this email."
                  : "If you didn't request this verification, please ignore this email."
              }
            </p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #999; font-size: 12px; text-align: center;">
              © 2025 Auth Template. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending OTP email:", error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  createTransporter,
  alternativeTransporter,
  testEmailConnection,
  sendOTP,
};
