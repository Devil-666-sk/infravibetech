"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-white overflow-hidden"
      aria-labelledby="mission-vision-heading"
    >
      {/* Softer Background Glow */}
      <div className="absolute top-0 left-0 w-[22rem] h-[22rem] bg-blue-500/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-teal-400/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10 space-y-12">
        
        {/* Heading */}
        <h2
          id="mission-vision-heading"
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
        >
          Our Mission & Vision
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          At <span className="text-teal-400 font-semibold">InfraVibe Tech</span>, we blend
          <span className="text-blue-400"> technology</span> and
          <span className="text-pink-400"> creativity</span> to help businesses grow digitally and technically in today’s fast-moving world.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          
          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl
                       shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 shadow-md">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400">Our Mission</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              To empower businesses with
              <span className="text-blue-400 font-medium"> reliable IT solutions</span>,
              <span className="text-teal-400 font-medium"> digital innovation</span>, and
              <span className="text-pink-400 font-medium"> performance-driven marketing</span>,
              making technology simple and growth measurable.
            </p>
          </motion.article>

          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl
                       shadow-lg hover:shadow-teal-400/20 transition-all duration-300 hover:-translate-y-2 text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-blue-600 shadow-md">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-teal-400">Our Vision</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              To become a trusted leader in
              <span className="text-green-400 font-medium"> digital transformation</span> and
              <span className="text-blue-400 font-medium"> smart technical services</span>,
              helping brands build future-ready and sustainable business ecosystems.
            </p>
          </motion.article>
        </div>

        {/* Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl p-10 rounded-3xl bg-gradient-to-r from-blue-600/20 to-teal-400/20 border border-white/10 backdrop-blur-xl shadow-xl"
        >
          <div className="flex justify-center mb-4">
            <Rocket className="w-10 h-10 text-teal-300" />
          </div>
          <h4 className="text-2xl font-semibold mb-3 text-cyan-300">
            Driving Digital Empowerment
          </h4>
          <p className="text-gray-300">
            Every InfraVibe Tech project is crafted to deliver
            <span className="text-teal-400 font-medium"> scalability</span>,
            <span className="text-blue-400 font-medium"> efficiency</span>, and
            <span className="text-pink-400 font-medium"> measurable business growth</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
