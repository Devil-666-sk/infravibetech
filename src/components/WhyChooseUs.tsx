"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Rocket, Users, Cpu } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-emerald-400" />,
    title: "Trusted & Reliable",
    desc: "We deliver excellence with transparency, ensuring clients rely on us for consistent quality and trust-driven partnerships.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-blue-400" />,
    title: "Innovative Solutions",
    desc: "We think beyond limits — offering cutting-edge strategies and digital solutions that help your business grow faster.",
  },
  {
    icon: <Users className="w-10 h-10 text-pink-400" />,
    title: "Client-Centric Approach",
    desc: "Your success is our priority. We focus on your goals, ensuring every project is crafted to meet your vision and audience needs.",
  },
  {
    icon: <Cpu className="w-10 h-10 text-yellow-400" />,
    title: "Advanced Technology",
    desc: "Leveraging the latest tech stacks and trends to build fast, secure, and scalable digital experiences for modern businesses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-premium relative w-full text-white py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* ==== Gradient Heading ==== */}
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
          Why <span className="text-white">Choose Us</span>
        </motion.h2>

        {/* Underline */}
        <div className="w-24 h-1 mx-auto mt-3 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Discover what makes InfraVibe Tech the perfect partner for your digital success —
          innovation, reliability, and customer-first focus in every step.
        </p>

        {/* ==== Responsive Cards Grid ==== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==== Feature Card Component ==== */
const FeatureCard = ({ feature }: any) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="group bg-white/10 border border-white/10 rounded-2xl p-6 
               cursor-pointer backdrop-blur-xl 
               hover:bg-white/20 hover:border-teal-400/30 transition-all duration-300
               shadow-lg hover:shadow-teal-500/30 text-center"
  >
    <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
      {feature.icon}
    </div>

    <motion.h3
      className="text-lg font-semibold mb-2 leading-snug"
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
      {feature.title}
    </motion.h3>

    <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>

    <motion.div
      className="h-[2px] w-0 group-hover:w-full mx-auto mt-4 bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 transition-all duration-500"
    />
  </motion.div>
);
