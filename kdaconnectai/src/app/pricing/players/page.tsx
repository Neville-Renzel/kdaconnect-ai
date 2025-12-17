// app/pricing/players/page.tsx
import Link from "next/link";

export default function PricingPlayers() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">
          Pricing for Players
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Start free. Upgrade anytime to unlock advanced features and greater
          visibility.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-3xl font-bold mb-4">
              €0<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Basic profile
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>1 highlight video
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-2">–</span>
                <span className="text-gray-400">Advanced stats</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-2">–</span>
                <span className="text-gray-400">Scout contact access</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-300 mr-2">–</span>
                <span className="text-gray-400">Profile analytics</span>
              </li>
            </ul>
            <Link
              href="/signup"
              className="w-full block text-center bg-ash text-gray-800 py-2 rounded font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Premium */}
          <div className="border-2 border-black rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded">
              MOST POPULAR
            </div>
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <p className="text-3xl font-bold mb-4">
              €9.99<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Verified profile badge
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Unlimited videos
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Full stats & career history
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Direct contact from scouts
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Weekly profile analytics
              </li>
            </ul>
            <Link
              href="/signup"
              className="w-full block text-center bg-black text-white py-2 rounded font-medium hover:bg-gray-800 transition"
            >
              Upgrade Now
            </Link>
          </div>

          {/* Pro */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">Pro</h2>
            <p className="text-3xl font-bold mb-4">
              €19.99<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                All Premium features
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Priority listing in search
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Video promotion on platform
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                1-on-1 agent consultation
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Contract review service
              </li>
            </ul>
            <Link
              href="/contact"
              className="w-full block text-center bg-ash text-gray-800 py-2 rounded font-medium"
            >
              Contact for Access
            </Link>
          </div>
        </div>

        <div className="text-center mt-16 text-gray-600">
          <p>
            All plans include email support. Cancel anytime. Annual billing
            saves 20%.
          </p>
        </div>
      </div>
    </div>
  );
}
