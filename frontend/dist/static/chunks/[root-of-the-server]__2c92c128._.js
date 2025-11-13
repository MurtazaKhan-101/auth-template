(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/geist_2ae47f08.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_2ae47f08-module__h69qWW__className",
  "variable": "geist_2ae47f08-module__h69qWW__variable",
});
}),
"[next]/internal/font/google/geist_2ae47f08.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_2ae47f08$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_2ae47f08.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_2ae47f08$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_2ae47f08$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_2ae47f08$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_mono_eb58308d.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_mono_eb58308d-module__w_p2Lq__className",
  "variable": "geist_mono_eb58308d-module__w_p2Lq__variable",
});
}),
"[next]/internal/font/google/geist_mono_eb58308d.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_eb58308d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_eb58308d.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_eb58308d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_eb58308d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_eb58308d$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/app/lib/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Base URL
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS,
    "ERROR_MESSAGES",
    ()=>ERROR_MESSAGES,
    "ROUTES",
    ()=>ROUTES,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3003") || "http://localhost:3003";
const API_ENDPOINTS = {
    // Auth endpoints
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    VERIFY_OTP: "/auth/verify-otp",
    RESEND_OTP: "/auth/resend-otp",
    FORGOT_PASSWORD: "/auth/forgot-password",
    VERIFY_RESET_OTP: "/auth/verify-reset-otp",
    RESET_PASSWORD: "/auth/reset-password",
    REFRESH_TOKEN: "/auth/refresh-token",
    LOGOUT: "/auth/logout",
    GET_ME: "/auth/me",
    // Google OAuth endpoints
    GOOGLE_AUTH: "/auth/google",
    GOOGLE_CALLBACK: "/auth/google/callback",
    GOOGLE_REFRESH_TOKEN: "/auth/google/refresh-token"
};
const STORAGE_KEYS = {
    USER: "user_data"
};
const ROUTES = {
    HOME: "/",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    VERIFY_OTP: "/auth/verify-otp",
    FORGOT_PASSWORD: "/auth/forgot-password",
    VERIFY_RESET_OTP: "/auth/verify-reset-otp",
    RESET_PASSWORD: "/auth/reset-password",
    OAUTH_SUCCESS: "/auth/oauth-success",
    DASHBOARD: "/dashboard"
};
const ERROR_MESSAGES = {
    NETWORK_ERROR: "Network error. Please check your connection.",
    SERVER_ERROR: "Server error. Please try again later.",
    INVALID_CREDENTIALS: "Invalid email or password.",
    GENERIC_ERROR: "Something went wrong. Please try again."
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/constants.js [app-client] (ecmascript)");
;
class ApiClient {
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
            const jsonPayload = decodeURIComponent(atob(base64).split("").map((c)=>"%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
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
    processQueue(error) {
        let token = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        this.failedQueue.forEach((param)=>{
            let { resolve, reject } = param;
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
            return new Promise((resolve, reject)=>{
                this.failedQueue.push({
                    resolve,
                    reject
                });
            });
        }
        this.isRefreshing = true;
        try {
            const response = await fetch("".concat(this.baseURL).concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].REFRESH_TOKEN), {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            });
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
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent("auth:logout"));
            }
            throw error;
        } finally{
            this.isRefreshing = false;
        }
    }
    // Set default headers
    getHeaders() {
        let includeAuth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, isFormData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const headers = {};
        // Don't set Content-Type for FormData, let browser set it with boundary
        if (!isFormData) {
            headers["Content-Type"] = "application/json";
        }
        if (includeAuth) {
            const token = this.getAccessToken();
            if (token) {
                headers["Authorization"] = "Bearer ".concat(token);
            }
        }
        return headers;
    }
    // Generic request handler with auto token refresh
    async request(endpoint) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
        const url = "".concat(this.baseURL).concat(endpoint);
        const config = {
            ...options,
            credentials: "include",
            headers: {
                ...this.getHeaders(options.includeAuth !== false, isFormData),
                ...options.headers
            }
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
                                Authorization: "Bearer ".concat(newToken)
                            }
                        };
                        const retryResponse = await fetch(url, retryConfig);
                        const retryData = await retryResponse.json();
                        if (!retryResponse.ok) {
                            throw {
                                status: retryResponse.status,
                                message: retryData.message || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].GENERIC_ERROR,
                                data: retryData
                            };
                        }
                        return retryData;
                    } catch (refreshError) {
                        console.error("Token refresh during request failed:", refreshError);
                        throw {
                            status: 401,
                            message: "Session expired. Please login again.",
                            data: null
                        };
                    }
                }
            }
            // For non-authenticated requests or other errors, just throw the error
            if (!response.ok) {
                throw {
                    status: response.status,
                    message: data.message || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].GENERIC_ERROR,
                    data: data
                };
            }
            return data;
        } catch (error) {
            // Network error
            if (!error.status) {
                throw {
                    status: 0,
                    message: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ERROR_MESSAGES"].NETWORK_ERROR,
                    data: null
                };
            }
            throw error;
        }
    }
    // GET request
    async get(endpoint) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this.request(endpoint, {
            ...options,
            method: "GET"
        });
    }
    // POST request
    async post(endpoint, data) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.request(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(data)
        });
    }
    // PUT request
    async put(endpoint, data) {
        let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.request(endpoint, {
            ...options,
            method: "PUT",
            body: JSON.stringify(data)
        });
    }
    // DELETE request
    async delete(endpoint) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this.request(endpoint, {
            ...options,
            method: "DELETE"
        });
    }
    // Special method for logout that clears the access token
    async logout() {
        try {
            // Call logout endpoint to clear refresh token cookie
            await this.post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].LOGOUT, {});
        } catch (error) {
            console.error("Logout request failed:", error);
        // Continue with local cleanup even if server request fails
        } finally{
            // Always clear local access token
            this.clearAccessToken();
        }
    }
    constructor(){
        this.baseURL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"];
        this.accessToken = null; // Store access token in memory only
        this.isRefreshing = false;
        this.failedQueue = [];
    }
}
// Create singleton instance
const apiClient = new ApiClient();
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lib/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearUserData",
    ()=>clearUserData,
    "forgotPassword",
    ()=>forgotPassword,
    "getMe",
    ()=>getMe,
    "getUserData",
    ()=>getUserData,
    "handleOAuthSuccess",
    ()=>handleOAuthSuccess,
    "initializeAuth",
    ()=>initializeAuth,
    "isAuthenticated",
    ()=>isAuthenticated,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "register",
    ()=>register,
    "resendOTP",
    ()=>resendOTP,
    "resetPassword",
    ()=>resetPassword,
    "saveUserData",
    ()=>saveUserData,
    "verifyOTP",
    ()=>verifyOTP,
    "verifyResetOTP",
    ()=>verifyResetOTP
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/constants.js [app-client] (ecmascript)");
;
;
const saveUserData = (user)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].USER, JSON.stringify(user));
    }
};
const getUserData = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const userStr = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].USER);
        return userStr ? JSON.parse(userStr) : null;
    }
    //TURBOPACK unreachable
    ;
};
const clearUserData = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].USER);
    }
};
const login = async (email, password)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].LOGIN, {
            email,
            password
        }, {
            includeAuth: false
        });
        if (response.success) {
            // Store access token in memory and user data in localStorage
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAccessToken(response.token);
            saveUserData(response.user);
            return response;
        }
        throw new Error(response.message || "Login failed");
    } catch (error) {
        throw error;
    }
};
const register = async (firstName, lastName, email, password)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].REGISTER, {
            firstName,
            lastName,
            email,
            password
        }, {
            includeAuth: false
        });
        return response;
    } catch (error) {
        throw error;
    }
};
const verifyOTP = async (email, otp)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].VERIFY_OTP, {
            email,
            otp
        }, {
            includeAuth: false
        });
        if (response.success) {
            // Store access token in memory and user data in localStorage
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAccessToken(response.token);
            saveUserData(response.user);
            return response;
        }
        throw new Error(response.message || "OTP verification failed");
    } catch (error) {
        throw error;
    }
};
const resendOTP = async (email)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].RESEND_OTP, {
            email
        }, {
            includeAuth: false
        });
        return response;
    } catch (error) {
        throw error;
    }
};
const forgotPassword = async (email)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].FORGOT_PASSWORD, {
            email
        }, {
            includeAuth: false
        });
        return response;
    } catch (error) {
        throw error;
    }
};
const verifyResetOTP = async (email, otp)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].VERIFY_RESET_OTP, {
            email,
            otp
        }, {
            includeAuth: false
        });
        return response;
    } catch (error) {
        throw error;
    }
};
const resetPassword = async (email, otp, newPassword)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].RESET_PASSWORD, {
            email,
            otp,
            newPassword
        }, {
            includeAuth: false
        });
        return response;
    } catch (error) {
        throw error;
    }
};
const getMe = async ()=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].GET_ME);
        return response;
    } catch (error) {
        throw error;
    }
};
const logout = async ()=>{
    try {
        // Call API client logout which handles server request and local cleanup
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].logout();
        // Clear user data from localStorage
        clearUserData();
        return {
            success: true
        };
    } catch (error) {
        // Even if server request fails, we should clear local data
        clearUserData();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clearAccessToken();
        throw error;
    }
};
const isAuthenticated = ()=>{
    return !!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAccessToken();
};
const initializeAuth = async ()=>{
    try {
        // First, check if we have any user data in localStorage
        const existingUser = getUserData();
        // Try to refresh token first (this will work if there's a valid refresh token cookie)
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].refreshAccessToken();
            // If refresh succeeds, try to get current user info
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].GET_ME);
            if (response.success) {
                saveUserData(response.user);
                return {
                    authenticated: true,
                    user: response.user
                };
            }
        } catch (refreshError) {
            console.log("No valid refresh token or token refresh failed:", refreshError.message);
            // If refresh fails, clear any stale data
            clearUserData();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clearAccessToken();
        }
        return {
            authenticated: false,
            user: null
        };
    } catch (error) {
        // If anything fails, clear any stale data
        clearUserData();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clearAccessToken();
        return {
            authenticated: false,
            user: null
        };
    }
};
const handleOAuthSuccess = (user, token)=>{
    // Store access token in memory and user data in localStorage
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAccessToken(token);
    saveUserData(user);
    return {
        success: true,
        user
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/context/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/auth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/constants.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = (param)=>{
    let { children } = param;
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Initialize auth state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const initAuth = {
                "AuthProvider.useEffect.initAuth": async ()=>{
                    try {
                        // Try to initialize auth with existing session
                        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeAuth"]();
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
                    } finally{
                        setLoading(false);
                    }
                }
            }["AuthProvider.useEffect.initAuth"];
            initAuth();
        }
    }["AuthProvider.useEffect"], []);
    // Listen for logout events from API client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            const handleLogout = {
                "AuthProvider.useEffect.handleLogout": ()=>{
                    // Only handle logout if user is actually authenticated
                    if (isAuthenticated) {
                        setUser(null);
                        setIsAuthenticated(false);
                        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].LOGIN);
                    }
                }
            }["AuthProvider.useEffect.handleLogout"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener("auth:logout", handleLogout);
                return ({
                    "AuthProvider.useEffect": ()=>window.removeEventListener("auth:logout", handleLogout)
                })["AuthProvider.useEffect"];
            }
        }
    }["AuthProvider.useEffect"], [
        router,
        isAuthenticated
    ]);
    // Login function
    const login = async (email, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"](email, password);
            if (response.success) {
                setUser(response.user);
                setIsAuthenticated(true);
                return {
                    success: true,
                    user: response.user
                };
            }
            return {
                success: false,
                message: response.message
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || "Login failed"
            };
        }
    };
    // Register function
    const register = async (firstName, lastName, email, password)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["register"](firstName, lastName, email, password);
            return {
                success: response.success,
                message: response.message,
                user: response.user
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || "Registration failed"
            };
        }
    };
    // Verify OTP
    const verifyOTP = async (email, otp)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOTP"](email, otp);
            if (response.success) {
                setUser(response.user);
                setIsAuthenticated(true);
                return {
                    success: true,
                    user: response.user
                };
            }
            return {
                success: false,
                message: response.message
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || "OTP verification failed"
            };
        }
    };
    // Resend OTP
    const resendOTP = async (email)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resendOTP"](email);
            return {
                success: response.success,
                message: response.message
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || "Failed to resend OTP"
            };
        }
    };
    // Forgot Password
    const forgotPassword = async (email)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forgotPassword"](email);
            return {
                success: response.success,
                message: response.message
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || "Failed to send reset OTP"
            };
        }
    };
    // Verify Reset OTP
    const verifyResetOTP = async (email, otp)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyResetOTP"](email, otp);
            return {
                success: response.success,
                message: response.message
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || "OTP verification failed"
            };
        }
    };
    // Reset Password
    const resetPassword = async (email, otp, newPassword)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetPassword"](email, otp, newPassword);
            return {
                success: response.success,
                message: response.message
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || "Password reset failed"
            };
        }
    };
    // Logout function
    const logout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logout"]();
            setUser(null);
            setIsAuthenticated(false);
            router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].LOGIN);
        } catch (error) {
            console.error("Logout error:", error);
            // Even if logout request fails, clear local state
            setUser(null);
            setIsAuthenticated(false);
            router.push(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROUTES"].LOGIN);
        }
    };
    // Handle OAuth success
    const handleOAuthSuccess = (user, token)=>{
        const result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleOAuthSuccess"](user, token);
        if (result.success) {
            setUser(result.user);
            setIsAuthenticated(true);
            return {
                success: true,
                user: result.user
            };
        }
        return {
            success: false,
            message: "OAuth authentication failed"
        };
    };
    // Update user data
    const updateUser = (userData)=>{
        setUser(userData);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveUserData"](userData);
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
        updateUser
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/context/AuthContext.js",
        lineNumber: 234,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AuthProvider, "EGDQaXzbtpimJhsqRvbtFTFP9ZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_2ae47f08$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_2ae47f08.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_eb58308d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_eb58308d.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function RootLayout(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Auth Template - Connect & Share"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "A modern community platform"
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.js",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "".concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_2ae47f08$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " ").concat(__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_eb58308d$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable, " antialiased"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AuthProvider"], {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.js",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__2c92c128._.js.map