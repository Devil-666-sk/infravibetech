"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  Share2,
  Code,
  BarChart3,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: <Globe className="w-10 h-10 text-blue-400" />,
    title: "1. Business Understanding",
    desc: "We start by analyzing your business goals, target audience, and competition to plan the perfect digital strategy for your brand.",
  },
  {
    icon: <Code className="w-10 h-10 text-teal-400" />,
    title: "2. Custom Website Development",
    desc: "Our team builds fully customized websites using React & Next.js — modern, fast, and SEO-ready designs tailored to your brand.",
  },
  {
    icon: <Share2 className="w-10 h-10 text-pink-400" />,
    title: "3. Social Media Setup & Optimization",
    desc: "We create and optimize your Facebook, Instagram, LinkedIn, and Google Business profiles with professional branding and content strategy.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-yellow-400" />,
    title: "4. Digital Marketing & SEO Growth",
    desc: "Through result-driven SEO and digital marketing campaigns, we increase your reach, engagement, and conversions effectively.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-emerald-400" />,
    title: "5. Launch & Brand Acceleration",
    desc: "Once your online presence is ready, we push your brand live — combining ads, analytics, and automation for long-term growth.",
  },
  {
    icon: <Headphones className="w-10 h-10 text-cyan-400" />,
    title: "6. Continuous Support & Maintenance",
    desc: "Our journey doesn’t stop after launch — we provide ongoing updates, security checks, and marketing support to keep your business thriving.",
  },
];

export default function OurProcess() {
  return (
    <section
      id="our-process"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-premium text-white overflow-hidden"
    >
      {/* === Gradient Glow Background === */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

      {/* === Content === */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* === Animated Gradient Heading === */}
        <motion.h2
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
          Our Process – From Offline to Online
        </motion.h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
          At <span className="text-teal-400 font-semibold">InfraVibe Tech</span>, 
          we combine technology, design, and marketing to take your business from 
          <span className="text-blue-400 font-medium"> offline </span>
          to a <span className="text-pink-400 font-medium">powerful online presence</span> — 
          with full support at every step.
        </p>

        {/* === Process Steps === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl 
                         shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_45px_-5px_rgba(59,130,246,0.6)] 
                         transition-all duration-500 hover:scale-[1.03] text-left group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-teal-400 shadow-md">
                  {step.icon}
                </div>

                {/* Animated Gradient Title */}
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
                  className="text-xl font-semibold"
                >
                  {step.title}
                </motion.h3>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* === CTA === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-lg font-semibold rounded-xl 
                       bg-gradient-to-r from-blue-500 to-teal-400 text-white 
                       shadow-[0_0_25px_rgba(45,212,191,0.4)] 
                       hover:shadow-[0_0_45px_rgba(45,212,191,0.6)] 
                       transition-all duration-300"
          >
            Start Your Digital Journey 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}
