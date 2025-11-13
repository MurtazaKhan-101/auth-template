"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as authService from "../lib/auth";
import { ROUTES } from "../lib/constants";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Try to initialize auth with existing session
        const result = await authService.initializeAuth();

        if (result.authenticated && result.user) {
          setUser(result.user);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Failed to initialize auth:", error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  // Listen for logout events from API client
  useEffect(() => {
    const handleLogout = () => {
      // Only handle logout if user is actually authenticated
      if (isAuthenticated) {
        setUser(null);
        setIsAuthenticated(false);
        router.push(ROUTES.LOGIN);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("auth:logout", handleLogout);
      return () => window.removeEventListener("auth:logout", handleLogout);
    }
  }, [router, isAuthenticated]);

  // Login function
  const login = async (email, password) => {
    try {
      const response = await authService.login(email, password);

      if (response.success) {
        setUser(response.user);
        setIsAuthenticated(true);
        return { success: true, user: response.user };
      }

      return { success: false, message: response.message };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Login failed",
      };
    }
  };

  // Register function
  const register = async (firstName, lastName, email, password) => {
    try {
      const response = await authService.register(
        firstName,
        lastName,
        email,
        password
      );
      return {
        success: response.success,
        message: response.message,
        user: response.user,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Registration failed",
      };
    }
  };

  // Verify OTP
  const verifyOTP = async (email, otp) => {
    try {
      const response = await authService.verifyOTP(email, otp);

      if (response.success) {
        setUser(response.user);
        setIsAuthenticated(true);
        return { success: true, user: response.user };
      }

      return { success: false, message: response.message };
    } catch (error) {
      return {
        success: false,
        message: error.message || "OTP verification failed",
      };
    }
  };

  // Resend OTP
  const resendOTP = async (email) => {
    try {
      const response = await authService.resendOTP(email);
      return {
        success: response.success,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to resend OTP",
      };
    }
  };

  // Forgot Password
  const forgotPassword = async (email) => {
    try {
      const response = await authService.forgotPassword(email);
      return {
        success: response.success,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Failed to send reset OTP",
      };
    }
  };

  // Verify Reset OTP
  const verifyResetOTP = async (email, otp) => {
    try {
      const response = await authService.verifyResetOTP(email, otp);
      return {
        success: response.success,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "OTP verification failed",
      };
    }
  };

  // Reset Password
  const resetPassword = async (email, otp, newPassword) => {
    try {
      const response = await authService.resetPassword(email, otp, newPassword);
      return {
        success: response.success,
        message: response.message,
      };
    } catch (error) {
      return {
        success: false,
        message: error.message || "Password reset failed",
      };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      setIsAuthenticated(false);
      router.push(ROUTES.LOGIN);
    } catch (error) {
      console.error("Logout error:", error);
      // Even if logout request fails, clear local state
      setUser(null);
      setIsAuthenticated(false);
      router.push(ROUTES.LOGIN);
    }
  };

  // Handle OAuth success
  const handleOAuthSuccess = (user, token) => {
    const result = authService.handleOAuthSuccess(user, token);
    if (result.success) {
      setUser(result.user);
      setIsAuthenticated(true);
      return { success: true, user: result.user };
    }
    return { success: false, message: "OAuth authentication failed" };
  };

  // Update user data
  const updateUser = (userData) => {
    setUser(userData);
    authService.saveUserData(userData);
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    register,
    verifyOTP,
    resendOTP,
    forgotPassword,
    verifyResetOTP,
    resetPassword,
    logout,
    handleOAuthSuccess,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
