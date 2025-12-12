// app/dashboard/player/page.tsx
import Link from "next/link";

export default function PlayerDashboard() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Player Dashboard</h1>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">87%</div>
            <div className="text-gray-600">Profile Complete</div>
            <Link
              href="/dashboard/player/profile/edit"
              className="text-sm text-black mt-2 inline-block"
            >
              Edit →
            </Link>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">142</div>
            <div className="text-gray-600">Profile Views</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">28</div>
            <div className="text-gray-600">Video Views</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">3</div>
            <div className="text-gray-600">Contact Requests</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Manage Profile</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard/player/profile/edit"
                  className="text-black hover:underline"
                >
                  Edit Personal Info
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/player/profile/stats"
                  className="text-black hover:underline"
                >
                  Edit Stats
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/player/profile/career"
                  className="text-black hover:underline"
                >
                  Edit Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Video Management</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard/player/videos"
                  className="text-black hover:underline"
                >
                  My Videos
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/player/videos/upload"
                  className="text-black hover:underline"
                >
                  Upload New
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Account</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/dashboard/player/subscription"
                  className="text-black hover:underline"
                >
                  Subscription
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/player/settings"
                  className="text-black hover:underline"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded border border-gray-100">
          <h2 className="font-bold text-xl mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            <li className="flex justify-between text-sm">
              <span>Profile viewed by BK Häcken scout</span>
              <span className="text-gray-500">2 hours ago</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>New contact request from IK Sirius</span>
              <span className="text-gray-500">1 day ago</span>
            </li>
            <li className="flex justify-between text-sm">
              <span>Video “Match Highlights 2024” approved</span>
              <span className="text-gray-500">3 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
