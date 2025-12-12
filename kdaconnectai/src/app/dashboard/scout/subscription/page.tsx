// app/dashboard/scout/subscription/page.tsx
import Link from "next/link";

export default function ScoutSubscription() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Subscription</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded border border-gray-100 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold">Basic Plan</h2>
                  <p className="text-gray-600">Free forever</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded">
                  Current Plan
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Basic player search
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>5 profile
                  views/day
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">–</span>
                  <span className="text-gray-400">Advanced filters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-2">–</span>
                  <span className="text-gray-400">Contact players</span>
                </li>
              </ul>

              <Link href="/pricing/scouts" className="text-black underline">
                Upgrade to Premium →
              </Link>
            </div>

            <div className="bg-white p-6 rounded border border-gray-100">
              <h2 className="font-bold mb-4">Usage This Month</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profile Views</span>
                    <span>12 / 150</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded">
                    <div className="bg-black h-full w-8 rounded"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Searches</span>
                    <span>8 / ∞</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded">
                    <div className="bg-black h-full w-12 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded border border-gray-100 sticky top-8">
              <h2 className="font-bold mb-4">Plan Comparison</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/pricing/scouts"
                    className="text-black hover:underline"
                  >
                    Free
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing/scouts"
                    className="text-black hover:underline"
                  >
                    Premium — €49/month
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing/scouts"
                    className="text-black hover:underline"
                  >
                    Enterprise — Custom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
