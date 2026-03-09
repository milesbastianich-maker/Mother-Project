export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-teal-800 min-h-screen flex items-center justify-center text-white px-6">
      <div className="absolute inset-0 bg-[url('/hamptons-bg.jpg')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block bg-teal-500/20 border border-teal-400/40 text-teal-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          The Hamptons, Simplified
        </span>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Find Your Perfect{" "}
          <span className="text-teal-400">Hampton Rental</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto mb-10">
          Stop browsing 10 websites. We aggregate every listing across the Hamptons and surface the best value rentals — instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#early-access"
            className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
          >
            Get Early Access
          </a>
          <a
            href="#features"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-6 text-blue-300 text-sm">
          Aggregating Airbnb, VRBO, StreetEasy & more — all in one place
        </p>
      </div>
    </section>
  );
}
