// app/dashboard/scout/team/page.tsx
import Link from "next/link";

export default function ScoutTeam() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Team Members</h1>
          <button className="bg-black text-white px-4 py-2 rounded">
            + Invite Member
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
                <td className="p-4">Lena Bergström</td>
                <td className="p-4">lena@bkhacken.se</td>
                <td className="p-4">Head Scout</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-red-600 text-sm">Remove</button>
                </td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4">Anders Nilsson</td>
                <td className="p-4">anders@bkhacken.se</td>
                <td className="p-4">Assistant Scout</td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Active
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-red-600 text-sm">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            Enterprise plan allows up to 10 team members.{" "}
            <Link href="/pricing/scouts" className="text-black underline">
              Upgrade →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
