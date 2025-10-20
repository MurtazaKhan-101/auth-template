"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { Button, Input, Alert, Spinner } from "../ui";
import { ROUTES } from "../../lib/constants";

export default function VerifyResetOtp() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { verifyResetOTP, forgotPassword } = useAuth();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    } else {
      router.push(ROUTES.FORGOT_PASSWORD);
    }
  }, [searchParams, router]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert(null);
    setError("");

    if (!otp.trim()) {
      setError("OTP is required");
      return;
    }

    if (otp.length !== 4) {
      setError("OTP must be 4 digits");
      return;
    }

    setLoading(true);

    try {
      const result = await verifyResetOTP(email, otp);

      if (result.success) {
        setAlert({ type: "success", message: "OTP verified! Redirecting..." });
        setTimeout(() => {
          window.location.href = `${
            ROUTES.RESET_PASSWORD
          }?email=${encodeURIComponent(email)}&otp=${otp}`;
        }, 1000);
      } else {
        setAlert({ type: "error", message: result.message || "Invalid OTP" });
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: error.message || "Verification failed",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setAlert(null);
    setResending(true);

    try {
      const result = await forgotPassword(email);

      if (result.success) {
        setAlert({ type: "success", message: "Reset code sent successfully!" });
        setCountdown(60);
      } else {
        setAlert({
          type: "error",
          message: result.message || "Failed to resend code",
        });
      }
    } catch (error) {
      setAlert({
        type: "error",
        message: error.message || "Failed to resend code",
      });
    } finally {
      setResending(false);
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
          We've sent a password reset code to <strong>{email}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter 4-digit OTP"
          value={otp}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "").slice(0, 4);
            setOtp(value);
            if (error) setError("");
          }}
          error={error}
          disabled={loading}
          maxLength={4}
          className="text-center text-2xl tracking-widest"
        />

        <Button type="submit" variant="primary" fullWidth disabled={loading}>
          {loading ? <Spinner size="sm" className="mx-auto" /> : "Verify Code"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Didn't receive the code?
        </p>
        <button
          onClick={handleResendOTP}
          disabled={resending || countdown > 0}
          className="text-sm text-[#0079D3] hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {resending
            ? "Sending..."
            : countdown > 0
            ? `Resend in ${countdown}s`
            : "Resend Code"}
        </button>
      </div>
    </div>
  );
}
