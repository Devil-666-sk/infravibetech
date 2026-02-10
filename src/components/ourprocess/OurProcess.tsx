"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  ClipboardList,
  Lightbulb,
  Settings,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    color: "from-blue-600 to-cyan-500",
    title: "1. You Contact Us",
    desc: "Reach us via call, WhatsApp, or website and share your requirement — laptop issue, system problem, upgrade need, or digital service for your business.",
  },
  {
    icon: ClipboardList,
    color: "from-teal-600 to-emerald-500",
    title: "2. Requirement Analysis",
    desc: "We understand your technical issue or business goal in detail — checking devices, systems, or digital needs to identify the right solution.",
  },
  {
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
    title: "3. Best Solution & Pricing",
    desc: "We recommend the most effective technical fix, system upgrade, or digital solution with clear explanation and transparent pricing.",
  },
  {
    icon: Settings,
    color: "from-pink-600 to-rose-500",
    title: "4. Work Execution",
    desc: "Our team starts professional work — repairing systems, upgrading devices, or building your digital presence — with focus on quality and timely delivery.",
  },
  {
    icon: Rocket,
    color: "from-emerald-600 to-teal-500",
    title: "5. Delivery, Setup & Launch",
    desc: "We complete the service, test everything properly, and ensure your device, system, website, or marketing setup runs smoothly.",
  },
  {
    icon: Headphones,
    color: "from-cyan-600 to-blue-500",
    title: "6. Support Until Satisfaction",
    desc: "We stay connected for after-service support, system guidance, and digital improvements until you are fully satisfied.",
  },
];

export default function OurProcess() {
  return (
    <section
      id="our-process"
      className="relative w-full py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto text-center z-10">
        
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6"
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
          Our Proven Technical & Digital Work Process
        </motion.h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
          A simple, transparent, and professional workflow focused on strong
          technical solutions — supported by complete digital services — from
          first contact to final delivery and long-term support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-3xl p-8
                           shadow-lg hover:shadow-xl transition-all duration-300
                           hover:-translate-y-2 text-left group"
              >
                <div className="flex items-center gap-4 mb-4">
                  
                  {/* 🔥 FIXED ICON VISIBILITY */}
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} shadow-md`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-base leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

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
                       bg-gradient-to-r from-blue-600 to-teal-500 text-white
                       shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Let’s Start Your Project 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}
