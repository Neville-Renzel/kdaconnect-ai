// app/cookies/page.tsx
export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: December 2025</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2">What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device that help us
              provide and improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Cookies We Use</h2>
            <table className="w-full border border-gray-200 mt-2">
              <thead>
                <tr className="bg-ash">
                  <th className="border border-gray-200 p-2 text-left">Type</th>
                  <th className="border border-gray-200 p-2 text-left">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2">Essential</td>
                  <td className="border border-gray-200 p-2">
                    Authentication, security, site functionality
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2">Analytics</td>
                  <td className="border border-gray-200 p-2">
                    Page views, user behavior (anonymous)
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2">Preference</td>
                  <td className="border border-gray-200 p-2">
                    Language, display settings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Your Choices</h2>
            <p>
              You can disable non-essential cookies by adjusting your browser
              settings. Note: Disabling essential cookies may prevent the site
              from functioning properly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Third-Party Cookies</h2>
            <p>
              We use YouTube embeds. YouTube may set its own cookies when you
              play a video. We do not control these cookies. Please refer to
              Google’s cookie policy for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
