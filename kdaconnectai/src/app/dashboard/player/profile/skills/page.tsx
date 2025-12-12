// app/dashboard/player/profile/skills/page.tsx
import Link from "next/link";

export default function EditSkills() {
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
          <h1 className="text-3xl font-bold">Edit Skills & Attributes</h1>
        </div>

        <div className="bg-white p-8 rounded border border-gray-100 max-w-3xl">
          <form>
            <h2 className="font-bold mb-4">Technical Skills</h2>
            <div className="space-y-4 mb-8">
              {[
                { label: "Dribbling", value: 85 },
                { label: "Passing", value: 80 },
                { label: "Shooting", value: 90 },
                { label: "Heading", value: 75 },
                { label: "Tackling", value: 60 },
              ].map((skill, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="w-32">{skill.label}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={skill.value}
                    className="w-full max-w-xs"
                  />
                  <span className="w-12 text-right">{skill.value}</span>
                </div>
              ))}
            </div>

            <h2 className="font-bold mb-4">Physical Attributes</h2>
            <div className="space-y-4 mb-8">
              {[
                { label: "Pace", value: 88 },
                { label: "Strength", value: 72 },
                { label: "Stamina", value: 84 },
                { label: "Agility", value: 80 },
              ].map((attr, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="w-32">{attr.label}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={attr.value}
                    className="w-full max-w-xs"
                  />
                  <span className="w-12 text-right">{attr.value}</span>
                </div>
              ))}
            </div>

            <h2 className="font-bold mb-4">Mental Attributes</h2>
            <div className="space-y-4 mb-8">
              {[
                { label: "Vision", value: 82 },
                { label: "Composure", value: 78 },
                { label: "Work Rate", value: 90 },
                { label: "Leadership", value: 70 },
              ].map((attr, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="w-32">{attr.label}</span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={attr.value}
                    className="w-full max-w-xs"
                  />
                  <span className="w-12 text-right">{attr.value}</span>
                </div>
              ))}
            </div>

            <div className="text-center mb-6">
              <div className="inline-block bg-gray-100 p-4 rounded">
                <div className="text-center text-sm text-gray-600 mb-2">
                  Radar Chart Preview
                </div>
                <div className="bg-gray-200 w-48 h-48 rounded-full flex items-center justify-center">
                  [Radar Chart]
                </div>
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
                Save Skills
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
