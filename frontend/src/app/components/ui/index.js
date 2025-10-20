// Button Component - Reddit style
export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  className = "",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full font-bold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#FF4500] text-white hover:bg-[#ff5414] active:bg-[#cc3700]",
    secondary:
      "bg-transparent border border-[#0079D3] text-[#0079D3] hover:bg-[#0079D3] hover:text-white",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800",
    google:
      "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

// Input Component - Reddit style
export const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-3 rounded border ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 dark:border-gray-600 focus:border-[#0079D3]"
        } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50 transition-all ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Card Component - Reddit style
export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

// Alert Component - Reddit style
export const Alert = ({ type = "info", message, onClose }) => {
  const types = {
    success:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    error:
      "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
  };

  return (
    <div
      className={`p-4 rounded border ${types[type]} flex justify-between items-center`}
    >
      <span className="text-sm">{message}</span>
      {onClose && (
        <button onClick={onClose} className="ml-4 font-bold hover:opacity-70">
          ×
        </button>
      )}
    </div>
  );
};

// Loading Spinner - Reddit style
export const Spinner = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={`${sizes[size]} border-gray-200 border-t-[#FF4500] rounded-full animate-spin ${className}`}
    ></div>
  );
};

// Link Component - Reddit style
export const Link = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`text-[#0079D3] hover:underline text-sm ${className}`}
    >
      {children}
    </a>
  );
};

// Divider Component
export const Divider = ({ text, className = "" }) => {
  return (
    <div className={`flex items-center my-4 ${className}`}>
      <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
      {text && (
        <span className="px-4 text-sm text-gray-500 dark:text-gray-400">
          {text}
        </span>
      )}
      <div className="flex-1 border-t border-gray-300 dark:border-gray-600"></div>
    </div>
  );
};
