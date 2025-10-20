"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { Button, Input, Alert, Spinner } from "../ui";
import { ROUTES } from "../../lib/constants";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { resetPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const otpParam = searchParams.get("otp");

    if (emailParam && otpParam) {
      setEmail(emailParam);
      setOtp(otpParam);
    } else {
      router.push(ROUTES.FORGOT_PASSWORD);
    }
  }, [searchParams, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "Password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    } else if (/\s/.test(formData.newPassword)) {
      newErrors.newPassword = "Password cannot contain spaces";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const result = await resetPassword(email, otp, formData.newPassword);

      if (result.success) {
        setAlert({
          type: "success",
          message: "Password reset successful! Redirecting to login...",
        });
        setTimeout(() => {
          window.location.href = ROUTES.LOGIN;
        }, 2000);
      } else {
        setAlert({
          type: "error",
          message: result.message || "Failed to reset password",
        });
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: error.message || "An error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}

      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Create a new password for <strong>{email}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={handleChange}
          error={errors.newPassword}
          disabled={loading}
        />

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          disabled={loading}
        />

        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p>Password must:</p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Be at least 8 characters long</li>
            <li>Not contain spaces</li>
          </ul>
        </div>

        <Button type="submit" variant="primary" fullWidth disabled={loading}>
          {loading ? (
            <Spinner size="sm" className="mx-auto" />
          ) : (
            "Reset Password"
          )}
        </Button>
      </form>
    </div>
  );
}
