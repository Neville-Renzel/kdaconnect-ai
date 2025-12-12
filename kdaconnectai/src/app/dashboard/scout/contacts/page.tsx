// app/dashboard/scout/contacts/page.tsx
import Link from "next/link";

export default function ScoutContacts() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Contact History</h1>
          <Link
            href="/dashboard/scout/contact"
            className="bg-black text-white px-4 py-2 rounded"
          >
            + New Contact
          </Link>
        </div>

        <div className="bg-white rounded border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-4">Player</th>
                <th className="text-left p-4">Club</th>
                <th className="text-left p-4">Date Sent</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-4">Marcus Johnson</td>
                <td className="p-4">IFK Göteborg U21</td>
                <td className="p-4">Dec 11, 2025</td>
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    Responded
                  </span>
                </td>
                <td className="p-4">
                  <Link
                    href="/dashboard/scout/contacts/demo"
                    className="text-black text-sm"
                  >
                    View Thread
                  </Link>
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4">Erik Larsson</td>
                <td className="p-4">AIK Youth</td>
                <td className="p-4">Dec 10, 2025</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                    Pending
                  </span>
                </td>
                <td className="p-4">
                  <Link
                    href="/dashboard/scout/contacts/demo"
                    className="text-black text-sm"
                  >
                    View Thread
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
