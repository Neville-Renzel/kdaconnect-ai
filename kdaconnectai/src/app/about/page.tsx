// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Image
            src="/Image/Logo.webp"
            alt="logo"
            width={72}
            height={72}
            className="mx-auto rounded"
          />
          <h1 className="text-4xl font-bold mb-4">About KDAconnect</h1>
          <p className="text-blue-100 text-lg">
            Building the future of football talent discovery
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h1>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            To connect relentless football talent with real opportunity through
            a trusted, verified, and data-driven discovery platform.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Our Story</h2>
          <p className="mb-4 text-gray-700">
            Founded in 2024, KDAconnect AI was born from a simple observation:
            thousands of talented footballers go unnoticed every year, while
            clubs and scouts struggle to find reliable, vetted players.
          </p>
          <p className="text-gray-700">
            We built a platform where merit, visibility, and verified data
            replace guesswork and unverified claims.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Why We Exist
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              80% of amateur players lack access to professional scouting
              channels
            </li>
            <li>
              Scouts waste hours verifying fake stats and unverified profiles
            </li>
            <li>
              Opportunity in football should be based on talent — not
              connections
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Founder</h2>
          <div className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg">
            <Image
              src="/Image/founder.webp"
              alt="Mike Ogbole"
              width={150}
              height={150}
              className="rounded-full mr-8 mb-4 md:mb-0"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Mike Ogbole — Founder & CEO</h3>
              <p className="text-gray-700 mt-2">
                Former professional footballer with firsthand experience of the challenges players face in gaining visibility, securing trials, and navigating international football pathways.
              </p>
              <p className="text-gray-700 mt-2">
                Built KDAconnect AI to solve the discovery gap using technology and data-driven scouting.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Contact Us</h2>
          <p>Email: info@kdaconnect.ai</p>
          <p>Based in Europe | Serving Global Football</p>
        </section>
      </div>
    </div>
  );
}
