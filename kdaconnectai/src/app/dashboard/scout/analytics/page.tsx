// app/dashboard/scout/analytics/page.tsx
export default function ScoutAnalytics() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">24</div>
            <div className="text-gray-600">Players Contacted</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">8</div>
            <div className="text-gray-600">Responses Received</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">33%</div>
            <div className="text-gray-600">Response Rate</div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="text-2xl font-bold">2</div>
            <div className="text-gray-600">Trials Scheduled</div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Recruitment Funnel</h2>
            <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-500">
              [Funnel Chart: Viewed → Contacted → Responded → Trial → Signed]
            </div>
          </div>
          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Most Viewed Positions</h2>
            <div className="bg-gray-100 h-48 flex items-center justify-center text-gray-500">
              [Bar Chart: Forward (42%), Midfielder (30%), Defender (20%), GK (8%)]
            </div>
          </div>
        </div>

        {/* Top Players */}
        <div className="bg-white p-6 rounded border border-gray-100">
          <h2 className="font-bold mb-4">Most Engaged Players</h2>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-3">Player</th>
                <th className="text-left p-3">Profile Views</th>
                <th className="text-left p-3">Video Watch Time</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-3">Marcus Johnson</td>
                <td className="p-3">12</td>
                <td className="p-3">8:42</td>
                <td className="p-3">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Contact Sent</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}