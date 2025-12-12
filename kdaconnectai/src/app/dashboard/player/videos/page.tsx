// app/dashboard/player/videos/page.tsx
import Link from "next/link";

export default function MyVideos() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">My Videos</h1>
          <Link
            href="/dashboard/player/videos/upload"
            className="bg-black text-white px-4 py-2 rounded"
          >
            + Upload New
          </Link>
        </div>

        <div className="bg-white rounded border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Title</th>
                <th className="text-left p-4">Type</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Views</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-200 w-16 h-9 rounded mr-3"></div>
                    <span>Match Highlights 2024</span>
                  </div>
                </td>
                <td className="p-4">YouTube</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Published
                  </span>
                </td>
                <td className="p-4">142</td>
                <td className="p-4">
                  <Link
                    href="/dashboard/player/videos/demo"
                    className="text-black text-sm mr-3"
                  >
                    View
                  </Link>
                  <button className="text-gray-600 text-sm">Edit</button>
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-200 w-16 h-9 rounded mr-3"></div>
                    <span>Training Session</span>
                  </div>
                </td>
                <td className="p-4">Google Drive</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    Pending Review
                  </span>
                </td>
                <td className="p-4">—</td>
                <td className="p-4">
                  <Link
                    href="/dashboard/player/videos/demo"
                    className="text-black text-sm mr-3"
                  >
                    View
                  </Link>
                  <button className="text-gray-600 text-sm">Edit</button>
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-200 w-16 h-9 rounded mr-3"></div>
                    <span>Scrimmage Goal</span>
                  </div>
                </td>
                <td className="p-4">Vimeo</td>
                <td className="p-4">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    Rejected
                  </span>
                </td>
                <td className="p-4">—</td>
                <td className="p-4">
                  <Link
                    href="/dashboard/player/videos/demo"
                    className="text-black text-sm mr-3"
                  >
                    View
                  </Link>
                  <button className="text-gray-600 text-sm">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            <strong>Note:</strong> If you submit raw footage for KDAconnect AI
            to edit and publish on our YouTube channel, you waive all ownership
            and monetization rights. Revenue belongs to KDAconnect AI.
          </p>
        </div>
      </div>
    </div>
  );
}
