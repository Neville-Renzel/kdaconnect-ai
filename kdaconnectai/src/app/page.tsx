// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl text-gray-300 md:text-6xl font-bold mb-6">
              Connecting relentless talent to opportunity
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              KDAconnect AI is the trusted platform where amateur and semi-pro
              footballers get discovered by clubs, scouts, and agents worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="bg-white text-black px-8 py-3 font-semibold rounded hover:bg-gray-100 transition"
              >
                Sign up as Player
              </Link>
              <Link
                href="/signup"
                className="border border-white text-white px-8 py-3 font-semibold rounded hover:bg-white hover:text-black transition"
              >
                Sign up as Scout
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-ash">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">For Players</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">•</span>
                  Create a verified digital profile with highlight videos
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">•</span>
                  Get discovered by clubs and scouts actively searching for
                  talent
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">•</span>
                  Track who views your profile and engages with your content
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">For Scouts & Clubs</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">•</span>
                  Access a global database of verified player profiles
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">•</span>
                  Filter by position, age, stats, nationality, and availability
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-3">•</span>
                  Contact players directly and schedule trials
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Players
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
                  Player {i} Highlight
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Player {i} Name</h3>
                  <p className="text-gray-600 text-sm">
                    Position • Nationality
                  </p>
                  <Link
                    href="/players/demo"
                    className="text-gray-800 text-sm mt-2 inline-block"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-ash">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-bold mb-2">Create Profile</h3>
              <p className="text-gray-600">
                Sign up and build your verified player or scout profile.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-bold mb-2">Get Discovered</h3>
              <p className="text-gray-600">
                Scouts search and contact players. Players apply to
                opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-bold mb-2">Sign Opportunities</h3>
              <p className="text-gray-600">
                Secure trials, contracts, and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 rounded-lg">
            <p className="italic text-gray-700 mb-4">
              "KDAconnect AI connected me with a scout from Sweden. Two weeks
              later, I was on a trial with a professional club. This platform
              changed my career."
            </p>
            <p className="font-semibold">— Marcus Johnson, Midfielder</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to take the next step?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players and scouts building football careers
            through verified digital profiles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-black px-8 py-3 font-semibold rounded hover:bg-gray-100 transition"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
