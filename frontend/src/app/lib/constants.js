// API Base URL
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3005";

// API Endpoints
export const API_ENDPOINTS = {
  // Auth endpoints
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  VERIFY_OTP: "/auth/verify-otp",
  RESEND_OTP: "/auth/resend-otp",
  FORGOT_PASSWORD: "/auth/forgot-password",
  VERIFY_RESET_OTP: "/auth/verify-reset-otp",
  RESET_PASSWORD: "/auth/reset-password",
  REFRESH_TOKEN: "/auth/refresh-token",
  GET_ME: "/auth/me",

  // Google OAuth endpoints
  GOOGLE_AUTH: "/auth/google",
  GOOGLE_CALLBACK: "/auth/google/callback",
  GOOGLE_REFRESH_TOKEN: "/auth/google/refresh-token",
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: "auth_token",
  USER: "user_data",
  REFRESH_TOKEN: "refresh_token",
};

// Routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  VERIFY_OTP: "/auth/verify-otp",
  FORGOT_PASSWORD: "/auth/forgot-password",
  VERIFY_RESET_OTP: "/auth/verify-reset-otp",
  RESET_PASSWORD: "/auth/reset-password",
  OAUTH_SUCCESS: "/auth/oauth-success",
  DASHBOARD: "/dashboard",
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  SERVER_ERROR: "Server error. Please try again later.",
  INVALID_CREDENTIALS: "Invalid email or password.",
  GENERIC_ERROR: "Something went wrong. Please try again.",
};
