// app/players/page.tsx
import Link from "next/link";

export default function BrowsePlayers() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold">Browse Players</h1>
          <p className="text-gray-600 mt-2 md:mt-0">
            Sign up to unlock full profiles and contact players.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-ash p-4 rounded mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-1">Position</label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>All Positions</option>
                <option>Forward</option>
                <option>Midfielder</option>
                <option>Defender</option>
                <option>Goalkeeper</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Age Range</label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>16-18</option>
                <option>19-23</option>
                <option>24-30</option>
                <option>30+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Level</label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>Senior Elite</option>
                <option>Advanced Amateur</option>
                <option>Senior Semi-Pro</option>
                <option>Youth Elite</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-black text-white p-2 rounded">
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Player Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="border border-gray-200 rounded overflow-hidden"
            >
              <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-500">
                Player {i} Highlight
              </div>
              <div className="p-4">
                <h3 className="font-bold">Player {i}</h3>
                <p className="text-gray-600 text-sm">Position • Country</p>
                <p className="text-xs text-gray-500 mt-1">Verified Profile</p>
                <Link
                  href="/players/demo"
                  className="text-black text-sm mt-2 inline-block"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/signup" className="text-black font-semibold">
            Create free account to see more players →
          </Link>
        </div>
      </div>
    </div>
  );
}
