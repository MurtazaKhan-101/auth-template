import apiClient from "./api";
import { API_ENDPOINTS, STORAGE_KEYS } from "./constants";

// Save auth data to localStorage
export const saveAuthData = (token, user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }
};

// Get auth data from localStorage
export const getAuthData = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    const userStr = localStorage.getItem(STORAGE_KEYS.USER);
    const user = userStr ? JSON.parse(userStr) : null;
    return { token, user };
  }
  return { token: null, user: null };
};

// Clear auth data from localStorage
export const clearAuthData = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const { token } = getAuthData();
  return !!token;
};

// Register user
export const register = async (firstName, lastName, email, password) => {
  const response = await apiClient.post(
    API_ENDPOINTS.REGISTER,
    { firstName, lastName, email, password },
    { includeAuth: false }
  );
  return response;
};

// Login user
export const login = async (email, password) => {
  const response = await apiClient.post(
    API_ENDPOINTS.LOGIN,
    { email, password },
    { includeAuth: false }
  );

  if (response.success && response.token) {
    saveAuthData(response.token, response.user);
  }

  return response;
};

// Verify OTP
export const verifyOTP = async (email, otp) => {
  const response = await apiClient.post(
    API_ENDPOINTS.VERIFY_OTP,
    { email, otp },
    { includeAuth: false }
  );

  if (response.success && response.token) {
    saveAuthData(response.token, response.user);
  }

  return response;
};

// Resend OTP
export const resendOTP = async (email) => {
  const response = await apiClient.post(
    API_ENDPOINTS.RESEND_OTP,
    { email },
    { includeAuth: false }
  );
  return response;
};

// Forgot Password
export const forgotPassword = async (email) => {
  const response = await apiClient.post(
    API_ENDPOINTS.FORGOT_PASSWORD,
    { email },
    { includeAuth: false }
  );
  return response;
};

// Verify Reset OTP
export const verifyResetOTP = async (email, otp) => {
  const response = await apiClient.post(
    API_ENDPOINTS.VERIFY_RESET_OTP,
    { email, otp },
    { includeAuth: false }
  );
  return response;
};

// Reset Password
export const resetPassword = async (email, otp, newPassword) => {
  const response = await apiClient.post(
    API_ENDPOINTS.RESET_PASSWORD,
    { email, otp, newPassword },
    { includeAuth: false }
  );
  return response;
};

// Get current user
export const getCurrentUser = async () => {
  const response = await apiClient.get(API_ENDPOINTS.GET_ME);
  return response;
};

// Refresh token
export const refreshToken = async () => {
  const response = await apiClient.post(API_ENDPOINTS.REFRESH_TOKEN);

  if (response.success && response.token) {
    const { user } = getAuthData();
    saveAuthData(response.token, user);
  }

  return response;
};

// Logout
export const logout = () => {
  clearAuthData();
};

// Refresh Google Token
export const refreshGoogleToken = async () => {
  const response = await apiClient.post(API_ENDPOINTS.GOOGLE_REFRESH_TOKEN);
  return response;
};
