"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-100">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/Image/Logo.webp"
              alt="KDAconnect Logo"
              width={60}
              height={60}
              className="rounded"
            />
          </div>

          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Sign in to your KDAconnect account
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                defaultValue="demo@kdaconnect.com"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                defaultValue="demo123"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Forgot?
              </Link>
            </div>

            <button
              type="button"
              onClick={() => router.push("/dashboard/player")}
              className="btn-primary w-full mt-6"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => router.push("/dashboard/player")}
              className="btn-outline"
            >
              Google
            </button>
            <button
              type="button"
              onClick={() => router.push("/dashboard/player")}
              className="btn-outline"
            >
              Apple
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
          <p className="text-sm text-gray-700">
            <strong>Demo Credentials:</strong>
            <br />
            Email: demo@kdaconnect.com
            <br />
            Password: demo123
          </p>
        </div>
      </div>
    </div>
  );
}
