/*
InfraVibeTech - Homepage (Single-file React component)
Stack assumptions (what to install):
- Next.js or Create React App + TailwindCSS configured
- framer-motion installed (`npm i framer-motion`)
- Fonts: Playfair Display (headings) + Poppins (body) via Google Fonts in your HTML head

How to use:
- Drop this component in your pages (Next.js) or App (CRA)
- Tailwind utility classes are used throughout
- Replace placeholder images/text as needed

This file exports a default React component (InfraVibeHome).
*/
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function InfraVibeHome() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-poppins">
      {/* NAVBAR */}
      <header className="fixed w-full z-40 bg-transparent backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF9A3D] flex items-center justify-center shadow-lg">
              <span className="font-playfair text-white text-lg">I</span>
            </div>
            <div>
              <div className="font-semibold text-lg">InfraVibe Tech</div>
              <div className="text-xs text-gray-500 -mt-0.5">Digital Infrastructure • UI/UX • Web</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-[#FF7A00] transition">Services</a>
            <a className="hover:text-[#FF7A00] transition">Projects</a>
            <a className="hover:text-[#FF7A00] transition">About</a>
            <a className="hover:text-[#FF7A00] transition">Contact</a>
            <button className="ml-2 px-4 py-2 rounded-full border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white transition">
              Get Quote
            </button>
          </div>

          <div className="md:hidden">{/* mobile menu placeholder */}
            <button className="p-2 rounded-md border">☰</button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main className="pt-28">
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-playfair text-4xl md:text-6xl leading-tight"
            >
              Designing Digital
              <br /> Experiences with
              <span className="text-[#FF7A00]"> Precision</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-gray-600 max-w-xl"
            >
              InfraVibe Tech crafts premium websites and brand experiences for startups and enterprises — fast, responsive and SEO-ready.
            </motion.p>

            <div className="mt-8 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                className="px-6 py-3 rounded-full bg-[#FF7A00] text-white font-medium shadow-lg"
              >
                Start Project
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03 }}
                className="px-6 py-3 rounded-full border border-gray-300 text-sm"
              >
                View Services
              </motion.a>
            </div>

            <div className="mt-8 flex gap-6 items-center text-sm text-gray-500">
              <div>
                <div className="text-[#FF7A00] font-semibold">200+</div>
                <div>Projects Delivered</div>
              </div>
              <div>
                <div className="text-[#FF7A00] font-semibold">99%</div>
                <div>Client Satisfaction</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Hero visual: replace with actual image or 3D canvas */}
            <div className="w-full h-72 md:h-96 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-[0_10px_30px_rgba(2,6,23,0.08)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-semibold">Premium Web Design</div>
                <div className="mt-2 text-sm text-gray-500">Modern, Classy & Responsive</div>
              </div>
            </div>

            {/* subtle shining / glow */}
            <div className="pointer-events-none absolute -bottom-8 left-8 w-48 h-48 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-[#FF7A00] to-[#FF9A3D]"></div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <h3 className="font-playfair text-2xl">Services</h3>
          <p className="text-gray-600 mt-2 max-w-2xl">We combine design, performance and growth to deliver measurable results.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Web Development", desc: "Next.js, Tailwind, SEO-Optimized" },
              { title: "UI/UX Design", desc: "Wireframes, Prototypes, Brand Systems" },
              { title: "Performance", desc: "Speed, Accessibility, Best Practices" },
              { title: "Maintenance", desc: "Support, Upgrades, Analytics" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white shadow-sm border"
              >
                <div className="text-sm text-[#FF7A00] font-semibold">{s.title}</div>
                <div className="mt-3 text-gray-600 text-sm">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT + PROJECT HIGHLIGHT */}
        <section className="max-w-6xl mx-auto px-6 mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-playfair text-3xl">We build digital infrastructure that lasts</h3>
            <p className="text-gray-600 mt-4">From prototypes to production, our approach focuses on clarity, performance and brand-first design. We partner with you to create solutions that scale.</p>

            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 rounded-full border">Our Process</button>
              <button className="px-4 py-2 rounded-full border">Case Studies</button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md bg-white p-4">
              <div className="text-sm text-[#FF7A00] font-semibold">Project — SmartCity UI</div>
              <div className="mt-2 text-gray-600">Implemented a responsive admin dashboard and landing site for municipal services.</div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md bg-white p-4">
              <div className="text-sm text-[#FF7A00] font-semibold">Project — Infra Analytics</div>
              <div className="mt-2 text-gray-600">Realtime visualizations and monitoring with optimized data pipelines.</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="max-w-3xl mx-auto px-6 mt-20 mb-24">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="font-playfair text-2xl">Let’s talk about your project</h3>
            <p className="text-gray-600 mt-2">Share a few details and we’ll get back with a quick plan and estimate.</p>

            <form className="mt-6 grid gap-4">
              <input placeholder="Your name" className="p-3 border rounded-md focus:ring-2 focus:ring-[#FF7A00] outline-none" />
              <input placeholder="Email" className="p-3 border rounded-md focus:ring-2 focus:ring-[#FF7A00] outline-none" />
              <textarea placeholder="Project brief" className="p-3 border rounded-md focus:ring-2 focus:ring-[#FF7A00] outline-none h-28" />

              <div className="flex items-center justify-between">
                <button className="px-5 py-3 rounded-full bg-[#FF7A00] text-white">Send</button>
                <div className="text-sm text-gray-500">Or email: infravibetech@gmail.com</div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} InfraVibe Tech — All rights reserved.</div>
          <div className="flex gap-4 text-sm text-gray-600">Privacy • Terms • Contact</div>
        </div>
      </footer>
    </div>
  );
}

/*
Tailwind + Font notes (add to your global styles / head):
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

In tailwind.config.js add:
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
}
*/
