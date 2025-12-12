// app/admin/videos/page.tsx
import Link from "next/link";

export default function AdminVideos() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Video Moderation</h1>

        <div className="mb-6">
          <h2 className="font-bold mb-4">Pending Review (18)</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-4 rounded border border-gray-100"
              >
                <div className="flex gap-4">
                  <div className="bg-gray-200 w-32 h-18 rounded" />
                  <div className="flex-grow">
                    <h3 className="font-bold">Match Highlights {i}</h3>
                    <p className="text-gray-600 text-sm">
                      Submitted by Marcus Johnson • Dec 10, 2025
                    </p>
                    <p className="text-sm mt-2">Source: YouTube</p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                      Approve
                    </button>
                    <button className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">
                      Reject
                    </button>
                    <Link
                      href="/admin/videos/demo"
                      className="text-black text-sm"
                    >
                      View →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-4">All Videos (1,240)</h2>
          <div className="bg-white rounded border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Title</th>
                  <th className="text-left p-4">Player</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Views</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="p-4">Match Highlights</td>
                  <td className="p-4">Marcus Johnson</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Published
                    </span>
                  </td>
                  <td className="p-4">142</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
