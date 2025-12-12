// app/success-stories/page.tsx
import Link from "next/link";

export default function SuccessStories() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Success Stories
        </h1>

        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-4">
            From Obscurity to Opportunity
          </h2>
          <p className="mb-6">
            Since 2024, KDAconnect AI has helped over 120 players secure trials
            with professional clubs across Europe, Asia, and North America.
          </p>
          <p>
            Our verified platform ensures that talent—not hype—drives discovery.
          </p>
        </div>

        {/* Player Testimonial */}
        <div className="bg-ash rounded-lg p-8 mb-16 max-w-3xl mx-auto">
          <p className="italic text-gray-800 mb-4">
            "I had uploaded my highlights to every forum possible with zero
            response. Within 3 days of going live on KDAconnect AI, a scout from
            Norway contacted me. Two weeks later, I was on trial with a
            second-division club. Today, I’m under contract."
          </p>
          <p className="font-semibold">— A. Martínez, 21, Midfielder (Spain)</p>
        </div>

        {/* Scout Testimonial */}
        <div className="bg-ash rounded-lg p-8 mb-16 max-w-3xl mx-auto">
          <p className="italic text-gray-800 mb-4">
            "We used to spend 20+ hours a week verifying player claims. With
            KDAconnect AI’s verified profiles and video-first approach, we cut
            that to 3 hours and found 3 new signings last season."
          </p>
          <p className="font-semibold">
            — Lena Bergström, Head Scout, BK Häcken (Sweden)
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold">120+</div>
            <div className="text-gray-600">Players Signed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">85+</div>
            <div className="text-gray-600">Clubs Joined</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">42</div>
            <div className="text-gray-600">Countries Represented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">94%</div>
            <div className="text-gray-600">Verified Profiles</div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/signup"
            className="inline-block bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
          >
            Become Our Next Success Story
          </Link>
        </div>
      </div>
    </div>
  );
}
