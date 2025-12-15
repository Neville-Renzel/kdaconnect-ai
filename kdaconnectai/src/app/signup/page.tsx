"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Image
            src="/Image/Logo.webp"
            alt="KDAconnect Logo"
            width={60}
            height={60}
            className="rounded mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Join KDAconnect
          </h1>
          <p className="text-xl text-gray-600">
            Create your free account in minutes
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Player Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200 hover:border-blue-600 transition cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚽</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sign Up as Player
            </h3>
            <p className="text-gray-600 mb-6">
              Get discovered by scouts and clubs. Build your verified profile
              and showcase your talent to the world.
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Digital profile
                showcase
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Video highlight uploads
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Get discovered by clubs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Track profile views
              </li>
            </ul>
            <button
              type="button"
              onClick={() => router.push("/dashboard/player")}
              className="btn-primary w-full"
            >
              Continue as Player
            </button>
          </div>

          {/* Scout Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200 hover:border-blue-600 transition cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Sign Up as Scout
            </h3>
            <p className="text-gray-600 mb-6">
              Discover emerging talent and build your network. Access our global
              database of verified players.
            </p>
            <ul className="space-y-2 text-gray-700 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Access global player
                database
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Advanced search &
                filters
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Direct contact with
                players
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span> Analytics & reports
              </li>
            </ul>
            <button
              type="button"
              onClick={() => router.push("/dashboard/scout")}
              className="btn-primary w-full"
            >
              Continue as Scout
            </button>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Account Information
          </h2>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="At least 8 characters"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Country
              </label>
              <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600">
                <option>Select your country</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Kenya</option>
                <option>South Africa</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                defaultChecked
                className="w-4 h-4 mt-1"
              />
              <label htmlFor="terms" className="text-gray-600">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="button"
              onClick={() => router.push("/dashboard/player")}
              className="btn-primary w-full"
            >
              Create Account
            </button>
          </form>

          {/* Already have account */}
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
