"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, Laptop, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.webp";

const DIGITAL_SERVICES = [
  { title: "Web Design & Development", href: "/services/web-development" },
  { title: "SEO (On/Off Page)", href: "/services/seo" },
  { title: "Social Media Management & Ads", href: "/services/smm" },
  { title: "Lead Generation & Branding", href: "/services/lead-generation" },
  { title: "All-in-One Digital Marketing", href: "/services/marketing" },
];

const TECH_SERVICES = [
  { title: "Laptop & PC Repair", href: "/services/repair" },
  { title: "New & Refurbished Laptop Sales", href: "/services/laptop-sales" },
  { title: "Laptop on Rent", href: "/services/rental" },
  { title: "AMC & IT Support", href: "/services/it-support" },
  { title: "Technical Support", href: "/services/tech-support" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 shadow"
          : "bg-white/60 backdrop-blur"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="rounded-full p-1 bg-white shadow-md group-hover:shadow-xl transition">
            <Image
              src={logo}
              alt="InfraVibe Tech Logo"
              width={42}
              height={42}
              className="rounded-full group-hover:scale-105 transition"
            />
          </div>

          <motion.h2
            className="text-2xl font-extrabold"
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
            InfraVibe Tech
          </motion.h2>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8">
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative"
          >
            <NavItem href="/services">
              <div className="flex items-center gap-1">
                Services <ChevronDown size={16} />
              </div>
            </NavItem>

            {/* ✅ CLEAN & COMPACT DROPDOWN */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-3 w-[420px]
                             rounded-xl bg-white/90 backdrop-blur-xl
                             shadow-2xl border border-white/40
                             p-4 grid grid-cols-2 gap-4"
                >
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      <Laptop size={16} /> Digital Services
                    </h4>
                    <ul className="space-y-1">
                      {DIGITAL_SERVICES.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="relative block px-3 py-2 text-sm rounded-lg
                                       transition-all duration-200
                                       hover:translate-x-1 group"
                          >
                            <span className="absolute inset-0 -z-10 rounded-lg
                                             bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-cyan-300/30
                                             opacity-0 blur-lg transition group-hover:opacity-100" />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      <Cpu size={16} /> Technical Services
                    </h4>
                    <ul className="space-y-1">
                      {TECH_SERVICES.map((item) => (
                        <li key={item.title}>
                          <Link
                            href={item.href}
                            className="relative block px-3 py-2 text-sm rounded-lg
                                       transition-all duration-200
                                       hover:translate-x-1 group"
                          >
                            <span className="absolute inset-0 -z-10 rounded-lg
                                             bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-cyan-300/30
                                             opacity-0 blur-lg transition group-hover:opacity-100" />
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem href="/about">About</NavItem>
          <NavItem href="/why-us">Why Us</NavItem>
          <NavItem href="/">Portfolio</NavItem>
          <NavItem href="/contact">Contact</NavItem>

          <a
            href="tel:7860225993"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow hover:scale-105 transition"
          >
            <Phone size={18} className="inline mr-1" /> Call Now
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU (unchanged) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white shadow-xl p-5 space-y-4"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/why-us">Why Us</Link>
            <Link href="/contact">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-1 rounded transition-all duration-300 group hover:scale-[1.06]"
    >
      <span className="absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg
                       bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-cyan-300/40 transition" />
      {children}
    </Link>
  );
}
