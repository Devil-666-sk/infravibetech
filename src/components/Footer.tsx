"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-premium text-white pt-10 pb-4 px-6 md:px-12 lg:px-20 border-t border-white/10 overflow-hidden">
      {/* === Background Glow === */}
      <div className="absolute top-0 left-0 w-[14rem] h-[14rem] bg-gradient-to-r from-blue-500/15 to-teal-400/15 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[18rem] h-[18rem] bg-gradient-to-l from-teal-400/15 to-blue-500/15 blur-[100px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

      {/* === Main Content === */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 z-10">
        {/* === Logo & About === */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src={logo}
              alt="InfraVibe Tech Logo"
              width={45}
              height={45}
              className="rounded-lg shadow-md"
            />
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
              className="text-lg font-bold"
            >
              InfraVibe Tech
            </motion.h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            We design and digitally transform businesses through innovative websites,
            SEO, and marketing solutions.
          </p>
        </div>

        {/* === Quick Links === */}
        <div className="space-y-3">
          <motion.h4
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
            className="text-lg font-semibold"
          >
            Quick Links
          </motion.h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-teal-400 transition cursor-pointer">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-400 transition cursor-pointer">About Us</Link></li>
            <li><Link href="/services" className="hover:text-teal-400 transition cursor-pointer">Services</Link></li>
            <li><Link href="/contact" className="hover:text-teal-400 transition cursor-pointer">Contact</Link></li>
          </ul>
        </div>

        {/* === Contact Info === */}
        <div className="space-y-3">
          <motion.h4
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
            className="text-lg font-semibold"
          >
            Contact
          </motion.h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400" />
              <a href="mailto:infravibetech@gmail.com" className="hover:text-teal-400 transition">
                infravibetech@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400" />
              <a href="tel:+917860225993" className="hover:text-teal-400 transition">
                +91 78602 25993
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-400 mt-0.5" />
              <p>Sunder Nagar Colony, Bhankharpur, Punjab – 140201</p>
            </li>
          </ul>
        </div>

        {/* === Follow Us === */}
        <div className="space-y-3">
          <motion.h4
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
            className="text-lg font-semibold"
          >
            Follow Us
          </motion.h4>
          <p className="text-gray-300 text-sm">
            Stay connected with InfraVibe for updates and digital tips.
          </p>
          <div className="flex gap-3">
            {[
              {
                href: "https://www.facebook.com/share/1DQcUzi9PP/",
                icon: <Facebook className="w-4 h-4" />,
                gradient: "from-blue-500 to-teal-400",
              },
              {
                href: "https://www.instagram.com/infravibetech/",
                icon: <Instagram className="w-4 h-4" />,
                gradient: "from-pink-500 to-orange-400",
              },
              {
                href: "https://www.linkedin.com/company/infravibe-tech/",
                icon: <Linkedin className="w-4 h-4" />,
                gradient: "from-blue-600 to-cyan-400",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  boxShadow: "0px 0px 15px rgba(0,255,255,0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 bg-white/10 rounded-full hover:bg-gradient-to-r ${item.gradient} transition-all duration-300 cursor-pointer`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="relative mt-4 border-t border-white/10 pt-3 text-center">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">InfraVibe Tech</span> — All Rights Reserved.
          <br />
          {/* <span className="text-teal-400">Made with ❤️ in Punjab, India</span> */}
        </p>
      </div>
    </footer>
  );
}
