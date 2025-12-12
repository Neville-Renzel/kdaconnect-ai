// app/admin/page.tsx
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Platform Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">2,841</div>
            <div className="text-gray-600">Total Users</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">1,920</div>
            <div className="text-gray-600">Players</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">892</div>
            <div className="text-gray-600">Scouts/Clubs</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">€12,480</div>
            <div className="text-gray-600">MRR</div>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-2">Pending Profiles</h2>
            <div className="text-3xl font-bold text-orange-600">24</div>
            <Link
              href="/admin/players"
              className="text-black text-sm mt-2 inline-block"
            >
              Review →
            </Link>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-2">Pending Videos</h2>
            <div className="text-3xl font-bold text-orange-600">18</div>
            <Link
              href="/admin/videos"
              className="text-black text-sm mt-2 inline-block"
            >
              Moderate →
            </Link>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-2">New Signups</h2>
            <div className="text-3xl font-bold">42</div>
            <Link
              href="/admin/users"
              className="text-black text-sm mt-2 inline-block"
            >
              View →
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded border border-gray-100">
          <h2 className="font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/admin/users"
              className="bg-ash p-4 text-center rounded hover:bg-gray-100"
            >
              User Management
            </Link>
            <Link
              href="/admin/players"
              className="bg-ash p-4 text-center rounded hover:bg-gray-100"
            >
              Player Approval
            </Link>
            <Link
              href="/admin/videos"
              className="bg-ash p-4 text-center rounded hover:bg-gray-100"
            >
              Video Moderation
            </Link>
            <Link
              href="/admin/subscriptions"
              className="bg-ash p-4 text-center rounded hover:bg-gray-100"
            >
              Subscriptions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
