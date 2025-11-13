import apiClient from "./api";
import { API_ENDPOINTS, STORAGE_KEYS } from "./constants";

// Save user data to localStorage (only user data, no tokens)
export const saveUserData = (user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  }
};

// Get user data from localStorage
export const getUserData = () => {
  if (typeof window !== "undefined") {
    const userStr = localStorage.getItem(STORAGE_KEYS.USER);
    return userStr ? JSON.parse(userStr) : null;
  }
  return null;
};

// Clear user data from localStorage
export const clearUserData = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEYS.USER);
  }
};

// Login
export const login = async (email, password) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.LOGIN,
      { email, password },
      { includeAuth: false }
    );

    if (response.success) {
      // Store access token in memory and user data in localStorage
      apiClient.setAccessToken(response.token);
      saveUserData(response.user);
      return response;
    }

    throw new Error(response.message || "Login failed");
  } catch (error) {
    throw error;
  }
};

// Register
export const register = async (firstName, lastName, email, password) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.REGISTER,
      { firstName, lastName, email, password },
      { includeAuth: false }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// Verify OTP
export const verifyOTP = async (email, otp) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.VERIFY_OTP,
      { email, otp },
      { includeAuth: false }
    );

    if (response.success) {
      // Store access token in memory and user data in localStorage
      apiClient.setAccessToken(response.token);
      saveUserData(response.user);
      return response;
    }

    throw new Error(response.message || "OTP verification failed");
  } catch (error) {
    throw error;
  }
};

// Resend OTP
export const resendOTP = async (email) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.RESEND_OTP,
      { email },
      { includeAuth: false }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// Forgot Password
export const forgotPassword = async (email) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.FORGOT_PASSWORD,
      { email },
      { includeAuth: false }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// Verify Reset OTP
export const verifyResetOTP = async (email, otp) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.VERIFY_RESET_OTP,
      { email, otp },
      { includeAuth: false }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// Reset Password
export const resetPassword = async (email, otp, newPassword) => {
  try {
    const response = await apiClient.post(
      API_ENDPOINTS.RESET_PASSWORD,
      { email, otp, newPassword },
      { includeAuth: false }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// Get user info (protected route)
export const getMe = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.GET_ME);
    return response;
  } catch (error) {
    throw error;
  }
};

// Logout
export const logout = async () => {
  try {
    // Call API client logout which handles server request and local cleanup
    await apiClient.logout();

    // Clear user data from localStorage
    clearUserData();

    return { success: true };
  } catch (error) {
    // Even if server request fails, we should clear local data
    clearUserData();
    apiClient.clearAccessToken();
    throw error;
  }
};

// Check if user is authenticated (has valid access token)
export const isAuthenticated = () => {
  return !!apiClient.getAccessToken();
};

// Initialize auth state (call this on app startup)
export const initializeAuth = async () => {
  try {
    // First, check if we have any user data in localStorage
    const existingUser = getUserData();

    // Try to refresh token first (this will work if there's a valid refresh token cookie)
    try {
      await apiClient.refreshAccessToken();
      // If refresh succeeds, try to get current user info
      const response = await apiClient.get(API_ENDPOINTS.GET_ME);

      if (response.success) {
        saveUserData(response.user);
        return { authenticated: true, user: response.user };
      }
    } catch (refreshError) {
      console.log(
        "No valid refresh token or token refresh failed:",
        refreshError.message
      );
      // If refresh fails, clear any stale data
      clearUserData();
      apiClient.clearAccessToken();
    }

    return { authenticated: false, user: null };
  } catch (error) {
    // If anything fails, clear any stale data
    clearUserData();
    apiClient.clearAccessToken();
    return { authenticated: false, user: null };
  }
};

// Handle OAuth success (for Google login)
export const handleOAuthSuccess = (user, token) => {
  // Store access token in memory and user data in localStorage
  apiClient.setAccessToken(token);
  saveUserData(user);
  return { success: true, user };
};
