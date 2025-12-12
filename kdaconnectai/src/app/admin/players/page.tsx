// app/admin/players/page.tsx
import Link from "next/link";

export default function AdminPlayers() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Player Management</h1>

        <div className="mb-6">
          <div className="flex justify-between mb-4">
            <h2 className="font-bold">Pending Approval (24)</h2>
            <button className="text-sm text-black">Approve All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-4 rounded border border-gray-100"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-bold">Player {i}</h3>
                    <p className="text-gray-600 text-sm">
                      Position • Nationality • Age
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                      Approve
                    </button>
                    <button className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm">
                      Reject
                    </button>
                    <Link
                      href="/admin/players/demo"
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
          <h2 className="font-bold mb-4">All Players (1,920)</h2>
          <div className="bg-white rounded border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Position</th>
                  <th className="text-left p-4">Verified</th>
                  <th className="text-left p-4">Videos</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="p-4">Marcus Johnson</td>
                  <td className="p-4">Forward</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Yes
                    </span>
                  </td>
                  <td className="p-4">2</td>
                  <td className="p-4">
                    <button className="text-black text-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
