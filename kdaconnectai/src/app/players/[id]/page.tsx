// app/players/[id]/page.tsx
import Link from "next/link";

export default function PlayerProfile({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/players" className="text-gray-600 hover:underline">
            ← Back to Players
          </Link>
        </div>

        {/* Profile */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-start gap-6 mb-8">
              <div className="bg-gray-200 w-32 h-32 rounded-full flex items-center justify-center">
                [Photo]
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">Marcus Johnson</h1>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Verified
                  </span>
                </div>
                <p className="text-gray-600">Forward • Sweden • 22 years</p>
                <p className="mt-2">6'1" • 170 lbs • Right Footed</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Highlight Video</h2>
              <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-500">
                YouTube Embed
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Bio</h2>
              <p>
                Dynamic forward with strong finishing and pace. Scored 18 goals
                in 24 matches last season for IFK Göteborg U21. Looking for
                professional opportunities in Europe.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Stats (2024)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-ash p-4 rounded text-center">
                  <div className="text-2xl font-bold">18</div>
                  <div className="text-gray-600">Goals</div>
                </div>
                <div className="bg-ash p-4 rounded text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-gray-600">Assists</div>
                </div>
                <div className="bg-ash p-4 rounded text-center">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-gray-600">Matches</div>
                </div>
                <div className="bg-ash p-4 rounded text-center">
                  <div className="text-2xl font-bold">75%</div>
                  <div className="text-gray-600">Pass Accuracy</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Career</h2>
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
          </div>

          <div>
            <div className="bg-ash p-6 rounded sticky top-8">
              <h3 className="font-bold mb-4">Contact Player</h3>
              <p className="text-sm text-gray-600 mb-4">
                Sign up or log in to contact this player.
              </p>
              <Link
                href="/signup"
                className="w-full block bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition"
              >
                Sign Up to Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
