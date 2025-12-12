// app/dashboard/scout/favorites/page.tsx
import Link from "next/link";

export default function ScoutFavorites() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Favorites</h1>
          <button className="border border-gray-300 px-4 py-2 rounded">
            + Create List
          </button>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            <button className="bg-black text-white px-4 py-2 rounded whitespace-nowrap">
              All Favorites (8)
            </button>
            <button className="bg-ash text-gray-800 px-4 py-2 rounded whitespace-nowrap">
              Strikers (3)
            </button>
            <button className="bg-ash text-gray-800 px-4 py-2 rounded whitespace-nowrap">
              Summer Targets (5)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white p-4 rounded border border-gray-100"
            >
              <div className="bg-gray-200 h-32 rounded mb-3"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold">Player {i}</h3>
                  <p className="text-gray-600 text-sm">
                    Position • Nationality
                  </p>
                </div>
                <button className="text-xl">★</button>
              </div>
              <div className="flex justify-between text-sm">
                <span>Added Dec 10</span>
                <Link
                  href="/dashboard/scout/favorites/player1"
                  className="text-black"
                >
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
