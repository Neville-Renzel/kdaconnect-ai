// app/dashboard/scout/favorites/[playerId]/page.tsx
import Link from "next/link";

export default function FavoritePlayerDetail({
  params,
}: {
  params: { playerId: string };
}) {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/scout/favorites"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Favorites
          </Link>
          <h1 className="text-3xl font-bold">Player Notes</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-gray-200 w-24 h-24 rounded-full flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold">Marcus Johnson</h2>
                <p className="text-gray-600">Forward • Sweden • 22</p>
                <div className="flex space-x-3 mt-3">
                  <Link
                    href="/dashboard/scout/players/demo"
                    className="text-sm text-black underline"
                  >
                    View Full Profile
                  </Link>
                  <button className="text-sm text-red-600">
                    Remove from Favorites
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">My Notes</h3>
              <textarea
                rows={4}
                defaultValue="Strong finisher. Good pace. Needs work on heading. Potential for Allsvenskan."
                className="w-full border border-gray-300 rounded p-2"
              ></textarea>
              <button className="mt-2 bg-black text-white px-4 py-1 rounded text-sm">
                Save Notes
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-bold mb-2">Activity Log</h3>
              <ul className="text-sm space-y-1">
                <li>• Added to favorites — Dec 10, 2025</li>
                <li>• Profile viewed — Dec 10, 2025</li>
                <li>• Video watched (3:45) — Dec 11, 2025</li>
                <li>• Contact sent — Dec 11, 2025</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded border border-gray-100 sticky top-8">
              <h3 className="font-bold mb-3">Quick Actions</h3>
              <ul className="space-y-2">
                <li>
                  <button className="w-full text-left bg-ash p-2 rounded">
                    Contact Player
                  </button>
                </li>
                <li>
                  <button className="w-full text-left bg-ash p-2 rounded">
                    Schedule Trial
                  </button>
                </li>
                <li>
                  <button className="w-full text-left bg-ash p-2 rounded">
                    Add Reminder
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
