"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about-infravibe-tech"
      className="w-full bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-16 sm:py-20 px-4 sm:px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
            About InfraVibe Tech
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Authorized IT Distributor & Digital Growth Partner
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Complete Sales, Repair, AMC & Marketing Solutions
            </span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
            <strong>InfraVibe Tech</strong> is connected with trusted IT distributor
            chains, providing genuine laptops, desktops, and hardware solutions
            at competitive pricing. We specialize in laptop sales, repair
            services, system upgrades, AMC (Annual Maintenance Contracts),
            and complete technical support for businesses and individuals.
          </p>

          <p className="text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Along with technical expertise, we help businesses grow digitally
            through professional website development, SEO optimization,
            branding, lead generation, and social media marketing services.
            We deliver complete business solutions under one roof with
            transparency, reliability, and long-term support.
          </p>

          <div className="space-y-4 mb-10 max-w-xl mx-auto lg:mx-0">
            {[
              "Authorized Laptop & IT Hardware Distribution",
              "Laptop Sales, Repair, Upgrade & AMC Services",
              "Corporate & Individual Technical Support",
              "SEO, Website Development & Digital Marketing",
              "Lead Generation & Branding Campaigns",
              "Fast Response & Dedicated Support",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="tel:7860225993"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              aria-label="Call InfraVibe Tech"
            >
              <Phone size={18} /> Call Now
            </a>

            <a
              href="https://wa.me/917860225993"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-blue-600 text-blue-700 px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 text-sm sm:text-base"
              aria-label="Message InfraVibe Tech on WhatsApp"
            >
              <MessageCircle size={18} /> Message Us
            </a>
          </div>
        </motion.div>

        {/* RIGHT TRUST CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/50"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-900">
            Why Businesses Trust Us
          </h3>

          <p className="text-gray-600 mb-8 text-center text-sm sm:text-base">
            We combine trusted IT distribution, technical expertise,
            and result-driven digital marketing strategies to deliver
            measurable business growth and dependable long-term support.
          </p>

          <div className="grid grid-cols-2 gap-8 text-center">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">
                50+
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Projects Completed
              </p>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">
                100%
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">
                7+
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Core Service Areas
              </p>
            </div>

            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">
                24/7
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Technical Support
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs sm:text-sm text-gray-500">
            Supporting startups, local businesses, corporates & growing companies
            with professional IT distribution, laptop services, AMC support,
            and complete digital marketing solutions.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
