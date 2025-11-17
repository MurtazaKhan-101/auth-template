"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Button, Card, Spinner } from "../components/ui";
import { ROUTES } from "../lib/constants";
import Image from "next/image";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, logout, isAuthenticated } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !loading && !isAuthenticated) {
      router.push(ROUTES.LOGIN);
    }
  }, [mounted, loading, isAuthenticated, router]);

  if (loading || !mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#030303] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#030303]">
      {/* Reddit-style Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-[#FF4500]">
                Auth Template
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {user.profileImage ? (
                  <Image
                    src={user.profileImage}
                    alt={user.firstName}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#FF4500] items-center justify-center text-white font-bold">
                    {user.firstName?.[0]?.toUpperCase() || "U"}
                  </div>
                )}
                <span className="text-sm hidden sm:flex font-medium text-gray-900 dark:text-gray-100">
                  {user.firstName} {user.lastName}
                </span>
              </div>

              <Button variant="outline" onClick={logout}>
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Welcome, {user.firstName}!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            You're successfully logged into Auth Template
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* User Info Card */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              Your Profile
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {user.firstName} {user.lastName}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Email
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {user.email}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Status
                </p>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">
                  {user.isVerified ? "✓ Verified" : "Pending Verification"}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Role</p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {user.role || "User"}
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Actions Card */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                Edit Profile
              </button>
              <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                Settings
              </button>
              <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 transition-colors">
                Help & Support
              </button>
            </div>
          </Card>
        </div>

        {/* Additional Content */}
        <div className="mt-8">
          <Card className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              You're all set!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your authentication system is working perfectly. Start building
              your app features!
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="primary">Explore Features</Button>
              <Button variant="outline">View Documentation</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
