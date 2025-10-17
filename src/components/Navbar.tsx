"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 w-full z-50 
                 bg-transparent backdrop-blur-xl border-b border-white/10 
                 shadow-[0_0_25px_rgba(0,200,130,0.2)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 md:px-8">

        {/* ---------- LEFT: Logo + Brand ---------- */}
        <Link
          href="/"
          className="relative flex items-center space-x-3 group cursor-pointer"
        >
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 blur-lg opacity-40 group-hover:opacity-70 transition-all duration-500"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />

          <div className="relative w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_0_20px_rgba(0,200,130,0.35)] flex items-center justify-center overflow-hidden">
            <Image
              src={logo}
              alt="InfraVibe Tech Logo"
              width={38}
              height={38}
              className="rounded-full z-10 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline space-x-1">
              <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 tracking-wide group-hover:brightness-125">
                InfraVibe
              </h1>
              <span className="text-sm font-semibold text-gray-200">Tech</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium">
              Empowering Businesses Digitally
            </p>
          </div>
        </Link>

        {/* ---------- RIGHT: Desktop Menu ---------- */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-3 py-1.5 rounded-md transition-all duration-300 group ${
                  isActive
                    ? "text-white bg-gradient-to-r from-green-400/20 to-blue-400/20 shadow-[0_0_15px_rgba(0,200,150,0.3)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-green-300/10 to-blue-300/10 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"
                />
                <motion.span
                  layoutId={isActive ? "underline" : undefined}
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 group-hover:w-full opacity-80"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="relative overflow-hidden group inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-white
            bg-gradient-to-r from-green-400 via-blue-400 to-teal-400
            shadow-[0_0_20px_rgba(0,200,150,0.4)]
            hover:shadow-[0_0_35px_rgba(0,200,150,0.6)]
            transition-all duration-300 ml-2 text-sm tracking-wide"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              Get Quote
            </span>
          </Link>
        </div>

        {/* ---------- Mobile Toggle ---------- */}
        <div className="lg:hidden flex items-center">
          <button
            aria-label="Menu Toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-12 h-12 flex items-center justify-center 
                       rounded-2xl backdrop-blur-md border border-white/10 
                       bg-white/5 shadow-[0_0_20px_rgba(0,200,150,0.25)]
                       hover:shadow-[0_0_35px_rgba(0,200,150,0.4)] 
                       transition-all duration-300 group"
          >
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: -6 }}
              className="absolute w-6 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-300"
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-6 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 6 }}
              className="absolute w-6 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-300"
            />
          </button>
        </div>
      </div>

      {/* ---------- Mobile Menu ---------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden absolute top-[70px] left-0 w-full 
                       bg-white text-gray-900 backdrop-blur-xl
                       border-t border-gray-200 shadow-[0_0_25px_rgba(0,0,0,0.1)]
                       rounded-b-3xl overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
              {navLinks.map((item, index) => {
                const isActive = pathname === item.path;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`px-3 py-1.5 rounded-md transition-all duration-300 ${
                        isActive
                          ? "text-white bg-gradient-to-r from-green-400 to-blue-400"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-5 py-2 text-white bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 shadow-[0_0_30px_rgba(0,200,150,0.4)] text-sm font-semibold"
                >
                  Get Quote
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
