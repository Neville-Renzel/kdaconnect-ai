// app/privacy/page.tsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: December 2025</p>

        <div className="prose prose-gray">
          <h2>1. Information We Collect</h2>
          <p>
            We collect personal data you provide when creating an account,
            including name, email, date of birth, nationality, position, stats,
            career history, and video content.
          </p>

          <h2>2. How We Use Your Data</h2>
          <p>
            Your data is used to:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Create and display your public profile</li>
              <li>Enable scouts to search and contact you</li>
              <li>Verify your identity and athletic credentials</li>
              <li>Improve platform features and user experience</li>
            </ul>
          </p>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell your data. Verified player profiles are visible to
            registered scouts and clubs. Analytics may be shared in aggregate
            form for platform reporting.
          </p>

          <h2>4. YouTube Integration</h2>
          <p>
            If you provide raw video footage for KDAconnect AI to publish on our
            YouTube channel, that content becomes subject to YouTube’s data
            policies. Viewership data may be used for platform analytics.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal
            data at any time by contacting us at info@kdaconnect.ai. We comply
            with GDPR and other applicable data protection laws.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your data for as long as your account is active. If you
            delete your account, your profile and videos will be removed within
            30 days.
          </p>
        </div>
      </div>
    </div>
  );
}
