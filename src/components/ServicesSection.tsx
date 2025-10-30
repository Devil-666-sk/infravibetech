"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Search,
  Share2,
  PenTool,
  Rocket,
  Wrench,
  Network,
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
    desc: "We build custom websites using React and Next.js that not only look stunning but also perform flawlessly. From UI/UX to deployment — we handle it all.",
    keywords:
      "web design, web development, responsive website, next js site, InfraVibe Tech",
  },
  {
    icon: <Search className="w-10 h-10 text-emerald-400" />,
    title: "SEO & Digital Marketing",
    short: "Boost visibility and grow your business organically.",
    desc: "Our SEO experts and marketers use proven techniques to get your brand discovered — from keyword research to backlinks and paid promotions.",
    keywords: "seo, digital marketing, google ranking, traffic growth, ads",
  },
  {
    icon: <Share2 className="w-10 h-10 text-pink-400" />,
    title: "Social Media Management",
    short: "Build your online presence and engage customers.",
    desc: "We handle everything — from daily posts to running campaigns on Instagram, Facebook, and LinkedIn. Consistency + Creativity = Growth.",
    keywords: "social media marketing, instagram ads, facebook page management",
  },
  {
    icon: <PenTool className="w-10 h-10 text-yellow-400" />,
    title: "Branding & Identity",
    short: "Crafting your brand’s visual story with impact.",
    desc: "From logo design to brand guidelines, we create visuals that define your identity and connect emotionally with your audience.",
    keywords: "branding, logo design, brand identity, creative agency",
  },
  {
    icon: <Network className="w-10 h-10 text-cyan-400" />,
    title: "Networking & CCTV Setup",
    short: "Stay connected and secure with reliable solutions.",
    desc: "Professional setup for WiFi networks and CCTV surveillance systems for homes and businesses — safe, fast, and future-ready.",
    keywords: "CCTV setup, network installation, WiFi setup, IT services",
  },
  {
    icon: <Laptop className="w-10 h-10 text-orange-400" />,
    title: "Laptop & PC Repair",
    short: "Quick and reliable computer repair service.",
    desc: "Hardware, software, and performance issues fixed by certified experts. We ensure your system runs like new again.",
    keywords: "laptop repair, pc service, computer fix Bhankharpur",
  },
  {
    icon: <Rocket className="w-10 h-10 text-teal-400" />,
    title: "Website Maintenance",
    short: "Keep your site secure, fast, and up-to-date.",
    desc: "From updates to backups, we maintain your website’s health and ensure smooth operation — so you can focus on your business.",
    keywords: "website maintenance, hosting, update management",
  },
  {
    icon: <Computer className="w-10 h-10 text-indigo-400" />,
    title: "Laptop on Rent",
    short: "Flexible rental plans for students and businesses.",
    desc: "Affordable and ready-to-use laptops on rent — ideal for events, offices, or temporary work setups. Hassle-free pickup & delivery.",
    keywords: "laptop rent, computer rental, InfraVibe Tech rental service",
  },
  {
    icon: <Wrench className="w-10 h-10 text-red-400" />,
    title: "Technical Support & IT Assistance",
    short: "Complete on-call and remote tech help for your systems.",
    desc: "Facing technical issues? Our experts provide instant remote and on-site IT support for hardware, software, and network problems — ensuring your business never stops.",
    keywords:
      "technical support, IT assistance, remote help, onsite IT support, InfraVibe Tech helpdesk",
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
      {/* === SEO Meta Tags === */}
      <Head>
        <title>InfraVibe Tech - Our Services & What We Offer</title>
        <meta
          name="description"
          content="Explore InfraVibe Tech’s full suite of services — from web design and digital marketing to IT repair, networking, and SEO solutions across Punjab, India."
        />
        <meta
          name="keywords"
          content={services.map((s) => s.keywords).join(", ")}
        />
      </Head>

      {/* === Background Glow === */}
      <div className="absolute top-0 left-0 w-[20rem] h-[20rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* === Section Heading === */}
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

        {/* === Services Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

              {/* Gradient Animated Heading (Same as other sections) */}
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

      {/* === Inquiry Modal === */}
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
