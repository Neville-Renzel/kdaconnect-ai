// app/admin/videos/[id]/page.tsx
import Link from "next/link";

export default function AdminVideoDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/admin/videos"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Moderation
          </Link>
          <h1 className="text-3xl font-bold">Approve Video</h1>
        </div>

        <div className="bg-white p-6 rounded border border-gray-100">
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Match Highlights 2024</h2>
            <p className="text-gray-600">
              Submitted by Marcus Johnson (Player ID: P-1842)
            </p>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 aspect-video rounded flex items-center justify-center">
              [Video Preview]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold mb-2">Video Info</h3>
              <p>
                <strong>Source:</strong> YouTube
              </p>
              <p>
                <strong>URL:</strong> https://youtube.com/watch?v=...
              </p>
              <p>
                <strong>Submitted:</strong> Dec 10, 2025
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Player Info</h3>
              <p>
                <strong>Name:</strong> Marcus Johnson
              </p>
              <p>
                <strong>Position:</strong> Forward
              </p>
              <p>
                <strong>Nationality:</strong> Sweden
              </p>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-bold mb-2">Review Notes</label>
            <textarea
              rows={3}
              placeholder="Add internal notes (optional)"
              className="w-full border border-gray-300 rounded p-2"
            ></textarea>
          </div>

          <div className="flex space-x-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded">
              Approve & Publish
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded">
              Reject
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded">
              Request Edits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
