"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Search,
  Share2,
  Rocket,
  Wrench,
  Laptop,
  Computer,
} from "lucide-react";
import Head from "next/head";
import emailjs from "emailjs-com";

const services = [
  {
    icon: <Globe className="w-10 h-10 text-blue-400" />,
    title: "Web Design & Development",
    short: "Modern, responsive, and SEO-optimized websites.",
    desc: "We create fast, elegant, and mobile-friendly websites built with the latest tech to help your business stand out online.",
    keywords: "web design, website development, responsive website, Infra VibeTech",
  },
  {
    icon: <Search className="w-10 h-10 text-emerald-400" />,
    title: "SEO (On-page & Off-page)",
    short: "Rank higher and attract the right audience.",
    desc: "Our SEO strategy ensures your business appears on top searches with optimized keywords, backlinks, and Google-friendly techniques.",
    keywords: "seo, on-page seo, off-page seo, google ranking, Infra VibeTech",
  },
  {
    icon: <Share2 className="w-10 h-10 text-pink-400" />,
    title: "Social Media Management & Ads",
    short: "Grow your brand with engaging social media presence.",
    desc: "From creative posts to ad campaigns, we handle everything on Instagram, Facebook, and LinkedIn to boost your reach and engagement.",
    keywords: "social media, facebook ads, instagram marketing, Infra VibeTech",
  },
  {
    icon: <Rocket className="w-10 h-10 text-teal-400" />,
    title: "Lead Generation & Branding Campaigns",
    short: "Targeted campaigns that convert into real business.",
    desc: "We design smart ad and branding campaigns that generate qualified leads and help your business grow faster.",
    keywords: "lead generation, branding, ads campaign, Infra VibeTech marketing",
  },
  {
    icon: <Wrench className="w-10 h-10 text-orange-400" />,
    title: "Laptop & PC Repairing",
    short: "Fast and reliable repair service for all devices.",
    desc: "We fix laptops and PCs of all brands — hardware, software, and performance issues handled with care and expertise.",
    keywords: "laptop repair, computer service, pc repair, Infra VibeTech",
  },
  {
    icon: <Laptop className="w-10 h-10 text-green-400" />,
    title: "New & Refurbished Laptop Sales",
    short: "Buy top-brand laptops at the best prices.",
    desc: "We offer a wide range of new and refurbished laptops from Dell, HP, Lenovo, and more — with exchange and warranty options.",
    keywords: "laptop sales, refurbished laptop, new laptop, HP Dell Lenovo, Infra VibeTech",
  },
  {
    icon: <Computer className="w-10 h-10 text-indigo-400" />,
    title: "Laptop on Rent",
    short: "Flexible rental plans for students and professionals.",
    desc: "Affordable laptops available on short or long-term rent — perfect for offices, startups, or events with quick setup and support.",
    keywords: "laptop rent, computer rental, laptop on rent, Infra VibeTech",
  },
];

export default function OurServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: selectedService,
    };

    emailjs
      .send(
        "service_wopn9yo",
        "template_y9fuu0k",
        templateParams,
        "2t80qrQxsCLSTo4uC"
      )
      .then(() => {
        setSent(true);
        setTimeout(() => setSelectedService(null), 2000);
      })
      .catch((err) => console.error("Email Error:", err));
  };

  return (
    <section
      id="services"
      className="relative w-full py-20 px-6 md:px-12 lg:px-24 bg-premium text-white overflow-hidden"
    >
      <Head>
        <title>Infra VibeTech - Our Services</title>
        <meta
          name="description"
          content="Explore Infra VibeTech’s top digital and technical services — from web design, SEO, and ads to laptop repair, sales, and rentals."
        />
        <meta
          name="keywords"
          content={services.map((s) => s.keywords).join(", ")}
        />
      </Head>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[20rem] h-[20rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
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
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Our Services & What We Offer
        </motion.h2>

        <div className="w-24 h-1 mx-auto mt-3 mb-10 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-14">
          We bring together web technology, marketing, and IT expertise to take
          your business from offline to fully online — with complete support at
          every step.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
              onClick={() => setSelectedService(service.title)}
              className="group bg-white/10 border border-white/10 rounded-2xl p-6 cursor-pointer 
                         backdrop-blur-xl hover:bg-white/20 hover:border-teal-400/30 transition-all 
                         duration-300 shadow-lg hover:shadow-teal-500/30"
            >
              <div className="mb-5 flex justify-center">{service.icon}</div>

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
                className="text-xl font-bold mb-2 text-center tracking-wide"
              >
                {service.title}
              </motion.h3>

              <p className="text-gray-300 text-sm text-center font-medium mb-2">
                {service.short}
              </p>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inquiry Modal (unchanged) */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 w-full max-w-md text-white shadow-2xl shadow-teal-500/10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white transition-all"
              >
                ✕
              </button>

              {sent ? (
                <div className="text-center py-10 text-teal-400 font-semibold text-lg">
                  ✅ Message Sent Successfully!
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Inquiry for{" "}
                    <span className="text-teal-400">{selectedService}</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-teal-400"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-teal-400"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-teal-400"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                    <textarea
                      placeholder="Your Requirement"
                      className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-teal-400"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg font-semibold hover:scale-105 transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
