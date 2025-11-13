import { API_BASE_URL, ERROR_MESSAGES, API_ENDPOINTS } from "./constants";

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.accessToken = null; // Store access token in memory only
    this.isRefreshing = false;
    this.failedQueue = [];
  }

  // Set access token in memory
  setAccessToken(token) {
    this.accessToken = token;
  }

  // Get access token from memory
  getAccessToken() {
    return this.accessToken;
  }

  // Clear access token from memory
  clearAccessToken() {
    this.accessToken = null;
  }

  // Check if token is about to expire (within 2 minutes)
  isTokenExpiringSoon(token) {
    if (!token) return true;

    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );

      const payload = JSON.parse(jsonPayload);
      const currentTime = Math.floor(Date.now() / 1000);
      const expiryTime = payload.exp;

      // Check if token expires within 2 minutes (120 seconds)
      return expiryTime - currentTime < 120;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  }
  // isTokenExpiringSoon(token) {
  //   if (!token) return false;

  //   try {
  //     const payload = JSON.parse(atob(token.split(".")[1]));
  //     const expiryTime = payload.exp * 1000;
  //     const currentTime = Date.now();
  //     const timeUntilExpiry = expiryTime - currentTime;

  //     // Refresh if token expires within 10 seconds (for 30s tokens)
  //     return timeUntilExpiry < 10 * 1000; // Changed from 2 * 60 * 1000
  //   } catch {
  //     return true;
  //   }
  // }

  // Process failed queue after successful refresh
  processQueue(error, token = null) {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });

    this.failedQueue = [];
  }

  // Refresh access token using HTTP-only cookie
  async refreshAccessToken() {
    if (this.isRefreshing) {
      // If already refreshing, wait for it to complete
      return new Promise((resolve, reject) => {
        this.failedQueue.push({ resolve, reject });
      });
    }

    this.isRefreshing = true;

    try {
      const response = await fetch(
        `${this.baseURL}${API_ENDPOINTS.REFRESH_TOKEN}`,
        {
          method: "POST",
          credentials: "include", // Include cookies
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to refresh token");
      }

      // Save new access token in memory
      this.setAccessToken(data.token);
      this.processQueue(null, data.token);
      return data.token;
    } catch (error) {
      console.error("Token refresh failed:", error);
      this.processQueue(error, null);

      // Clear access token
      this.clearAccessToken();

      // Dispatch event for auth context to handle logout only if we have a valid user session
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("auth:logout"));
      }

      throw error;
    } finally {
      this.isRefreshing = false;
    }
  }

  // Set default headers
  getHeaders(includeAuth = true, isFormData = false) {
    const headers = {};

    // Don't set Content-Type for FormData, let browser set it with boundary
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
    }

    if (includeAuth) {
      const token = this.getAccessToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // Generic request handler with auto token refresh
  async request(endpoint, options = {}) {
    // Only check and refresh token for authenticated requests
    if (options.includeAuth !== false) {
      const token = this.getAccessToken();
      if (token && this.isTokenExpiringSoon(token)) {
        try {
          await this.refreshAccessToken();
        } catch (error) {
          console.error("Pre-request token refresh failed:", error);
          // Don't throw here, let the request proceed and handle 401 if needed
        }
      }
    }

    // Check if body is FormData to handle headers correctly
    const isFormData = options.body instanceof FormData;

    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      credentials: "include", // Always include cookies
      headers: {
        ...this.getHeaders(options.includeAuth !== false, isFormData),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      // Handle 401 Unauthorized (token expired) - but only for authenticated requests
      if (response.status === 401 && options.includeAuth !== false) {
        // Check if it's specifically a token expiration
        if (data.expired) {
          try {
            // Try to refresh token
            const newToken = await this.refreshAccessToken();

            // Retry the original request with new token
            const retryConfig = {
              ...config,
              headers: {
                ...config.headers,
                Authorization: `Bearer ${newToken}`,
              },
            };

            const retryResponse = await fetch(url, retryConfig);
            const retryData = await retryResponse.json();

            if (!retryResponse.ok) {
              throw {
                status: retryResponse.status,
                message: retryData.message || ERROR_MESSAGES.GENERIC_ERROR,
                data: retryData,
              };
            }

            return retryData;
          } catch (refreshError) {
            console.error("Token refresh during request failed:", refreshError);
            throw {
              status: 401,
              message: "Session expired. Please login again.",
              data: null,
            };
          }
        }
      }

      // For non-authenticated requests or other errors, just throw the error
      if (!response.ok) {
        throw {
          status: response.status,
          message: data.message || ERROR_MESSAGES.GENERIC_ERROR,
          data: data,
        };
      }

      return data;
    } catch (error) {
      // Network error
      if (!error.status) {
        throw {
          status: 0,
          message: ERROR_MESSAGES.NETWORK_ERROR,
          data: null,
        };
      }
      throw error;
    }
  }

  // GET request
  async get(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "GET",
    });
  }

  // POST request
  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "DELETE",
    });
  }

  // Special method for logout that clears the access token
  async logout() {
    try {
      // Call logout endpoint to clear refresh token cookie
      await this.post(API_ENDPOINTS.LOGOUT, {});
    } catch (error) {
      console.error("Logout request failed:", error);
      // Continue with local cleanup even if server request fails
    } finally {
      // Always clear local access token
      this.clearAccessToken();
    }
  }
}

// Create singleton instance
const apiClient = new ApiClient();

export default apiClient;
