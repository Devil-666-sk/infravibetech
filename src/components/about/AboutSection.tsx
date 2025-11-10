"use client";

import { motion } from "framer-motion";
import { Users, HeartHandshake, Cpu } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-premium text-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* === Background Effects === */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

      {/* === Content === */}
      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center z-10 space-y-12">
        
        {/* === Animated Gradient Heading === */}
        <motion.h2
          id="about-heading"
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
          About Infra VibeTech
        </motion.h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
          We are a team of passionate innovators at <span className="text-teal-400 font-semibold">Infra VibeTech</span>, dedicated to delivering <span className="text-blue-400 font-medium">modern IT solutions</span> and <span className="text-pink-400 font-medium">creative digital experiences</span> that empower businesses to grow, connect, and succeed in today’s digital era.
        </p>

        {/* === About Cards === */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
        >
          {/* === Card 1 === */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_0_60px_-10px_rgba(59,130,246,0.4)] hover:shadow-[0_0_80px_-10px_rgba(59,130,246,0.6)] transition-all duration-500 hover:scale-[1.03] text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-400 shadow-md">
                <Users className="w-8 h-8 text-white" />
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
                Who We Are
              </motion.h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A team of creative developers, designers, and digital experts united by a shared mission — to transform ideas into impactful digital realities.
            </p>
          </motion.article>

          {/* === Card 2 === */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_0_60px_-10px_rgba(20,184,166,0.4)] hover:shadow-[0_0_80px_-10px_rgba(20,184,166,0.6)] transition-all duration-500 hover:scale-[1.03] text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-teal-400 to-blue-500 shadow-md">
                <HeartHandshake className="w-8 h-8 text-white" />
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
                What We Do
              </motion.h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We specialize in IT infrastructure, web design, digital marketing, and creative branding — crafting smart, scalable solutions tailored to your goals.
            </p>
          </motion.article>

          {/* === Card 3 === */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1 md:mx-auto p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_0_60px_-10px_rgba(234,88,12,0.4)] hover:shadow-[0_0_80px_-10px_rgba(234,88,12,0.6)] transition-all duration-500 hover:scale-[1.03] text-left group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 shadow-md">
                <Cpu className="w-8 h-8 text-white" />
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
                Our Approach
              </motion.h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We merge creativity with technology, using cutting-edge tools and strategies to help your business grow, evolve, and lead in the digital landscape.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
