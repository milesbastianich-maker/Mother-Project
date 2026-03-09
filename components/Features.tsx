const features = [
  {
    icon: "🗂️",
    title: "Unified Search",
    description:
      "Every listing from Airbnb, VRBO, StreetEasy, and more — all in one searchable interface. No more tab-switching.",
  },
  {
    icon: "🎛️",
    title: "Smart Filtering",
    description:
      "Filter by budget, dates, bedrooms, specific Hamptons towns, and amenities like pools, tennis courts, or beachfront access.",
  },
  {
    icon: "💰",
    title: "Value Scoring",
    description:
      "Our algorithm ranks every listing by value — comparing price against features, location, and comparable properties.",
  },
  {
    icon: "📅",
    title: "Availability Matching",
    description:
      "Only see properties available for your exact dates. No bait-and-switch listings that aren't actually bookable.",
  },
  {
    icon: "🗺️",
    title: "Map-Based Discovery",
    description:
      "Explore rentals visually across East Hampton, Southampton, Montauk, Sag Harbor, and every Hamptons town.",
  },
  {
    icon: "🔔",
    title: "Alerts & Tracking",
    description:
      "Save your favorite listings and get notified instantly when prices drop or a better match becomes available.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-blue-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Find the Best Rental
          </h2>
          <p className="text-lg text-blue-300 max-w-xl mx-auto">
            Built for vacation planners, summer renters, and real estate clients who want the best — without the hassle.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
