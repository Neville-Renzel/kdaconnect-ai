// app/contact/page.tsx
"use client";
export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-100 text-lg mt-2">
            We're here to help. Reach out anytime
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Get in Touch
            </h2>
            <p className="mb-6 text-gray-700">
              Whether you're a player, scout, club, or partner, we’d love to
              hear from you.
            </p>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>info@kdaconnect.ai</p>
              </div>
              <div>
                <h3 className="font-semibold">Support Hours</h3>
                <p>Monday–Friday, 9:00 AM – 5:00 PM CET</p>
              </div>
              <div>
                <h3 className="font-semibold">Headquarters</h3>
                <p>Stockholm, Sweden</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Send a Message
            </h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you for your message! We will get back to you soon."
                );
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 font-semibold text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-2 border-blue-300 rounded p-2 focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-2 border-blue-300 rounded p-2 focus:outline-none focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 font-semibold text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-2 border-blue-300 rounded p-2 focus:outline-none focus:border-blue-600"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
