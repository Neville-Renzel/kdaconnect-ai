// app/how-it-works/scouts/page.tsx
import Link from "next/link";

export default function HowItWorksScouts() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">
          How It Works — For Scouts & Clubs
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Create Account</h2>
            <p>
              Sign up as a scout or club. Provide your organization details for
              verification.
            </p>
          </div>
          <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
            [Step 1 Illustration]
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-100 h-32 rounded flex items-center justify-center order-2 md:order-1">
            [Step 2 Illustration]
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Step 2: Search Players</h2>
            <p>
              Use advanced filters (position, age, stats, nationality) to find
              talent that matches your needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Review Profiles</h2>
            <p>
              View verified player profiles with highlight videos, career
              history, and performance data.
            </p>
          </div>
          <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
            [Step 3 Illustration]
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-100 h-32 rounded flex items-center justify-center order-2 md:order-1">
            [Step 4 Illustration]
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Step 4: Contact & Sign</h2>
            <p>
              Contact players directly, schedule trials, and secure talent
              faster than traditional methods.
            </p>
          </div>
        </div>

        <div className="text-center py-12">
          <Link
            href="/signup"
            className="bg-black text-white px-8 py-3 font-semibold rounded hover:bg-gray-800 transition"
          >
            Start Finding Talent
          </Link>
        </div>
      </div>
    </div>
  );
}
