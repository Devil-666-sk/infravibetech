export default function WhyChooseUs() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50"
      aria-label="Why choose InfraVibe Tech for IT and digital services"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Why Businesses Choose{" "}
            <span className="text-blue-600">InfraVibe Tech</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted IT support and digital solutions designed to help businesses
            stay secure, productive, and ready for growth.
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <article className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              Fast & Reliable IT Support
            </h3>
            <p className="text-gray-600">
              We provide quick on-call and on-site IT support to minimize downtime
              and keep your business operations running smoothly.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              Complete IT & Digital Solutions
            </h3>
            <p className="text-gray-600">
              From hardware support and AMC services to websites and digital
              marketing, we handle everything under one roof.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              Experienced Professionals
            </h3>
            <p className="text-gray-600">
              Our team brings hands-on experience in IT infrastructure, system
              maintenance, and business-focused digital strategies.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              Affordable AMC & Support Plans
            </h3>
            <p className="text-gray-600">
              Flexible and transparent AMC plans tailored for startups, offices,
              and growing businesses.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              Local Business Support
            </h3>
            <p className="text-gray-600">
              Serving businesses across Chandigarh, Mohali, and Panchkula with
              quick response and dependable local support.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-3">
              Growth-Focused Approach
            </h3>
            <p className="text-gray-600">
              We focus on long-term stability and growth by aligning technology
              and digital solutions with your business goals.
            </p>
          </article>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need reliable IT support or digital services for your business?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
