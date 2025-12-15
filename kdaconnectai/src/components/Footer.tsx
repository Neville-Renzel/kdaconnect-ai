import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl text-blue-400 mb-4"
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
            <p className="text-gray-400">
              Connecting relentless talent to opportunity globally.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-blue-400">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="hover:text-blue-400 transition"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Players */}
          <div>
            <h4 className="font-bold mb-4 text-blue-400">For Players</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/how-it-works/players"
                  className="hover:text-blue-400 transition"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/players"
                  className="hover:text-blue-400 transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/players"
                  className="hover:text-blue-400 transition"
                >
                  Explore Players
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* For Scouts */}
          <div>
            <h4 className="font-bold mb-4 text-blue-400">For Scouts</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/how-it-works/scouts"
                  className="hover:text-blue-400 transition"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/scout"
                  className="hover:text-blue-400 transition"
                >
                  Scout Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing/players"
                  className="hover:text-blue-400 transition"
                >
                  Plans & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <p className="text-gray-400 text-sm">
              © 2024 KDAconnect AI. All rights reserved.
            </p>
            <div className="flex gap-6 justify-center md:justify-start">
              <Link
                href="/privacy"
                className="text-gray-400 text-sm hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 text-sm hover:text-blue-400 transition"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 text-sm hover:text-blue-400 transition"
              >
                Cookies
              </Link>
            </div>
            <div className="flex gap-4 justify-end">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
