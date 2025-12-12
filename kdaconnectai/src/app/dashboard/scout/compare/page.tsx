// app/dashboard/scout/compare/page.tsx
import Link from "next/link";

export default function PlayerComparison() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/scout/search/results"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Search
          </Link>
          <h1 className="text-3xl font-bold">Player Comparison</h1>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-full bg-white rounded border border-gray-100">
            <thead>
              <tr>
                <th className="text-left p-4">Attribute</th>
                <th className="text-left p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                    Marcus Johnson
                  </div>
                </th>
                <th className="text-left p-4">
                  <div className="flex items-center">
                    <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
                    Erik Larsson
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium">Position</td>
                <td className="p-4">Forward</td>
                <td className="p-4">Forward</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium">Age</td>
                <td className="p-4">22</td>
                <td className="p-4">20</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium">Height</td>
                <td className="p-4">185 cm</td>
                <td className="p-4">178 cm</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium">Goals (2024)</td>
                <td className="p-4">18</td>
                <td className="p-4">14</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium">Pace</td>
                <td className="p-4">88</td>
                <td className="p-4">92</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium">Shooting</td>
                <td className="p-4">90</td>
                <td className="p-4">85</td>
              </tr>
              <tr className="border-t border-gray-100">
                <td className="p-4 font-medium">Work Rate</td>
                <td className="p-4">90</td>
                <td className="p-4">88</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-3">Marcus Johnson - Highlights</h3>
            <div className="bg-gray-200 aspect-video rounded"></div>
          </div>
          <div>
            <h3 className="font-bold mb-3">Erik Larsson - Highlights</h3>
            <div className="bg-gray-200 aspect-video rounded"></div>
          </div>
        </div>

        <div className="mt-8 flex justify-end space-x-3">
          <button className="border border-gray-300 px-4 py-2 rounded">
            Export PDF
          </button>
          <button className="bg-black text-white px-4 py-2 rounded">
            Save Comparison
          </button>
        </div>
      </div>
    </div>
  );
}
