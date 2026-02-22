"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WebDesignDevelopmentService() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Website Design & Development Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We design and develop high-performance websites that
          generate leads, build trust and grow your business online.
        </p>
      </motion.div>

      {/* REAL WORK SHOWCASE */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">

        {[
          {
            title: "Corporate Business Website",
            img: "/work/work1.jpg",
            desc: "Modern website for IT & service company with lead forms and WhatsApp integration.",
          },
          {
            title: "E-Commerce Website",
            img: "/work/work2.jpg",
            desc: "Online store with payment gateway, product management & admin dashboard.",
          },
          {
            title: "High-Converting Landing Page",
            img: "/work/work3.jpg",
            desc: "Sales focused landing page built for ad campaigns & lead generation.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative group">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-3xl text-center mb-20"
      >
        <h3 className="text-3xl font-semibold mb-8">
          Why Businesses Choose InfraVibe Tech
        </h3>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <div>✔ Fast Loading Speed</div>
          <div>✔ SEO Optimized Structure</div>
          <div>✔ Mobile Responsive Design</div>
          <div>✔ Conversion Focused Layout</div>
          <div>✔ WhatsApp & Call Integration</div>
          <div>✔ Ongoing Technical Support</div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-3xl font-semibold mb-6">
          Ready to Launch Your Website?
        </h3>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Free Consultation
          </Link>

          <a
            href="tel:7860225993"
            className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Call Now
          </a>
        </div>
      </motion.div>

    </section>
  );
}
