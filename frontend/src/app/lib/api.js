import { API_BASE_URL, STORAGE_KEYS, ERROR_MESSAGES } from "./constants";

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get token from localStorage
  getToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem(STORAGE_KEYS.TOKEN);
    }
    return null;
  }

  // Set default headers
  getHeaders(includeAuth = true) {
    const headers = {
      "Content-Type": "application/json",
    };

    if (includeAuth) {
      const token = this.getToken();
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return headers;
  }

  // Generic request handler
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.getHeaders(options.includeAuth !== false),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

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
}

// Create singleton instance
const apiClient = new ApiClient();

export default apiClient;
