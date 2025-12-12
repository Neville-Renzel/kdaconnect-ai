// app/dashboard/scout/reports/[id]/page.tsx
import Link from "next/link";

export default function ScoutReportDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/scout/reports"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Reports
          </Link>
          <h1 className="text-3xl font-bold">Strikers Shortlist — Dec 2025</h1>
        </div>

        <div className="mb-6 flex justify-end space-x-3">
          <button className="border border-gray-300 px-4 py-2 rounded text-sm">
            Export PDF
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded text-sm">
            Export Excel
          </button>
        </div>

        <div className="space-y-8">
          {/* Player 1 */}
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="flex gap-6">
              <div className="bg-gray-200 w-24 h-24 rounded-full flex-shrink-0" />
              <div className="flex-grow">
                <h2 className="text-xl font-bold mb-2">Marcus Johnson</h2>
                <p className="text-gray-600 mb-4">
                  Forward • Sweden • 22 • IFK Göteborg U21
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-ash p-2 text-center rounded">
                    <div className="text-sm text-gray-600">Goals</div>
                    <div className="font-bold">18</div>
                  </div>
                  <div className="bg-ash p-2 text-center rounded">
                    <div className="text-sm text-gray-600">Pace</div>
                    <div className="font-bold">88</div>
                  </div>
                  <div className="bg-ash p-2 text-center rounded">
                    <div className="text-sm text-gray-600">Video Views</div>
                    <div className="font-bold">142</div>
                  </div>
                  <div className="bg-ash p-2 text-center rounded">
                    <div className="text-sm text-gray-600">Contact Status</div>
                    <div className="font-bold text-green-600">Responded</div>
                  </div>
                </div>

                <p className="text-sm italic">
                  "Strong finisher with excellent movement. Needs development in
                  aerial duels."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
