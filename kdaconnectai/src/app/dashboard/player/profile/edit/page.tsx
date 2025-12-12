// app/dashboard/player/profile/edit/page.tsx
import Link from "next/link";

export default function EditPersonalInfo() {
  return (
    <div className="min-h-screen bg-ash">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link
            href="/dashboard/player/profile"
            className="text-gray-600 hover:underline mr-4"
          >
            ← Back to Profile
          </Link>
          <h1 className="text-3xl font-bold">Edit Personal Information</h1>
        </div>

        <div className="bg-white p-8 rounded border border-gray-100 max-w-3xl">
          <form>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Marcus"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Johnson"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                defaultValue="2003-05-14"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Position
                </label>
                <select className="w-full border border-gray-300 rounded p-2">
                  <option>Forward</option>
                  <option>Midfielder</option>
                  <option>Defender</option>
                  <option>Goalkeeper</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Preferred Foot
                </label>
                <select className="w-full border border-gray-300 rounded p-2">
                  <option>Right</option>
                  <option>Left</option>
                  <option>Both</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  defaultValue="185"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  defaultValue="77"
                  className="w-full border border-gray-300 rounded p-2"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Nationality
              </label>
              <input
                type="text"
                defaultValue="Sweden"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Current Club
              </label>
              <input
                type="text"
                defaultValue="IFK Göteborg U21"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                rows={4}
                defaultValue="Dynamic forward with strong finishing and pace. Scored 18 goals in 24 matches last season for IFK Göteborg U21."
                className="w-full border border-gray-300 rounded p-2"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Profile Photo
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded p-6 text-center">
                <div className="text-gray-500 mb-2">
                  Drag photo here or click to upload
                </div>
                <button
                  type="button"
                  className="text-sm bg-ash px-4 py-1 rounded"
                >
                  Choose File
                </button>
              </div>
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
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
