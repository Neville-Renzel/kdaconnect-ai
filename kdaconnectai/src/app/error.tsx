// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">500</h1>
        <h2 className="text-2xl font-bold mb-4">Something Went Wrong</h2>
        <p className="text-gray-600 mb-8">
          We’re sorry, but an error occurred. Our team has been notified.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => reset()}
            className="bg-ash text-gray-800 px-6 py-3 rounded font-medium hover:bg-gray-100 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
