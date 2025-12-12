// app/admin/users/page.tsx
import Link from "next/link";

export default function AdminUsers() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">User Management</h1>

        <div className="mb-6 flex justify-between">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search by name or email"
              className="border border-gray-300 rounded p-2"
            />
            <select className="border border-gray-300 rounded p-2">
              <option>All Roles</option>
              <option>Player</option>
              <option>Scout</option>
              <option>Admin</option>
            </select>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded">
            Export Users
          </button>
        </div>

        <div className="bg-white rounded border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Role</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-4">Marcus Johnson</td>
                <td className="p-4">marcus@example.com</td>
                <td className="p-4">Player</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-black text-sm mr-3">View</button>
                  <button className="text-red-600 text-sm">Suspend</button>
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4">Lena Bergström</td>
                <td className="p-4">lena@bkhacken.se</td>
                <td className="p-4">Scout</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-black text-sm mr-3">View</button>
                  <button className="text-red-600 text-sm">Suspend</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
