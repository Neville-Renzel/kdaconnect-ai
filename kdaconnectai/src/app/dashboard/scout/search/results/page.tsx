// app/dashboard/scout/search/results/page.tsx
import Link from "next/link";

export default function SearchResults() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Search Results</h1>
          <div>
            <button className="border border-gray-300 px-4 py-2 rounded mr-2">
              Grid
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              List
            </button>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          <p>
            24 players found •{" "}
            <button className="text-black underline">Save this search</button>
          </p>
        </div>

        <div className="space-y-6">
          {/* Player Card */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded border border-gray-100"
            >
              <div className="flex gap-6">
                <div className="bg-gray-200 w-32 h-32 rounded flex-shrink-0" />
                <div className="flex-grow">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-xl font-bold">Player {i}</h2>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Verified
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Position • Nationality • Age
                      </p>
                    </div>
                    <button className="text-2xl">★</button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                    <div className="bg-ash p-2 text-center rounded">
                      <div className="text-sm text-gray-600">Goals</div>
                      <div className="font-bold">18</div>
                    </div>
                    <div className="bg-ash p-2 text-center rounded">
                      <div className="text-sm text-gray-600">Matches</div>
                      <div className="font-bold">24</div>
                    </div>
                    <div className="bg-ash p-2 text-center rounded">
                      <div className="text-sm text-gray-600">Height</div>
                      <div className="font-bold">185 cm</div>
                    </div>
                    <div className="bg-ash p-2 text-center rounded">
                      <div className="text-sm text-gray-600">Foot</div>
                      <div className="font-bold">Right</div>
                    </div>
                  </div>

                  <p className="text-sm mb-4">
                    Bio excerpt: Dynamic forward with strong finishing and
                    pace...
                  </p>

                  <div className="flex space-x-3">
                    <Link
                      href="/dashboard/scout/players/demo"
                      className="bg-black text-white px-4 py-1 rounded text-sm"
                    >
                      View Full Profile
                    </Link>
                    <button className="border border-gray-300 px-4 py-1 rounded text-sm">
                      Contact
                    </button>
                    <button className="border border-gray-300 px-4 py-1 rounded text-sm">
                      Compare
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="border border-gray-300 px-6 py-2 rounded">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
