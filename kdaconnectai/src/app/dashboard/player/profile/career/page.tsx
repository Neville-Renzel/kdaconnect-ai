// app/dashboard/player/profile/career/page.tsx
import Link from "next/link";

export default function EditCareerHistory() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/player/profile"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Profile
          </Link>
          <h1 className="text-3xl font-bold">Edit Career History</h1>
        </div>

        <div className="bg-white p-8 rounded border border-gray-100 max-w-3xl">
          <div className="mb-6">
            <h2 className="font-bold mb-4">Current Club</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Club Name
                </label>
                <input
                  type="text"
                  defaultValue="IFK Göteborg U21"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">From</label>
                <input
                  type="month"
                  defaultValue="2022-01"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-bold mb-4">Previous Clubs</h2>

            {/* Entry 1 */}
            <div className="border border-gray-200 p-4 rounded mb-4">
              <div className="grid md:grid-cols-3 gap-4 mb-3">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Club Name
                  </label>
                  <input
                    type="text"
                    defaultValue="AIK Youth"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    From
                  </label>
                  <input
                    type="month"
                    defaultValue="2019-08"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">To</label>
                  <input
                    type="month"
                    defaultValue="2022-01"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-xs text-gray-500 mb-1">
                  Achievements
                </label>
                <input
                  type="text"
                  placeholder="2021 U19 League Champions"
                  className="w-full border border-gray-300 rounded p-2 text-sm"
                />
              </div>
              <button type="button" className="text-red-600 text-sm">
                Remove
              </button>
            </div>

            {/* Add Button */}
            <button
              type="button"
              className="text-sm border border-gray-300 px-3 py-1 rounded"
            >
              + Add Previous Club
            </button>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="border border-gray-300 px-6 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded"
            >
              Save Career
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
