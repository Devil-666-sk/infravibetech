// components/navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDigitalOpen, setMobileDigitalOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Automatically control dropdown based on route
  useEffect(() => {
    if (pathname.startsWith("/services")) {
      setServicesOpen(true);
    } else {
      setServicesOpen(false);
    }
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", dropdown: true },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const digitalServices = [
    { name: "Web Design & Development", path: "/services/web-development" },
    { name: "SEO Optimization", path: "/services/seo" },
    { name: "Social Media Management & Ads", path: "/services/social-media" },
    { name: "Lead Generation & Branding", path: "/services/branding" },
  ];

  const technicalServices = [
    { name: "Laptop & PC Repair", path: "/technical/laptop-repair" },
    { name: "New & Refurbished Laptop Sales", path: "/technical/sales" },
    { name: "Laptop on Rent", path: "/technical/laptop-rent" },
  ];

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_25px_rgba(0,200,150,0.15)]"
      aria-label="Infra VibeTech Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* === LOGO === */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Infra VibeTech Home">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(0,200,130,0.3)",
                "0 0 25px rgba(0,200,130,0.5)",
                "0 0 15px rgba(0,200,130,0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-11 h-11 rounded-full bg-white/10 border border-white/30 flex items-center justify-center overflow-hidden"
          >
            <Image
              src={logo}
              alt="Infra VibeTech Logo | Empowering Businesses Digitally & Technically"
              width={50}
              height={50}
              title="Infra VibeTech"
              priority
            />
          </motion.div>
          <div>
            <motion.h1 className="text-[18px] font-extrabold bg-gradient-to-r from-[#00ffae] via-[#00e0ff] to-[#0095ff] bg-clip-text text-transparent animate-gradient">
              Infra <span className="text-[#00e0ff]">VibeTech</span>
            </motion.h1>
            <p className="text-[10px] text-white/70">
              Empowering Businesses Digitally & Technically
            </p>
          </div>
        </Link>

        {/* === DESKTOP MENU === */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            if (link.dropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/service"
                    onClick={(e) => {
                      e.preventDefault();
                      setServicesOpen(!servicesOpen);
                      setTimeout(() => {
                        window.location.href = "/services";
                      }, 300);
                    }}
                    className="text-gray-200 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    {link.name}
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-xs"
                    >
                      ▼
                    </motion.span>
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-white/95 text-gray-900 backdrop-blur-md border border-gray-200 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] grid grid-cols-2 gap-4 p-5"
                      >
                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">
                            🌐 Digital Services
                          </h4>
                          {digitalServices.map((item) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              className="block text-sm text-gray-700 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-[#00ffae] hover:to-[#0095ff] transition-all duration-300 py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-800 mb-2 border-b border-gray-200 pb-1">
                            💻 Technical Services
                          </h4>
                          {technicalServices.map((item) => (
                            <Link
                              key={item.name}
                              href={item.path}
                              className="block text-sm text-gray-700 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-[#00ffae] hover:to-[#0095ff] transition-all duration-300 py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.path || "#"}
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-white font-semibold border-b-2 border-green-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00ffae] to-[#0095ff] text-white font-semibold shadow-md hover:scale-105 transition-all duration-300"
          >
            Get Quote
          </Link>
        </div>

        {/* === MOBILE MENU BUTTON === */}
        <button
          aria-label="Menu Toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-lg bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(0,200,130,0.3)]"
        >
          <motion.div
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: -6 }}
            className="absolute w-6 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
          />
          <motion.div
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-6 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 6 }}
            className="absolute w-6 h-[2px] bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
          />
        </button>
      </div>

      {/* === MOBILE MENU === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 text-gray-900 border-t border-gray-200 backdrop-blur-xl shadow-md"
          >
            <ul className="flex flex-col items-center py-6 gap-3 text-base font-medium">
              {navLinks.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="w-full text-center">
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex justify-center items-center w-full py-2 font-semibold text-gray-800"
                      >
                        {item.name}
                        <motion.span
                          animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-1 text-sm"
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {/* Digital Services */}
                            <button
                              onClick={() => setMobileDigitalOpen(!mobileDigitalOpen)}
                              className="flex justify-center w-full py-2 text-gray-700 font-medium"
                            >
                              🌐 Digital Services
                              <motion.span
                                animate={{ rotate: mobileDigitalOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-1 text-sm"
                              >
                                ▼
                              </motion.span>
                            </button>
                            <AnimatePresence>
                              {mobileDigitalOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="px-6"
                                >
                                  {digitalServices.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.path}
                                      onClick={() => setMenuOpen(false)}
                                      className="block text-sm text-gray-700 hover:text-green-600 py-1"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Technical Services */}
                            <button
                              onClick={() => setMobileTechOpen(!mobileTechOpen)}
                              className="flex justify-center w-full py-2 text-gray-700 font-medium"
                            >
                              💻 Technical Services
                              <motion.span
                                animate={{ rotate: mobileTechOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-1 text-sm"
                              >
                                ▼
                              </motion.span>
                            </button>
                            <AnimatePresence>
                              {mobileTechOpen && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="px-6"
                                >
                                  {technicalServices.map((sub) => (
                                    <Link
                                      key={sub.name}
                                      href={sub.path}
                                      onClick={() => setMenuOpen(false)}
                                      className="block text-sm text-gray-700 hover:text-green-600 py-1"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <li key={item.name}>
                    <Link
                      href={item.path || "#"}
                      onClick={() => setMenuOpen(false)}
                      className={`px-3 py-2 rounded-md transition-all duration-300 ${
                        pathname === item.path
                          ? "bg-gradient-to-r from-green-400 to-blue-400 text-white"
                          : "text-gray-700 hover:text-green-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-[#00ffae] to-[#0095ff] text-white font-semibold shadow-md hover:scale-105 transition-transform duration-300"
              >
                Get Quote
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
