"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/logo.png";
import {
  Cpu,
  Cloud,
  Rocket,
  MonitorSmartphone,
  LineChart,
  Wrench,
  Share2,
  Network,
  MousePointer2,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center 
                 bg-premium text-white overflow-hidden 
                 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 2xl:px-64 
                 py-24 md:py-28 lg:py-32 xl:py-36"
    >
      {/* ==== Floating Glow Orbs ==== */}
      <div className="absolute -top-20 left-0 w-96 h-96 bg-blue-500/30 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-teal-400/25 blur-[150px] rounded-full"></div>

      {/* ==== Subtle Tech Grid ==== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e223a_1px,transparent_1px),linear-gradient(to_bottom,#0e223a_1px,transparent_1px)] bg-[size:60px_60px] opacity-15"></div>

      {/* ==== Floating Tech Icons ==== */}
      <motion.div
        className="absolute top-20 left-10 text-teal-400/70"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Cpu size={32} />
      </motion.div>
      <motion.div
        className="absolute top-[25%] right-14 text-blue-400/70"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Cloud size={34} />
      </motion.div>
      <motion.div
        className="absolute bottom-28 left-[40%] text-cyan-400/70"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6.5, repeat: Infinity }}
      >
        <Rocket size={36} />
      </motion.div>
      <motion.div
        className="absolute top-[45%] left-10 text-indigo-400/70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <MonitorSmartphone size={34} />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-[35%] text-pink-400/70"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <LineChart size={32} />
      </motion.div>
      <motion.div
        className="absolute top-[30%] left-[60%] text-green-400/70"
        animate={{ y: [0, -22, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      >
        <Wrench size={32} />
      </motion.div>
      <motion.div
        className="absolute bottom-[25%] right-10 text-sky-400/70"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8.5, repeat: Infinity }}
      >
        <Share2 size={34} />
      </motion.div>
      <motion.div
        className="absolute top-[15%] right-[40%] text-teal-300/70"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Network size={32} />
      </motion.div>

      {/* ==== Left Content ==== */}
      <motion.div
        className="z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left 
                   space-y-6 justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={{ backgroundPositionX: "0%" }}
          animate={{ backgroundPositionX: "200%" }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "linear-gradient(90deg, #00c896, #3b82f6, #00b874, #00c896)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Empowering <br className="hidden sm:block" />
          <span className="brand-accent">Digital Growth</span>
        </motion.h1>

        <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
          At <span className="brand-accent">InfraVibe Tech</span>, we transform
          your business through{" "}
          <span className="text-blue-400 font-medium">modern design</span>,{" "}
          <span className="text-pink-400 font-medium">digital strategy</span>,{" "}
          and{" "}
          <span className="text-green-400 font-medium">smart automation</span>.
          Let’s build a digital experience that performs as great as it looks.
        </p>

        {/* ==== CTA Buttons ==== */}
        <div className="w-full flex flex-col justify-center items-center gap-4 pt-4 md:pt-6 lg:flex-row lg:justify-start lg:items-center">
          <Link
            href="#services"
            className="btn btn-primary w-full sm:w-auto md:w-full lg:w-auto sm:px-8 sm:py-3"
          >
            Explore Services
          </Link>

          <Link
            href="https://wa.me/917860225993?text=Hi%20InfraVibe%20Tech%2C%20I%20want%20to%20know%20more!"
            target="_blank"
            className="btn btn-outline w-full sm:w-auto md:w-full lg:w-auto sm:px-8 sm:py-3"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      {/* ==== Right Image ==== */}
      <motion.div
        className="z-10 flex-1 flex justify-center md:justify-end items-center mb-14 sm:mb-16 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[420px] 
                        rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 
                        shadow-[0_0_70px_-10px_rgba(0,200,130,0.4)] overflow-hidden">
          <Image
            src={heroImg}
            alt="InfraVibe Tech Illustration"
            fill
            className="object-contain p-6 md:p-8 lg:p-10"
          />
        </div>
      </motion.div>

      {/* ==== Scroll Down Indicator ==== */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MousePointer2 className="w-6 h-6 animate-pulse" />
      </motion.div>
    </section>
  );
}
