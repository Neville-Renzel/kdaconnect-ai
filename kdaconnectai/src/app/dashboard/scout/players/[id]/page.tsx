// app/dashboard/scout/players/[id]/page.tsx
import Link from "next/link";

export default function ScoutPlayerProfile({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/scout/search/results"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Results
          </Link>
          <h1 className="text-3xl font-bold">Player Profile</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-gray-200 w-32 h-32 rounded-full flex-shrink-0" />
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">Marcus Johnson</h2>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Verified
                  </span>
                </div>
                <p className="text-gray-600">Forward • Sweden • 22 years</p>
                <p className="mt-1">6'1" • 170 lbs • Right Footed</p>
                <div className="flex space-x-3 mt-4">
                  <button className="bg-black text-white px-4 py-2 rounded">
                    Contact Player
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded">
                    ★ Add to Favorites
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded">
                    ↔ Compare
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-4">Highlight Video</h3>
              <div className="bg-gray-200 aspect-video rounded flex items-center justify-center">
                [YouTube Embed]
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-4">Bio</h3>
              <p>
                Dynamic forward with strong finishing and pace. Scored 18 goals
                in 24 matches last season for IFK Göteborg U21. Looking for
                professional opportunities in Europe.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-4">Performance Stats (2024)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-ash p-3 text-center rounded">
                  <div className="text-sm text-gray-600">Goals</div>
                  <div className="font-bold">18</div>
                </div>
                <div className="bg-ash p-3 text-center rounded">
                  <div className="text-sm text-gray-600">Assists</div>
                  <div className="font-bold">5</div>
                </div>
                <div className="bg-ash p-3 text-center rounded">
                  <div className="text-sm text-gray-600">Matches</div>
                  <div className="font-bold">24</div>
                </div>
                <div className="bg-ash p-3 text-center rounded">
                  <div className="text-sm text-gray-600">Pass Accuracy</div>
                  <div className="font-bold">75%</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold mb-4">Career History</h3>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>IFK Göteborg U21</span>
                  <span>2022–2024</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>AIK Youth</span>
                  <span>2019–2022</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Skills Radar</h3>
              <div className="bg-gray-100 h-64 rounded flex items-center justify-center">
                [Radar Chart: Dribbling, Passing, Shooting, Pace, Strength,
                Vision]
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-6 rounded border border-gray-100 sticky top-8">
              <h3 className="font-bold mb-4">Actions</h3>
              <ul className="space-y-3">
                <li>
                  <button className="w-full text-left bg-ash p-3 rounded">
                    Contact Player
                  </button>
                </li>
                <li>
                  <button className="w-full text-left bg-ash p-3 rounded">
                    Schedule Trial
                  </button>
                </li>
                <li>
                  <button className="w-full text-left bg-ash p-3 rounded">
                    Add to Shortlist
                  </button>
                </li>
                <li>
                  <button className="w-full text-left bg-ash p-3 rounded">
                    Share Internally
                  </button>
                </li>
              </ul>

              <h3 className="font-bold mt-6 mb-4">Similar Players</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-black hover:underline">
                    Erik Larsson (FWD)
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black hover:underline">
                    Noah Berg (FWD)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
