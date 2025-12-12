// app/about/page.tsx
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About KDAconnect AI</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            To connect relentless football talent with real opportunity through a trusted, verified, and data-driven discovery platform.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="mb-4">
            Founded in 2024, KDAconnect AI was born from a simple observation: 
            thousands of talented footballers go unnoticed every year, 
            while clubs and scouts struggle to find reliable, vetted players.
          </p>
          <p>
            We built a platform where merit, visibility, and verified data replace guesswork and unverified claims.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Why We Exist</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>80% of amateur players lack access to professional scouting channels</li>
            <li>Scouts waste hours verifying fake stats and unverified profiles</li>
            <li>Opportunity in football should be based on talent — not connections</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <p>Email: info@kdaconnect.ai</p>
          <p>Based in Europe | Serving Global Football</p>
        </section>
      </div>
    </div>
  );
}