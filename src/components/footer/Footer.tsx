"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.webp";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://www.facebook.com/share/1DQcUzi9PP/",
      icon: <Facebook className="w-5 h-5" />,
      bg: "bg-[#1877F2]",
      hover: "hover:shadow-[0_0_15px_#1877F2]",
    },
    {
      href: "https://www.instagram.com/infra_vibe_tech/",
      icon: <Instagram className="w-5 h-5" />,
      bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      hover: "hover:shadow-[0_0_15px_#DD2A7B]",
    },
    {
      href: "https://www.linkedin.com/company/infravibe-tech/",
      icon: <Linkedin className="w-5 h-5" />,
      bg: "bg-[#0A66C2]",
      hover: "hover:shadow-[0_0_15px_#0A66C2]",
    },
    {
      href: "https://www.youtube.com/@infravibetech",
      icon: <Youtube className="w-5 h-5" />,
      bg: "bg-[#FF0000]",
      hover: "hover:shadow-[0_0_15px_#FF0000]",
    },
  ];

  return (
    <footer className="relative bg-premium text-white pt-10 pb-6 px-6 sm:px-10 border-t border-white/10 overflow-hidden">
      {/* === Background Glow === */}
      <div className="absolute top-0 left-0 w-[14rem] h-[14rem] bg-gradient-to-r from-blue-500/15 to-teal-400/15 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[18rem] h-[18rem] bg-gradient-to-l from-teal-400/15 to-blue-500/15 blur-[100px] rounded-full"></div>

      {/* === Main Content === */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10 text-center sm:text-left">
        {/* === Logo & About === */}
        <div className="space-y-3 flex flex-col items-center sm:items-start">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Image
              src={logo}
              alt="Infra VibeTech Logo"
              width={50}
              height={50}
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
              className="text-xl sm:text-2xl font-extrabold tracking-wide"
            >
              Infra VibeTech
            </motion.h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            We design and digitally transform businesses through innovative
            websites, SEO, and marketing solutions.
          </p>
        </div>

        {/* === Quick Links === */}
        <div className="space-y-3">
          <motion.h4
            className="text-lg font-semibold"
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
            Quick Links
          </motion.h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            {["Home", "About Us", "Services", "Contact"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-teal-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* === Contact Info === */}
        <div className="space-y-3">
          <motion.h4
            className="text-lg font-semibold"
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
            Contact
          </motion.h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400" />
              <a
                href="mailto:info@infravibetech.com"
                className="hover:text-teal-400"
              >
                info@infravibetech.com
              </a>
            </li>
            <li className="flex justify-center sm:justify-start items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400" />
              <a href="tel:+917860225993" className="hover:text-teal-400">
                +91 78602 25993
              </a>
            </li>
            <li className="flex justify-center sm:justify-start items-start gap-2">
              <MapPin className="w-4 h-4 text-teal-400 mt-0.5" />
              <p className="max-w-[180px] sm:max-w-none">
                Sunder Nagar Colony, Bhankharpur, Punjab – 140201
              </p>
            </li>
          </ul>
        </div>

        {/* === Follow Us === */}
        <div className="space-y-3">
          <motion.h4
            className="text-lg font-semibold"
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
            Follow Us
          </motion.h4>
          <p className="text-gray-300 text-sm">
            Stay connected with InfraVibe for updates and digital tips.
          </p>
          <div className="flex justify-center sm:justify-start gap-3">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-full text-white transition-all duration-300 ${item.bg} ${item.hover}`}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* === Bottom Bar === */}
      <div className="relative mt-6 border-t border-white/10 pt-3 text-center">
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Infra VibeTech
          </span>{" "}
          — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
