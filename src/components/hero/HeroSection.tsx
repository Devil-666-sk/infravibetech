"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="order-1 md:order-1 animate-fadeInUp">
          <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide">
            Complete IT & Digital Business Solutions
          </p>

          {/* ✅ Animated Line */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
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
            One Partner For All Your
            <span className="block text-blue-600">
              Tech & Marketing Needs
            </span>
          </motion.h1>

          <p className="text-gray-600 text-lg mb-8">
            InfraVibeTech helps businesses with IT support, laptop sales, repairs, 
            AMC services, and powerful digital marketing to generate leads and growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
            >
              View All Services
            </a>

            <a
              href="tel:7860225993"
              className="px-8 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              Talk to Expert
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>✔ Fast Technical Support</span>
            <span>✔ Business-Focused Solutions</span>
            <span>✔ Free Demo Checkup</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="order-2 md:order-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 animate-fadeInUp">
          
          {/* ✅ Animated Services Heading */}
          <motion.h3
            className="text-xl font-semibold mb-6"
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
            Our Professional Services
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm">

            <div>
              <p className="font-semibold text-gray-800 mb-2">🛠 Technical Services</p>
              <ul className="space-y-1">
                <li>• Laptop & PC Repair</li>
                <li>• Printer Repair</li>
                <li>• AMC (Annual Maintenance)</li>
                <li>• Technical Support</li>
                <li>• On-Call IT Support</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-2">💻 Sales Services</p>
              <ul className="space-y-1">
                <li>• New Laptop & PC Sales</li>
                <li>• Printer Sales</li>
                <li>• Refurbished Laptops & PC</li>
                <li>• Computer on Rent</li>
              </ul>
            </div>

            <div className="sm:col-span-2">
              <p className="font-semibold text-gray-800 mb-2">🌐 Digital Marketing</p>
              <ul className="space-y-1 sm:grid sm:grid-cols-2 sm:gap-1">
                <li>• Website Design & Development</li>
                <li>• SEO Optimization (On & Off Page)</li>
                <li>• Social Media Marketing</li>
                <li>• Lead Generation Campaigns</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
