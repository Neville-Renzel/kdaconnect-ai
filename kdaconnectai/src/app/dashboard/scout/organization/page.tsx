// app/dashboard/scout/organization/page.tsx
export default function ScoutOrganization() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Organization Profile</h1>

        <div className="max-w-2xl">
          <div className="bg-white p-6 rounded border border-gray-100 mb-6">
            <h2 className="font-bold mb-4">Club Details</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-1">Club Name</label>
                <input
                  type="text"
                  defaultValue="BK Häcken"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Country</label>
                <input
                  type="text"
                  defaultValue="Sweden"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">League</label>
                <input
                  type="text"
                  defaultValue="Allsvenskan"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-1">Logo</label>
                <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
                  <div className="text-gray-500 mb-2">
                    Click to upload club logo
                  </div>
                  <button
                    type="button"
                    className="text-sm bg-ash px-3 py-1 rounded"
                  >
                    Choose File
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
              >
                Save Organization
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Public Profile Preview</h2>
            <div className="bg-gray-50 p-4 rounded text-center">
              <div className="bg-gray-200 w-16 h-16 rounded-full mx-auto mb-2"></div>
              <h3 className="font-bold">BK Häcken</h3>
              <p className="text-gray-600 text-sm">Allsvenskan • Sweden</p>
              <p className="text-sm mt-2">Verified Organization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
