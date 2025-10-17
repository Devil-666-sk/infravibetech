"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "@/assets/logo.png"; // Replace with your real InfraVibe image

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-premium text-white overflow-hidden"
    >
      {/* === Gradient Glow Background === */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 z-10">
        {/* === Left: About Image === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_0_60px_-10px_rgba(45,212,191,0.5)] overflow-hidden group">
            <Image
              src={aboutImg}
              alt="About InfraVibe Tech"
              fill
              className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/10 via-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
        </motion.div>

        {/* === Right: About Content === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6"
        >
          {/* === Animated Gradient Heading === */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
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
            About <span className="text-white">InfraVibe Tech</span>
          </motion.h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
            <span className="text-teal-400 font-semibold">InfraVibe Tech</span>{" "}
            is a future-ready digital innovation agency committed to empowering
            brands through <span className="text-blue-400 font-medium">technology</span>,
            <span className="text-pink-400 font-medium"> creativity</span>, and{" "}
            <span className="text-green-400 font-medium">strategy</span>.  
            We build scalable, modern, and visually striking digital experiences
            that drive impact and elevate online presence.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
            Our passionate experts fuse design and technology to deliver
            high-performance websites, marketing solutions, and IT services that
            keep your business ahead in a fast-changing digital world.
          </p>

          <motion.a
            href="/about"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block mt-4 px-8 py-3 rounded-xl font-semibold text-white 
                       bg-gradient-to-r from-blue-500 to-teal-400 
                       shadow-[0_0_25px_rgba(45,212,191,0.4)] 
                       hover:shadow-[0_0_45px_rgba(45,212,191,0.6)] 
                       transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
