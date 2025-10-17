"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Users, Cpu } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
    title: "Trusted & Reliable",
    desc: "Our clients trust us for consistent quality, transparency, and next-level execution in every project.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-sky-400" />,
    title: "Cutting-Edge Solutions",
    desc: "We bring future-ready digital innovation — fast, optimized, and scalable for your business.",
  },
  {
    icon: <Users className="w-8 h-8 text-teal-400" />,
    title: "Client-First Approach",
    desc: "We believe in building relationships, not just websites. Every project is a collaboration of ideas.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-400" />,
    title: "Technology Expertise",
    desc: "With a passionate team of developers and designers, we craft powerful digital experiences that perform.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-premium overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-green-400/10 to-transparent blur-3xl animate-pulse" />

      {/* Floating Orbs for premium aura */}
      <motion.div
        className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto text-center space-y-14">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {/* Animated gradient heading (same as Hero section) */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold leading-tight"
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
            Why Choose <span className="text-white">InfraVibe Tech</span>?
          </motion.h2>

          {/* Gradient underline accent */}
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Because we don’t just build websites — we create experiences that connect, convert, and captivate.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl backdrop-blur-2xl bg-white/10 
                         border border-white/20 hover:border-white/30 transition-all duration-500
                         hover:scale-[1.05] shadow-[0_0_25px_rgba(56,189,248,0.2)]
                         hover:shadow-[0_0_45px_rgba(56,189,248,0.35)]
                         flex flex-col items-center text-center overflow-hidden"
            >
              {/* Hover Aura */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 blur-2xl"
                transition={{ duration: 0.6 }}
              />

              {/* Card Content */}
              <div className="relative flex flex-col items-center space-y-4 z-10">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-inner"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-[90%]">
                  {item.desc}
                </p>
              </div>

              {/* Bottom gradient line hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
