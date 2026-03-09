"use client";
import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="early-access" className="py-24 bg-teal-600 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get Early Access
        </h2>
        <p className="text-teal-100 text-lg mb-10">
          Be the first to search smarter. Join the waitlist and we&apos;ll notify you the moment Hampton Rental Finder launches.
        </p>
        {submitted ? (
          <div className="bg-white/20 border border-white/30 rounded-2xl p-8 text-white">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">You&apos;re on the list!</h3>
            <p className="text-teal-100">We&apos;ll reach out to {email} when we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-xl text-blue-950 placeholder-gray-400 text-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-blue-950 hover:bg-blue-900 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
        )}
        <p className="mt-4 text-teal-200 text-sm">No spam. Just a heads-up when we&apos;re live.</p>
      </div>
    </section>
  );
}
