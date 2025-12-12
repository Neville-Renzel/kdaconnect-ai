// app/dashboard/scout/settings/page.tsx
export default function ScoutAccountSettings() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

        <div className="max-w-2xl">
          <div className="bg-white p-6 rounded border border-gray-100 mb-6">
            <h2 className="font-bold mb-4">Organization Info</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-1">Organization Name</label>
                <input
                  type="text"
                  defaultValue="BK Häcken"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1">Organization Type</label>
                <select className="w-full border border-gray-300 rounded p-2">
                  <option>Professional Club</option>
                  <option>Academy</option>
                  <option>Agency</option>
                  <option>Independent Scout</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm mb-1">Website</label>
                <input
                  type="url"
                  defaultValue="https://bkhacken.se"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded border border-gray-100">
            <h2 className="font-bold mb-4">Security</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="scout@bkhacken.se"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Current Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">New Password</label>
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <button className="bg-black text-white px-4 py-2 rounded">
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
