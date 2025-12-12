// app/how-it-works/players/page.tsx
import Link from "next/link";

export default function HowItWorksPlayers() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">How It Works — For Players</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Sign Up</h2>
            <p>Create your free account as a player. Verify your email.</p>
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
            <h2 className="text-2 rolling.2xl font-bold mb-4">
              Step 2: Build Your Profile
            </h2>
            <p>
              Add your personal info, position, stats, career history, and
              upload highlight videos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Get Verified</h2>
            <p>
              Our team reviews your profile for authenticity. Verified profiles
              get a badge and higher visibility.
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
            <h2 className="text-2xl font-bold mb-4">Step 4: Get Discovered</h2>
            <p>
              Clubs and scouts search, view, and contact you directly. Track all
              activity in your dashboard.
            </p>
          </div>
        </div>

        <div className="text-center py-12">
          <Link
            href="/signup"
            className="bg-black text-white px-8 py-3 font-semibold rounded hover:bg-gray-800 transition"
          >
            Start Your Free Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
