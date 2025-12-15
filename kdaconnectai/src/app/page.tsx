// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Connecting relentless talent to opportunity
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              KDAconnect AI is the trusted platform where amateur and semi-pro
              footballers get discovered by clubs, scouts, and agents worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="bg-white text-blue-600 px-8 py-4 font-bold rounded-lg hover:bg-blue-50 transition text-center"
              >
                Sign up as Player
              </Link>
              <Link
                href="/signup"
                className="border-2 border-white text-white px-8 py-4 font-bold rounded-lg hover:bg-white hover:text-blue-600 transition text-center"
              >
                Sign up as Scout
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10">
          <Image
            src="/Image/portrait-young-man-playing-football.webp"
            alt="Hero Background"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Featured Players
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover emerging talent from across the globe. These are some of
            our top players ready for their next opportunity.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                image: "portrait-young-man-playing-football.webp",
                name: "Marcus Johnson",
                pos: "Midfielder",
              },
              {
                id: 2,
                image: "young-man-playing-football.webp",
                name: "Alex Okafor",
                pos: "Forward",
              },
              {
                id: 3,
                image: "view-male-soccer-player-ready-match.webp",
                name: "David Chen",
                pos: "Defender",
              },
              {
                id: 4,
                image: "view-adult-male-soccer-player.webp",
                name: "James Wilson",
                pos: "Goalkeeper",
              },
            ].map((player) => (
              <div
                key={player.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition border-2 border-blue-100"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={`/Image/${player.image}`}
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900">
                    {player.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {player.pos}
                  </p>
                  <Link
                    href={`/players/${player.id}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose KDAconnect?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                For Players
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Create Verified Profile
                    </p>
                    <p className="text-gray-600">
                      Build your digital profile with highlight videos and stats
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Get Discovered
                    </p>
                    <p className="text-gray-600">
                      Scouts search and contact players actively
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Track Analytics
                    </p>
                    <p className="text-gray-600">
                      See who views your profile and engages with your content
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Secure Opportunities
                    </p>
                    <p className="text-gray-600">
                      Connect with clubs for trials and contracts
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                For Scouts & Clubs
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Global Database
                    </p>
                    <p className="text-gray-600">
                      Access verified player profiles from around the world
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Advanced Search
                    </p>
                    <p className="text-gray-600">
                      Filter by position, age, stats, nationality, and
                      availability
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Direct Contact
                    </p>
                    <p className="text-gray-600">
                      Message players directly and schedule trials
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold text-xl">
                    ✓
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Analytics & Reports
                    </p>
                    <p className="text-gray-600">
                      Track your scouting activity and player interactions
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-3xl">
                1
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Create Profile
              </h3>
              <p className="text-gray-600">
                Sign up and build your verified player or scout profile with
                detailed information.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-3xl">
                2
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Get Discovered
              </h3>
              <p className="text-gray-600">
                Scouts search and contact players. Players apply to
                opportunities that match their profile.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-3xl">
                3
              </div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">
                Secure Opportunities
              </h3>
              <p className="text-gray-600">
                Move forward with trials, training camps, and professional
                contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "KDAconnect connected me with a scout from Sweden. Two weeks later, I was on a trial with a professional club. This platform changed my career.",
                author: "Marcus Johnson",
                role: "Midfielder",
                image: "portrait-young-man-playing-football.webp",
              },
              {
                quote:
                  "As a scout, this platform has helped me discover incredible talent. The database is comprehensive and easy to navigate.",
                author: "Sarah Williams",
                role: "Chief Scout, Premier Club",
                image: "portrait-football-player-with-ball.webp",
              },
              {
                quote:
                  "I found my replacement for the retiring striker through KDAconnect. The process was seamless and professional.",
                author: "Coach Ahmed Hassan",
                role: "Head Coach",
                image:
                  "young-businessman-holding-soccer-ball-hand-clenching-her-fist-standing-against-grey-wall.webp",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-blue-50 border-2 border-blue-200 p-8 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/Image/${testimonial.image}`}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of players and scouts building football careers
            through verified digital profiles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-4 font-bold rounded-lg hover:bg-blue-50 transition"
            >
              Create Free Account
            </Link>
            <Link
              href="/how-it-works/players"
              className="border-2 border-white text-white px-8 py-4 font-bold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
