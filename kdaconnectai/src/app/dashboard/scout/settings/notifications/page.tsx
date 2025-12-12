// app/dashboard/scout/settings/notifications/page.tsx
export default function ScoutNotificationSettings() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <a
            href="/dashboard/scout/settings"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Settings
          </a>
          <h1 className="text-3xl font-bold">Notification Settings</h1>
        </div>

        <div className="max-w-2xl">
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Email Notifications</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">New Player Matches</div>
                  <div className="text-sm text-gray-600">
                    Weekly digest of players matching your saved searches
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Player Response</div>
                  <div className="text-sm text-gray-600">
                    When a player replies to your contact request
                  </div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Platform Updates</div>
                  <div className="text-sm text-gray-600">
                    New features, maintenance, policy changes
                  </div>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <h2 className="font-bold mb-4">Notification Frequency</h2>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="realtime"
                  name="freq"
                  className="mr-2"
                />
                <label htmlFor="realtime" className="mr-6">
                  Real-time
                </label>
                <input type="radio" id="daily" name="freq" className="mr-2" />
                <label htmlFor="daily" className="mr-6">
                  Daily Summary
                </label>
                <input
                  type="radio"
                  id="weekly"
                  name="freq"
                  defaultChecked
                  className="mr-2"
                />
                <label htmlFor="weekly">Weekly Digest</label>
              </div>
            </div>

            <button className="mt-6 bg-black text-white px-4 py-2 rounded">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
