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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/40"
          : "bg-white/50 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* LOGO */}
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
            className="text-xl md:text-2xl font-extrabold tracking-tight"
            animate={{ backgroundPositionX: "200%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
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
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-4 w-[460px]
                             rounded-2xl bg-white/90 backdrop-blur-xl
                             shadow-2xl border border-white/40
                             p-5 grid grid-cols-2 gap-6"
                >
                  <DropdownColumn
                    title="Digital Services"
                    icon={<Laptop size={16} />}
                    items={DIGITAL_SERVICES}
                  />
                  <DropdownColumn
                    title="Technical Services"
                    icon={<Cpu size={16} />}
                    items={TECH_SERVICES}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem href="/about">About</NavItem>
          <NavItem href="/why-us">Why Us</NavItem>
          <NavItem href="/portfolio">Portfolio</NavItem>
          <NavItem href="/contact">Contact</NavItem>

          <a
            href="tel:7860225993"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 
                       text-white shadow-md hover:shadow-lg hover:scale-105 transition text-sm font-medium"
          >
            <Phone size={16} className="inline mr-1" /> Call Now
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* MOBILE DRAWER MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-screen bg-white z-50 shadow-2xl p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={() => setMobileOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              <div className="space-y-4 border-b pb-4">
                <MobileLink href="/">Home</MobileLink>
                <MobileLink href="/about">About</MobileLink>
                <MobileLink href="/why-us">Why Us</MobileLink>
                <MobileLink href="/portfolio">Portfolio</MobileLink>
                <MobileLink href="/contact">Contact</MobileLink>
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Digital Services
                </h3>
                {DIGITAL_SERVICES.map((item) => (
                  <MobileLink key={item.title} href={item.href}>
                    {item.title}
                  </MobileLink>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                  Technical Services
                </h3>
                {TECH_SERVICES.map((item) => (
                  <MobileLink key={item.title} href={item.href}>
                    {item.title}
                  </MobileLink>
                ))}
              </div>

              <a
                href="tel:7860225993"
                className="block text-center mt-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow"
              >
                📞 Call Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ href, children }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 rounded-lg text-sm font-medium
                 transition-all duration-300 group hover:text-blue-600"
    >
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full" />
      {children}
    </Link>
  );
}

function DropdownColumn({ title, icon, items }) {
  return (
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
        {icon} {title}
      </h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-blue-50 transition"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block py-2.5 px-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
    >
      {children}
    </Link>
  );
}
