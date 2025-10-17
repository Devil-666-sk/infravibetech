"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/logo.png"; // apna image daal lena (e.g. /assets/hero.png)

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 overflow-hidden"
    >
      {/* ---------- Left Side Content ---------- */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
          <span className="block bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 text-transparent bg-clip-text">
            Empower Your Business
          </span>
          <span className="block text-gray-800 dark:text-white mt-2">
            with <span className="text-green-500">InfraVibe Tech</span>
          </span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          We craft modern digital experiences — from innovative websites to
          smart software and marketing solutions — helping brands scale faster
          in the digital world.
        </p>

        <div className="flex gap-5">
          <Link
            href="/projects"
            className="px-6 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 shadow-[0_0_25px_rgba(0,180,150,0.35)] hover:shadow-[0_0_40px_rgba(0,180,150,0.55)] transition-all duration-300"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 font-semibold rounded-xl border border-teal-400 text-teal-600 hover:bg-teal-50 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>

      {/* ---------- Right Side Image ---------- */}
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex-1 relative flex justify-center mb-12 md:mb-0"
      >
        {/* Glow Background */}
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-300 via-green-200 to-teal-300 blur-[120px] opacity-60 rounded-full -z-10" />
        <Image
          src={heroImage}
          alt="InfraVibe Tech Digital Solutions"
          width={500}
          height={500}
          className="rounded-2xl drop-shadow-2xl object-contain"
          priority
        />
      </motion.div>
    </section>
  );
}
