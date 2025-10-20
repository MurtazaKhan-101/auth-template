"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { saveAuthData } from "../../lib/auth";
import { ROUTES } from "../../lib/constants";
import { Spinner } from "../../components/ui";

export default function OAuthSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("processing");

  useEffect(() => {
    const handleOAuthCallback = () => {
      try {
        const userParam = searchParams.get("user");
        const tokenParam = searchParams.get("token");
        const errorParam = searchParams.get("error");

        if (errorParam) {
          setStatus("error");
          setTimeout(() => router.push(ROUTES.LOGIN), 2000);
          return;
        }

        if (userParam && tokenParam) {
          const user = JSON.parse(decodeURIComponent(userParam));
          const token = decodeURIComponent(tokenParam);

          // Save auth data
          saveAuthData(token, user);

          setStatus("success");

          // Redirect to dashboard
          setTimeout(() => {
            window.location.href = ROUTES.DASHBOARD;
          }, 1000);
        } else {
          setStatus("error");
          setTimeout(() => router.push(ROUTES.LOGIN), 2000);
        }
      } catch (error) {
        console.error("OAuth callback error:", error);
        setStatus("error");
        setTimeout(() => router.push(ROUTES.LOGIN), 2000);
      }
    };

    handleOAuthCallback();
  }, [searchParams, router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030303] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Spinner size="lg" />
        </div>

        {status === "processing" && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Signing you in...
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please wait while we complete your authentication
            </p>
          </div>
        )}

        {status === "success" && (
          <div>
            <h2 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">
              Success!
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Redirecting you to dashboard...
            </p>
          </div>
        )}

        {status === "error" && (
          <div>
            <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">
              Authentication Failed
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Redirecting you back to login...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
