"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { Button, Input, Alert, Spinner } from "../ui";
import { ROUTES } from "../../lib/constants";
import Link from "next/link";

export default function ForgetPassword() {
  const router = useRouter();
  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
    setError("");

    if (!validateEmail()) {
      return;
    }

    setLoading(true);

    try {
      const result = await forgotPassword(email);

      if (result.success) {
        setAlert({ type: "success", message: result.message });
        setTimeout(() => {
          window.location.href = `${
            ROUTES.VERIFY_RESET_OTP
          }?email=${encodeURIComponent(email)}`;
        }, 1500);
      } else {
        setAlert({
          type: "error",
          message: result.message || "Failed to send reset code",
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
          Enter your email address and we'll send you a code to reset your
          password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          error={error}
          disabled={loading}
        />

        <Button type="submit" variant="primary" fullWidth disabled={loading}>
          {loading ? (
            <Spinner size="sm" className="mx-auto" />
          ) : (
            "Send Reset Code"
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link
          href={ROUTES.LOGIN}
          className="text-sm text-[#0079D3] hover:underline"
        >
          Back to Log In
        </Link>
      </div>
    </div>
  );
}
