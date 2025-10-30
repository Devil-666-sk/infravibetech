"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Rocket } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section
      id="mission-vision"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-premium text-white overflow-hidden"
      aria-labelledby="mission-vision-heading"
    >
      {/* === Background Effects === */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

      {/* === Content === */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10 space-y-12">
        
        {/* === Animated Gradient Heading === */}
        <motion.h2
          id="mission-vision-heading"
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          initial={{ backgroundPositionX: "0%" }}
          animate={{ backgroundPositionX: "200%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(90deg,#00ffff,#3b82f6,#14b8a6,#00ffff)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Mission & Vision
        </motion.h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          At <span className="text-teal-400 font-semibold">InfraVibe Tech</span>, we’re driven by
          <span className="text-blue-400 font-medium"> innovation</span> and
          <span className="text-pink-400 font-medium"> creativity</span> — transforming businesses into strong digital brands that thrive in the modern world.
        </p>

        {/* === Mission & Vision Cards === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          
          {/* === Mission Card === */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl 
                       shadow-[0_0_60px_-10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_80px_-10px_rgba(59,130,246,0.6)] 
                       transition-all duration-500 hover:scale-[1.03] text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-400 shadow-md"
                role="img"
                aria-label="Mission icon"
              >
                <Target className="w-8 h-8 text-white" />
              </div>
              <motion.h3
                initial={{ backgroundPositionX: "0%" }}
                animate={{ backgroundPositionX: "200%" }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#00ffff,#3b82f6,#14b8a6,#00ffff)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className="text-2xl font-bold"
              >
                Our Mission
              </motion.h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower brands with
              <span className="text-blue-400 font-medium"> reliable IT services</span>,
              <span className="text-teal-400 font-medium"> digital innovation</span>, and
              <span className="text-pink-400 font-medium"> creative marketing solutions</span>.
              We simplify technology and deliver measurable growth for every client we work with.
            </p>
          </motion.article>

          {/* === Vision Card === */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl 
                       shadow-[0_0_60px_-10px_rgba(20,184,166,0.4)] hover:shadow-[0_0_80px_-10px_rgba(20,184,166,0.6)] 
                       transition-all duration-500 hover:scale-[1.03] text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="p-3 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 shadow-md"
                role="img"
                aria-label="Vision icon"
              >
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <motion.h3
                initial={{ backgroundPositionX: "0%" }}
                animate={{ backgroundPositionX: "200%" }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#00ffff,#3b82f6,#14b8a6,#00ffff)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                className="text-2xl font-bold"
              >
                Our Vision
              </motion.h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Our vision is to become a global leader in
              <span className="text-green-400 font-medium"> digital transformation</span> and
              <span className="text-blue-400 font-medium"> smart IT solutions</span> — blending creativity and technology to build sustainable, future-ready businesses.
            </p>
          </motion.article>
        </div>

        {/* === Highlight / CTA Section === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 max-w-3xl p-10 rounded-3xl bg-gradient-to-r from-blue-600/30 to-teal-400/30 border border-white/10 backdrop-blur-2xl text-center shadow-[0_0_70px_-10px_rgba(45,212,191,0.4)]"
        >
          <div className="flex justify-center mb-4" role="img" aria-label="Rocket icon">
            <Rocket className="w-10 h-10 text-teal-300" />
          </div>
          <motion.h4
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "200%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(90deg,#00ffff,#3b82f6,#14b8a6,#00ffff)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-2xl font-semibold mb-3"
          >
            Driving Digital Empowerment
          </motion.h4>
          <p className="text-gray-300">
            We believe innovation fuels progress. Every InfraVibe Tech project is designed to deliver
            <span className="text-teal-400 font-medium"> scalability</span>,
            <span className="text-blue-400 font-medium"> efficiency</span>, and
            <span className="text-pink-400 font-medium"> measurable digital growth</span> for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
