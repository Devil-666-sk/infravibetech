"use client";

import { Target, Eye, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVisionSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Building the Future of Digital & Technical Growth
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          InfraVibe Tech helps businesses grow with professional website development,
          result-driven digital marketing, and dependable laptop & hardware services — 
          ensuring smooth operations and strong online presence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-4 rounded-2xl group-hover:scale-110 transition">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to empower small and growing businesses with modern digital
            solutions and reliable technical support. We design high-performance websites,
            improve search engine visibility, run result-focused marketing campaigns,
            and deliver professional laptop & PC services that businesses can trust.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We focus on transparency, quality, and long-term partnerships — helping our
            clients build a strong brand presence and operate with confidence in the
            digital era.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="group bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-4 rounded-2xl group-hover:scale-110 transition">
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Our vision is to become a trusted technology partner for businesses across
            India by delivering innovative digital strategies and dependable technical
            solutions under one roof.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We aim to bridge the gap between technology and business growth — making
            professional digital services, online branding, and technical support
            accessible, affordable, and reliable for every business size.
          </p>
        </motion.div>
      </div>

      {/* TRUST STRIP */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
        <ShieldCheck className="w-5 h-5 text-green-600" />
        <span>Committed to long-term partnerships • Transparent process • Reliable support</span>
      </div>
    </section>
  );
}
