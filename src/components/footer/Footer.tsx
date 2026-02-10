"use client";
import { Linkedin, Instagram, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 text-gray-700 py-14 px-6 border-t">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT — BRAND */}
        <div>
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

          <p className="mt-3 text-cyan-600 font-semibold">
            Empowering Businesses Digitally & Technically
          </p>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Providing professional IT solutions, laptop services, AMC support,
            and high-performance digital marketing for modern businesses.
          </p>

          <p className="mt-4 text-xs text-gray-500">
            GSTIN: 03GTXPK5286G1Z1
          </p>
        </div>

        {/* CENTER — SERVICES */}
        <div className="md:mx-auto">
          <h3 className="text-gray-900 text-xl font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              { name: "Technical Support", link: "/services/technical-support" },
              { name: "Digital Services", link: "/services/digital-services" },
              { name: "Laptop & PC Repairing", link: "/services/repair" },
              { name: "New & Refurbished Laptop & PC Sales", link: "/services/sales" },
              { name: "Laptop & PC on Rent", link: "/services/rent" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.link}
                  className="hover:text-cyan-600 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  • {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — CONTACT */}
        <div>
          <h3 className="text-gray-900 text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-sm text-gray-600">
            <a
              href="tel:7860225993"
              className="flex items-center gap-2 hover:text-cyan-600 transition-all duration-300 hover:translate-x-1"
            >
              <Phone size={16} /> 7860225993
            </a>

            <a
              href="mailto:info@infravibetech.com"
              className="flex items-center gap-2 hover:text-cyan-600 transition-all duration-300 hover:translate-x-1"
            >
              <Mail size={16} /> info@infravibetech.com
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Bhankharpur+Punjab+140201"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-600 transition-all duration-300 hover:translate-x-1"
            >
              <MapPin size={16} /> Bhankharpur, Punjab – 140201
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="https://www.linkedin.com/company/infravibe-tech/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/infra_vibe_tech/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/1DQcUzi9PP/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com/@infravibetech" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-12 text-xs text-gray-500 border-t pt-6">
        © {new Date().getFullYear()} InfraVibe Tech. All Rights Reserved.
      </div>
    </footer>
  );
}
