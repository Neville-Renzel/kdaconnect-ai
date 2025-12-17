// app/players/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function BrowsePlayers() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-50 border-b-2 border-blue-200 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">Browse Players</h1>
          <p className="text-gray-600 mt-2">
            Discover emerging talent from across the globe
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8 border-2 border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-1">Position</label>
              <select className="w-full border-2 border-blue-300 rounded p-2 focus:outline-none focus:border-blue-600">
                <option>All Positions</option>
                <option>Forward</option>
                <option>Midfielder</option>
                <option>Defender</option>
                <option>Goalkeeper</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Age Range</label>
              <select className="w-full border-2 border-blue-300 rounded p-2 focus:outline-none focus:border-blue-600">
                <option>16-18</option>
                <option>19-23</option>
                <option>24-30</option>
                <option>30+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Level</label>
              <select className="w-full border-2 border-blue-300 rounded p-2 focus:outline-none focus:border-blue-600">
                <option>Senior Elite</option>
                <option>Advanced Amateur</option>
                <option>Senior Semi-Pro</option>
                <option>Youth Elite</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="btn-primary w-full">Apply Filters</button>
            </div>
          </div>
        </div>

        {/* Player Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            "/image2/Screenshot 2025-12-17 160004.webp",
            "/image2/Screenshot 2025-12-17 160149.webp",
            "/image2/Screenshot 2025-12-17 160203.webp",
            "/image2/Screenshot 2025-12-17 160217.webp",
            "/image2/Screenshot 2025-12-17 160259.webp",
            "/image2/Screenshot 2025-12-17 160313.webp",
            "/image2/Screenshot 2025-12-17 160327.webp",
            "/image2/Screenshot 2025-12-17 160352.webp",
          ].map((src, i) => (
            <div
              key={i}
              className="border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
            >
              <div className="relative h-40">
                <Image
                  src={src}
                  alt={`Player ${i + 1} Highlight`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900">Player {i + 1}</h3>
                <p className="text-blue-600 text-sm">Position • Country</p>
                <p className="text-xs text-green-600 mt-1 font-semibold">
                  ✓ Verified Profile
                </p>
                <Link
                  href={`/players/${i}`}
                  className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block font-semibold"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
          <Link
            href="/signup"
            className="text-blue-600 font-bold text-lg hover:text-blue-800"
          >
            Create free account to see more players →
          </Link>
        </div>
      </div>
    </div>
  );
}
