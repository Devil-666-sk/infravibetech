"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Share2, Megaphone, Wrench, Laptop } from "lucide-react";
import emailjs from "emailjs-com";

const services = [
  {
    title: "Web Design & Development",
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
    desc: "We build responsive, fast-loading, and SEO-optimized websites that deliver seamless user experiences and boost your digital presence.",
  },
  {
    title: "Social Media Management",
    icon: <Share2 className="w-10 h-10 text-pink-400" />,
    desc: "We handle your online presence across platforms, ensuring consistent engagement, creative content, and measurable growth.",
  },
  {
    title: "Digital Marketing",
    icon: <Megaphone className="w-10 h-10 text-green-400" />,
    desc: "Data-driven marketing strategies to reach your audience effectively, enhance conversions, and grow your brand visibility.",
  },
  {
    title: "Tech Support & Maintenance",
    icon: <Wrench className="w-10 h-10 text-cyan-400" />,
    desc: "Comprehensive IT support and maintenance services that keep your business running smoothly and efficiently.",
  },
  {
    title: "Laptop & PC on Rent",
    icon: <Laptop className="w-10 h-10 text-yellow-400" />,
    desc: "Flexible, affordable laptop and PC rental options for businesses, students, and events — quality devices on demand.",
  },
];

export default function ServicesSection() {
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
      .send("service_wopn9yo", "template_y9fuu0k", templateParams, "2t80qrQxsCLSTo4uC")
      .then(() => {
        setSent(true);
        setTimeout(() => setSelectedService(null), 2000);
      })
      .catch((err) => console.error("Email Error:", err));
  };

  return (
    <section
      id="services"
      className="bg-premium relative w-full text-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* ==== Heading ==== */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Services
          </span>
        </h2>
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-16">
          Explore a complete range of digital services designed to empower your business — from web design to marketing, support, and beyond.
        </p>

        {/* ==== Custom Responsive Layout ==== */}
        <div className="flex flex-col items-center gap-10">
          {/* ===== Top Row (2 on tablet, 3 on desktop) ===== */}
          <div className="flex flex-wrap justify-center gap-10 w-full">
            {services.slice(0, 2).map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(service.title)}
                className="group bg-white/10 border border-white/10 rounded-2xl p-8 
                           w-full sm:w-[90%] md:w-[45%] lg:w-[340px]
                           cursor-pointer backdrop-blur-xl 
                           hover:bg-white/20 hover:border-teal-400/30 transition-all duration-300
                           shadow-lg hover:shadow-teal-500/20"
              >
                <div className="flex justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p
                  className="text-gray-300 text-sm leading-relaxed line-clamp-2 overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}

            {/* Show 3rd card (Digital Marketing) only on large screens in top row */}
            <div className="hidden lg:block">
              <motion.div
                key={services[2].title}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(services[2].title)}
                className="group bg-white/10 border border-white/10 rounded-2xl p-8 
                           w-full lg:w-[340px]
                           cursor-pointer backdrop-blur-xl 
                           hover:bg-white/20 hover:border-teal-400/30 transition-all duration-300
                           shadow-lg hover:shadow-teal-500/20"
              >
                <div className="flex justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  {services[2].icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {services[2].title}
                </h3>
                <p
                  className="text-gray-300 text-sm leading-relaxed line-clamp-2 overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                >
                  {services[2].desc}
                </p>
              </motion.div>
            </div>
          </div>

          {/* ===== Middle Single Card (Digital Marketing for tablet only) ===== */}
          <div className="hidden md:flex lg:hidden justify-center w-full">
            <motion.div
              key={services[2].title + "-tablet"}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedService(services[2].title)}
              className="group bg-white/10 border border-white/10 rounded-2xl p-8 
                         w-[90%] md:w-[45%]
                         cursor-pointer backdrop-blur-xl 
                         hover:bg-white/20 hover:border-teal-400/30 transition-all duration-300
                         shadow-lg hover:shadow-teal-500/20"
            >
              <div className="flex justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                {services[2].icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {services[2].title}
              </h3>
              <p
                className="text-gray-300 text-sm leading-relaxed line-clamp-2 overflow-hidden text-ellipsis"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
              >
                {services[2].desc}
              </p>
            </motion.div>
          </div>

          {/* ===== Bottom Row (2 cards) ===== */}
          <div className="flex flex-wrap justify-center gap-10 w-full">
            {services.slice(3, 5).map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(service.title)}
                className="group bg-white/10 border border-white/10 rounded-2xl p-8 
                           w-full sm:w-[90%] md:w-[45%] lg:w-[340px]
                           cursor-pointer backdrop-blur-xl 
                           hover:bg-white/20 hover:border-teal-400/30 transition-all duration-300
                           shadow-lg hover:shadow-teal-500/20"
              >
                <div className="flex justify-center mb-5 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p
                  className="text-gray-300 text-sm leading-relaxed line-clamp-2 overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ==== Inquiry Modal ==== */}
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

                  <form onSubmit={handleSubmit} className="space-y-4">
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
