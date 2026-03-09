const steps = [
  {
    number: "01",
    title: "Set Your Preferences",
    description:
      "Tell us your dates, budget, number of bedrooms, desired towns, and must-have amenities like pools or beach access.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "We Search Everything",
    description:
      "Our platform scans Airbnb, VRBO, StreetEasy, and dozens more — pulling every available listing that matches your needs.",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Find Your Best Value",
    description:
      "Listings are ranked by our Value Score — comparing price, features, reviews, and location so you spot the best deals instantly.",
    icon: "🏆",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Finding the perfect Hamptons rental used to take days. Now it takes minutes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <span className="text-teal-500 font-bold text-sm tracking-widest mb-2">
                STEP {step.number}
              </span>
              <h3 className="text-xl font-bold text-blue-950 mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
