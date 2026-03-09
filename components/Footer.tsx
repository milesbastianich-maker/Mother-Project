export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-white/10 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-white font-bold text-xl">Hampton Rental Finder</span>
          <p className="text-blue-400 text-sm mt-1">
            The smartest way to find Hamptons rentals.
          </p>
        </div>
        <p className="text-blue-500 text-sm">
          © {new Date().getFullYear()} Hampton Rental Finder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
