// app/dashboard/player/videos/upload/page.tsx
import Link from "next/link";

export default function UploadVideo() {
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
          <h1 className="text-3xl font-bold">Upload New Video</h1>
        </div>

        <div className="bg-white p-8 rounded border border-gray-100 max-w-3xl">
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Video Title
              </label>
              <input
                type="text"
                placeholder="e.g., Match Highlights vs AIK"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Video Description
              </label>
              <textarea
                rows={3}
                placeholder="Describe the context, date, opponent, your role, etc."
                className="w-full border border-gray-300 rounded p-2"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Video Source
              </label>
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    type="radio"
                    id="youtube"
                    name="source"
                    defaultChecked
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="youtube" className="font-medium">
                      YouTube Link
                    </label>
                    <p className="text-sm text-gray-600">
                      Paste a public YouTube URL (e.g.,
                      https://youtube.com/watch?v=...)
                    </p>
                    <input
                      type="url"
                      placeholder="https://youtube.com/watch?v=..."
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="radio"
                    id="vimeo"
                    name="source"
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="vimeo" className="font-medium">
                      Vimeo Link
                    </label>
                    <p className="text-sm text-gray-600">
                      Paste a public Vimeo URL
                    </p>
                    <input
                      type="url"
                      placeholder="https://vimeo.com/..."
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="radio"
                    id="drive"
                    name="source"
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="drive" className="font-medium">
                      Google Drive
                    </label>
                    <p className="text-sm text-gray-600">
                      Paste a shareable link with “Anyone with the link can
                      view” enabled
                    </p>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/file/d/..."
                      className="w-full border border-gray-300 rounded p-2 mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="radio"
                    id="raw"
                    name="source"
                    className="mt-1 mr-3"
                  />
                  <div>
                    <label htmlFor="raw" className="font-medium">
                      Upload Raw Footage (We Edit & Publish)
                    </label>
                    <p className="text-sm text-gray-600">
                      We will edit and publish this on the official KDAconnect
                      AI YouTube channel.
                      <strong>
                        {" "}
                        You waive all ownership and monetization rights. Revenue
                        belongs to KDAconnect AI.
                      </strong>
                    </p>
                    <div className="border-2 border-dashed border-gray-300 rounded p-6 mt-2">
                      <div className="text-gray-500 mb-2">
                        Drag file here or click to upload
                      </div>
                      <button
                        type="button"
                        className="text-sm bg-ash px-4 py-1 rounded"
                      >
                        Choose File
                      </button>
                      <p className="text-xs text-gray-500 mt-2">
                        MP4, MOV, AVI up to 2GB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <input type="checkbox" id="agree" className="mr-2" required />
              <label htmlFor="agree" className="text-sm">
                I agree to the{" "}
                <a href="/video-license" className="text-black underline">
                  Video License Agreement
                </a>
              </label>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                className="border border-gray-300 px-6 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded"
              >
                Submit for Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
