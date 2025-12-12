// app/dashboard/scout/contacts/[id]/page.tsx
import Link from "next/link";

export default function ScoutMessageThread({
  params,
}: {
  params: { id: string };
}) {
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
          <h1 className="text-3xl font-bold">Conversation</h1>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded border border-gray-100 mb-6">
              <div className="flex items-start mb-4">
                <div className="bg-gray-200 w-12 h-12 rounded-full mr-3"></div>
                <div>
                  <h2 className="font-bold">Marcus Johnson</h2>
                  <p className="text-gray-600 text-sm">
                    Forward • Sweden • IFK Göteborg U21
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 bg-ash rounded">
                  <p className="text-sm">
                    Hello Marcus, I’m a scout with BK Häcken. I watched your
                    highlights and was impressed by your finishing. Would you be
                    open to a trial?
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Dec 11, 2025 • 10:24 AM
                  </p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded">
                  <p className="text-sm">
                    Hi! Yes, I’d be very interested. I’m available after January
                    15.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Dec 11, 2025 • 2:17 PM
                  </p>
                </div>
              </div>

              <form className="flex gap-2">
                <textarea
                  rows={2}
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded border border-gray-100 sticky top-8">
              <h3 className="font-bold mb-3">Actions</h3>
              <ul className="space-y-2">
                <li>
                  <button className="w-full text-left bg-ash p-2 rounded">
                    Schedule Trial
                  </button>
                </li>
                <li>
                  <button className="w-full text-left bg-ash p-2 rounded">
                    Send Contract Offer
                  </button>
                </li>
                <li>
                  <button className="w-full text-left bg-ash p-2 rounded">
                    Add to Shortlist
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
