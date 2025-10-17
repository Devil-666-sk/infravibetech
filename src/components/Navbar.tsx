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
                 backdrop-blur-lg bg-white/40 
                 border-b border-black/5 shadow-[0_0_20px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 md:px-8">
        
        {/* ---------- LEFT: Logo + Brand ---------- */}
        <Link
          href="/"
          className="relative flex items-center space-x-3 group cursor-pointer"
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-300 via-green-300 to-teal-300 blur-xl opacity-40 group-hover:opacity-70 transition-all duration-500"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
          {/* Logo */}
          <div className="relative w-12 h-12 rounded-full bg-white/70 backdrop-blur-md shadow-[0_0_10px_rgba(0,180,150,0.25)] overflow-hidden flex items-center justify-center">
            <Image
              src={logo}
              alt="InfraVibe Tech Logo"
              width={38}
              height={38}
              className="rounded-full z-10 transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col leading-tight">
            <div className="flex items-baseline space-x-1">
              <h1 className="text-2xl font-extrabold text-transparent bg-clip-text tracking-wide group-hover:brightness-125">
                InfraVibe
              </h1>
              <span className="text-sm font-semibold text-gray-700">Tech</span>
            </div>
            <p className="text-[10px] text-gray-600 font-medium">
              Empowering Businesses Digitally
            </p>
          </div>
        </Link>

        {/* ---------- RIGHT: Menu + Button ---------- */}
        <div className="hidden lg:flex items-center space-x-10 text-base font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative px-3 py-1.5 rounded-md transition-all duration-300 group ${
                  isActive
                    ? "text-black bg-gradient-to-r from-green-100/60 to-blue-100/40 shadow-[0_0_15px_rgba(0,185,120,0.3)]"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span
                  className="absolute inset-0 rounded-md bg-gradient-to-r from-green-300/30 to-blue-300/30 opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"
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

          {/* Button */}
          <Link
            href="/contact"
            className="relative overflow-hidden group inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-white
            bg-gradient-to-r from-blue-500 via-teal-400 to-green-400
            shadow-[0_0_25px_rgba(0,180,150,0.35)]
            hover:shadow-[0_0_40px_rgba(0,180,150,0.55)]
            transition-all duration-300 ml-4"
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
                       rounded-2xl backdrop-blur-xl border border-white/20 
                       bg-gradient-to-br from-white/60 to-white/30 shadow-[0_0_15px_rgba(0,0,0,0.15)]
                       hover:shadow-[0_0_30px_rgba(0,200,255,0.3)] 
                       transition-all duration-300 group"
          >
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: -6 }}
              className="absolute w-6 h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-300"
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-6 h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 6 }}
              className="absolute w-6 h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full transition-all duration-300"
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
                       bg-white/80 backdrop-blur-2xl border-t border-black/10 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
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
                      className={`text-gray-800 hover:text-black ${
                        isActive
                          ? "text-black bg-green-100/60 px-3 py-1.5 rounded-md"
                          : ""
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
                  className="rounded-xl px-6 py-2 text-white bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 shadow-[0_0_25px_rgba(0,180,150,0.35)]"
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
