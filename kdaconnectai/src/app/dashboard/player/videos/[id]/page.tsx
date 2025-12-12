// app/dashboard/player/videos/[id]/page.tsx
import Link from "next/link";

export default function VideoDetails({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/player/videos"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Videos
          </Link>
          <h1 className="text-3xl font-bold">Video Details</h1>
        </div>

        <div className="bg-white p-8 rounded border border-gray-100">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Match Highlights 2024</h2>
            <p className="text-gray-600">Uploaded on Dec 10, 2025</p>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 aspect-video rounded flex items-center justify-center">
              [Embedded YouTube Video]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold mb-2">Source</h3>
              <p>YouTube</p>
              <p className="text-sm text-gray-600 break-words">
                https://youtube.com/watch?v=abc123
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Status</h3>
              <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                Published
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-2">Description</h3>
            <p>
              Full 90-minute highlights from the match against AIK U21 on
              November 30, 2025. Goals at 23' and 67'.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-ash p-3 text-center rounded">
              <div className="font-bold">142</div>
              <div className="text-gray-600 text-sm">Views</div>
            </div>
            <div className="bg-ash p-3 text-center rounded">
              <div className="font-bold">28</div>
              <div className="text-gray-600 text-sm">Scouts Watched</div>
            </div>
            <div className="bg-ash p-3 text-center rounded">
              <div className="font-bold">4:21</div>
              <div className="text-gray-600 text-sm">Avg. Watch Time</div>
            </div>
            <div className="bg-ash p-3 text-center rounded">
              <div className="font-bold">12</div>
              <div className="text-gray-600 text-sm">Profile Views After</div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="border border-gray-300 px-4 py-2 rounded">
              Edit Metadata
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
