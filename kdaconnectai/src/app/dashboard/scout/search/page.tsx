// app/dashboard/scout/search/page.tsx
import Link from "next/link";

export default function SearchPlayers() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Search Players</h1>

        <div className="bg-white p-6 rounded border border-gray-100">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Position
                </label>
                <select className="w-full border border-gray-300 rounded p-2">
                  <option>All Positions</option>
                  <option>Forward</option>
                  <option>Midfielder</option>
                  <option>Defender</option>
                  <option>Goalkeeper</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Age Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Nationality
                </label>
                <input
                  type="text"
                  placeholder="e.g., Sweden"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Height (cm)
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Current Club
                </label>
                <input
                  type="text"
                  placeholder="Club name"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Goals (Season)
                </label>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Availability
                </label>
                <select className="w-full border border-gray-300 rounded p-2">
                  <option>Immediately</option>
                  <option>End of Season</option>
                  <option>Open to Offers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Verified Only
                </label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="verified"
                    className="mr-2"
                    defaultChecked
                  />
                  <label htmlFor="verified">Show verified profiles only</label>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button type="button" className="text-sm text-gray-600">
                + Save This Search
              </button>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded"
              >
                Search Players
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
