"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Cloud, Cpu } from "lucide-react";
import heroImg from "@/assets/hero.webp";

export default function HomeSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center 
                 min-h-screen px-6 md:px-16 overflow-hidden bg-premium text-white
                 pt-[120px] md:pt-[140px] pb-20 mt-15"
    >
      {/* === Background Effects === */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-green-500/25 to-blue-600/25 rounded-full blur-3xl animate-pulse" />

      {/* === Content === */}
      <div
        className="relative z-10 flex flex-col md:flex-col lg:flex-row 
                   items-center justify-between w-full max-w-7xl gap-12 text-center lg:text-left"
      >
        {/* === Hero Image === */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px]">
            <div className="absolute -inset-6 bg-gradient-to-tr from-green-400/30 to-blue-600/30 
                            rounded-full blur-3xl animate-pulse" />
            <Image
              src={heroImg}
              alt="Infra VibeTech — Web Design, Marketing & IT Solutions"
              title="Infra VibeTech | Digital & Technical Services"
              className="relative rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* === Text Section === */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-2xl order-2 lg:order-1"
        >
          <motion.h1
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "200%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(90deg,#00ffff,#3b82f6,#00c49a,#00ffff)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md"
          >
            Build Smarter, Faster & Stronger with Infra VibeTech
          </motion.h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/85 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            At <strong>Infra VibeTech</strong>, we craft powerful{" "}
            <span className="text-green-300 font-semibold">
              digital and technical solutions
            </span>{" "}
            that empower your business — from web design and digital marketing
            to advanced IT infrastructure and reliable tech support.
          </p>

          {/* === CTA Buttons === */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              aria-label="Contact Infra VibeTech"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl 
                         font-semibold shadow-lg hover:shadow-xl hover:opacity-90 transition flex items-center gap-2"
            >
              Get a Free Quote <ArrowRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#services"
              aria-label="View Infra VibeTech Services"
              className="px-6 py-3 border border-white/30 rounded-xl font-semibold 
                         hover:bg-white/10 transition"
            >
              Explore Services
            </motion.a>
          </div>

          {/* === Highlights === */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
            {[
              {
                icon: <Cpu className="text-green-400" size={20} />,
                label: "AI-Powered Solutions",
              },
              {
                icon: <Cloud className="text-blue-400" size={20} />,
                label: "Cloud & Hosting",
              },
              {
                icon: <ShieldCheck className="text-emerald-400" size={20} />,
                label: "24/7 Tech Support",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-3 py-2 bg-white/10 rounded-xl backdrop-blur-md transition-all"
              >
                <div className="p-2 rounded-lg bg-white/10">{item.icon}</div>
                <span className="text-xs sm:text-sm text-white/70">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
