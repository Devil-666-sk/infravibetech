export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          One Partner For All
        </span>
        <br />
        Your <span className="text-gray-900">Tech & Marketing</span>
        <br />
        <span className="text-blue-600">Needs</span>
      </h1>

      <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
        InfraVibe Tech helps businesses grow with reliable IT support, laptop & printer services, AMC solutions, and result-driven digital marketing — all under one roof.
        <span className="block mt-2 font-medium text-gray-800">
          Serving <span className="text-blue-600 font-semibold">Tricity (Chandigarh, Mohali, Panchkula)</span> & nearby areas with on-site support, and delivering digital services <span className="text-blue-600 font-semibold">across India.</span>
        </span>
      </p>

      {/* TRUST BULLETS */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div className="flex items-center gap-2">✅ <span>5+ Years Experience</span></div>
        <div className="flex items-center gap-2">✅ <span>150+ Happy Clients</span></div>
        <div className="flex items-center gap-2">✅ <span>On-Call IT Support</span></div>
        <div className="flex items-center gap-2">✅ <span>Transparent Pricing</span></div>
      </div>

      {/* CTA BUTTONS */}
      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href="/services"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          View All Services
        </a>
        <a
          href="tel:7860225993"
          className="px-6 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
        >
          Talk to an Expert
        </a>
      </div>
    </div>

    {/* RIGHT SERVICE CARD */}
    <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40">
      <h3 className="text-2xl font-bold mb-5 text-gray-900">
        Our Professional Services
      </h3>

      <div className="grid md:grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-semibold text-blue-600 mb-2">⚙ Technical Services</h4>
          <ul className="space-y-1 text-gray-700">
            <li>• Laptop & PC Repair</li>
            <li>• Printer Repair</li>
            <li>• AMC (Annual Maintenance)</li>
            <li>• On-Call IT Support</li>
          </ul>

          <h4 className="font-semibold text-blue-600 mt-4 mb-2">🌐 Digital Marketing</h4>
          <ul className="space-y-1 text-gray-700">
            <li>• Website Design & Development</li>
            <li>• SEO (On & Off Page)</li>
            <li>• Social Media Marketing</li>
            <li>• Lead Generation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-blue-600 mb-2">💻 Sales Services</h4>
          <ul className="space-y-1 text-gray-700">
            <li>• New Laptop & PC Sales</li>
            <li>• Refurbished Systems</li>
            <li>• Printer Sales</li>
            <li>• Computer on Rent</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</section>

  );
}
