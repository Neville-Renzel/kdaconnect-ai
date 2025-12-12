// app/dashboard/player/profile/page.tsx
import Link from "next/link";

export default function PlayerProfilePreview() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <div>
            <Link
              href="/dashboard/player/profile/edit"
              className="bg-black text-white px-4 py-2 rounded mr-3"
            >
              Edit Profile
            </Link>
            <button className="border border-black px-4 py-2 rounded">
              View as Scout
            </button>
          </div>
        </div>

        {/* Public Preview */}
        <div className="bg-white p-8 rounded border border-gray-100">
          <div className="flex items-start gap-8 mb-8">
            <div className="bg-gray-200 w-32 h-32 rounded-full" />
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-2xl font-bold">Marcus Johnson</h2>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Verified
                </span>
              </div>
              <p className="text-gray-600">Forward • Sweden • 22 years</p>
              <p className="mt-1">6'1" • 170 lbs • Right Footed</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-2">Bio</h3>
            <p>
              Dynamic forward with strong finishing and pace. Scored 18 goals in
              24 matches last season.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-2">Highlights</h3>
            <div className="bg-gray-100 aspect-video rounded flex items-center justify-center text-gray-500">
              YouTube Video Embed
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Stats (2024)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-ash p-3 text-center rounded">
                <div className="font-bold">18</div>
                <div className="text-gray-600 text-sm">Goals</div>
              </div>
              <div className="bg-ash p-3 text-center rounded">
                <div className="font-bold">5</div>
                <div className="text-gray-600 text-sm">Assists</div>
              </div>
              <div className="bg-ash p-3 text-center rounded">
                <div className="font-bold">24</div>
                <div className="text-gray-600 text-sm">Matches</div>
              </div>
              <div className="bg-ash p-3 text-center rounded">
                <div className="font-bold">75%</div>
                <div className="text-gray-600 text-sm">Pass Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            This is how your profile appears to scouts.
          </p>
        </div>
      </div>
    </div>
  );
}
