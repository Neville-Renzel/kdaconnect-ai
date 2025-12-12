// app/terms/page.tsx
export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: December 2025</p>

        <div className="prose prose-gray">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using KDAconnect AI, you agree to be bound by these
            Terms of Service. If you do not agree, please do not use our
            platform.
          </p>

          <h2>2. Account Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You must provide accurate and complete information during
            registration.
          </p>

          <h2>3. Content Policies</h2>
          <p>
            You retain ownership of your content, but grant KDAconnect AI a
            non-exclusive, royalty-free license to display, distribute, and
            promote your profile and videos for the purpose of platform
            operation. You may not upload offensive, illegal, or infringing
            content.
          </p>

          <h2>4. Video License</h2>
          <p>
            If you submit raw video footage for KDAconnect AI to edit and
            publish on our YouTube channel, you waive all ownership and
            monetization rights. All revenue from such videos belongs solely to
            KDAconnect AI.
          </p>

          <h2>5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms, provide false information, or engage in fraudulent
            activity.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            KDAconnect AI is a discovery platform. We do not guarantee trials,
            contracts, or employment. Use of the platform is at your own risk.
          </p>
        </div>
      </div>
    </div>
  );
}
