// app/dashboard/player/profile/stats/page.tsx
import Link from "next/link";

export default function EditStats() {
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
          <h1 className="text-3xl font-bold">Edit Performance Stats</h1>
        </div>

        <div className="bg-white p-8 rounded border border-gray-100 max-w-3xl">
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Season</label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Matches
                </label>
                <input
                  type="number"
                  defaultValue="24"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Goals
                </label>
                <input
                  type="number"
                  defaultValue="18"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Assists
                </label>
                <input
                  type="number"
                  defaultValue="5"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Minutes
                </label>
                <input
                  type="number"
                  defaultValue="2010"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Yellow Cards
                </label>
                <input
                  type="number"
                  defaultValue="3"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Red Cards
                </label>
                <input
                  type="number"
                  defaultValue="0"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Pass Accuracy %
                </label>
                <input
                  type="number"
                  defaultValue="75"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Shots on Target %
                </label>
                <input
                  type="number"
                  defaultValue="62"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </div>

            <h2 className="font-bold mb-4">Goalkeeper Stats (if applicable)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 opacity-70">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Clean Sheets
                </label>
                <input
                  type="number"
                  disabled
                  className="w-full border border-gray-300 rounded p-2 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Saves
                </label>
                <input
                  type="number"
                  disabled
                  className="w-full border border-gray-300 rounded p-2 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Penalties Saved
                </label>
                <input
                  type="number"
                  disabled
                  className="w-full border border-gray-300 rounded p-2 bg-gray-50"
                />
              </div>
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
                Save Stats
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
