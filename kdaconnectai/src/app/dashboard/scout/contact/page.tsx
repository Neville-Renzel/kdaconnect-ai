// app/dashboard/scout/contact/page.tsx
import Link from "next/link";

export default function NewContact() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/scout/contacts"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Contacts
          </Link>
          <h1 className="text-3xl font-bold">Contact Player</h1>
        </div>

        <div className="bg-white p-8 rounded border border-gray-100 max-w-3xl">
          <div className="mb-6">
            <h2 className="font-bold mb-2">Recipient</h2>
            <div className="flex items-center">
              <div className="bg-gray-200 w-10 h-10 rounded-full mr-3"></div>
              <span>Marcus Johnson (Forward, Sweden)</span>
            </div>
          </div>

          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={6}
                placeholder="Introduce yourself, mention what impressed you, and propose next steps..."
                className="w-full border border-gray-300 rounded p-2"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Attach Document (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
                <div className="text-gray-500 mb-2">
                  Drag file or click to upload
                </div>
                <button
                  type="button"
                  className="text-sm bg-ash px-3 py-1 rounded"
                >
                  Choose File
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Proposed Next Step
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>Request Video Call</option>
                <option>Invite to Trial</option>
                <option>Send Contract Offer</option>
                <option>General Inquiry</option>
              </select>
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
                Send Contact Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
