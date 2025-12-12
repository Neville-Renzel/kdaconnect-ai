// app/dashboard/player/videos/[id]/analytics/page.tsx
import Link from "next/link";

export default function VideoAnalytics({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/player/videos/demo"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Video
          </Link>
          <h1 className="text-3xl font-bold">Video Analytics</h1>
        </div>

        <div className="space-y-8">
          {/* Views Over Time */}
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Views Over Time</h2>
            <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-500">
              [Line Chart: Views by Day]
            </div>
          </div>

          {/* Watch Duration */}
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Watch Duration</h2>
            <div className="bg-gray-100 h-32 flex items-center justify-center text-gray-500">
              [Bar Chart: % of viewers who watched 0-25%, 25-50%, etc.]
            </div>
          </div>

          {/* Geographic Data */}
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Viewer Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-ash p-4 rounded">
                <div className="font-bold">Sweden</div>
                <div className="text-gray-600">42 views</div>
              </div>
              <div className="bg-ash p-4 rounded">
                <div className="font-bold">Norway</div>
                <div className="text-gray-600">28 views</div>
              </div>
              <div className="bg-ash p-4 rounded">
                <div className="font-bold">Germany</div>
                <div className="text-gray-600">19 views</div>
              </div>
            </div>
          </div>

          {/* Scout Engagement */}
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Scout Engagement</h2>
            <ul className="space-y-3">
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span>BK Häcken (Sweden)</span>
                <span>Watched 3:45 on Dec 11</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span>IK Sirius (Sweden)</span>
                <span>Watched 2:10 on Dec 10</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-100">
                <span>Stabæk (Norway)</span>
                <span>Watched 4:21 on Dec 12</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
