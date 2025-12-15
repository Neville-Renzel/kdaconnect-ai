import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-2xl text-blue-600"
          >
            <Image
              src="/Image/Logo.webp"
              alt="KDAconnect Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span>KDAconnect</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/how-it-works/players"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              How It Works
            </Link>
            <Link
              href="/players"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Explore Players
            </Link>
            <Link
              href="/pricing/players"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-4">
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 font-semibold transition"
            >
              Login
            </Link>
            <Link href="/signup" className="btn-primary text-sm">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex flex-col gap-2 pb-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/how-it-works/players"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            How It Works
          </Link>
          <Link
            href="/players"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Explore Players
          </Link>
          <Link
            href="/pricing/players"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
