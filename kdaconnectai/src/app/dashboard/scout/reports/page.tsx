// app/dashboard/scout/reports/page.tsx
import Link from "next/link";

export default function ScoutReports() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Custom Reports</h1>
          <button className="bg-black text-white px-4 py-2 rounded">
            + New Report
          </button>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="bg-ash px-4 py-2 rounded">Last 30 Days</button>
            <button className="bg-ash px-4 py-2 rounded">Q4 2025</button>
            <button className="bg-ash px-4 py-2 rounded">Custom Range</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Report Type
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>Player Shortlist</option>
                <option>Scouting Summary</option>
                <option>Talent Pipeline</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Players</label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>Select from Favorites or Lists</option>
                <option>Strikers to Watch (3 players)</option>
                <option>Summer Targets (5 players)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded border border-gray-100">
          <h2 className="font-bold mb-4">Generated Reports</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <div>
                <h3 className="font-medium">Strikers Shortlist — Dec 2025</h3>
                <p className="text-sm text-gray-600">
                  3 players • Generated Dec 10
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="text-sm text-black underline">View</button>
                <button className="text-sm text-black underline">PDF</button>
                <button className="text-sm text-black underline">Excel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
