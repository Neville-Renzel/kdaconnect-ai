// app/dashboard/scout/lists/page.tsx
import Link from "next/link";

export default function ScoutLists() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Player Lists</h1>
          <button className="bg-black text-white px-4 py-2 rounded">
            + New List
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-bold text-xl">Strikers to Watch</h2>
                <p className="text-gray-600 text-sm">
                  3 players • Last updated Dec 10
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm bg-ash px-2 py-1 rounded">
                  Edit
                </button>
                <button className="text-sm bg-ash px-2 py-1 rounded">
                  Share
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 p-3 rounded text-center">
                  <div className="bg-gray-200 w-12 h-12 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Player {i}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-bold text-xl">Summer Transfer Targets</h2>
                <p className="text-gray-600 text-sm">
                  5 players • Last updated Dec 5
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm bg-ash px-2 py-1 rounded">
                  Edit
                </button>
                <button className="text-sm bg-ash px-2 py-1 rounded">
                  Share
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-gray-50 p-3 rounded text-center">
                  <div className="bg-gray-200 w-12 h-12 rounded-full mx-auto mb-2"></div>
                  <p className="text-xs">Player {i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
