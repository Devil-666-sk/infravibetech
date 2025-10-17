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
      className="bg-premium relative w-full text-white py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* ==== Premium Animated Heading ==== */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight"
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
        >
          Our <span className="text-white">Services</span>
        </motion.h2>

        {/* Gradient Line Underline */}
        <div className="w-24 h-1 mx-auto mt-3 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-12">
          Explore a complete range of digital services designed to empower your
          business — from web design to marketing, support, and beyond.
        </p>

        {/* ==== Services Grid Layout ==== */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {services.slice(0, 2).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                onClick={() => setSelectedService(service.title)}
              />
            ))}
            <div className="hidden lg:block">
              <ServiceCard
                service={services[2]}
                onClick={() => setSelectedService(services[2].title)}
              />
            </div>
          </div>

          <div className="w-full flex justify-center lg:hidden">
            <ServiceCard
              service={services[2]}
              onClick={() => setSelectedService(services[2].title)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-full">
            {services.slice(3, 5).map((service) => (
              <ServiceCard
                key={service.title}
                service={service}
                onClick={() => setSelectedService(service.title)}
              />
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

/* ==== Card Component with Animated Gradient Title ==== */
const ServiceCard = ({ service, onClick }: any) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
    onClick={onClick}
    className="group bg-white/10 border border-white/10 rounded-2xl p-6 
               w-full sm:w-[90%] md:w-[45%] lg:w-[320px] 
               min-h-[260px] flex flex-col justify-between
               cursor-pointer backdrop-blur-xl 
               hover:bg-white/20 hover:border-teal-400/30 transition-all duration-300
               shadow-lg hover:shadow-teal-500/20 text-center"
  >
    <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
      {service.icon}
    </div>

    <div>
      {/* Animated gradient text same as “Our” */}
      <motion.h3
        className="text-lg font-semibold mb-2 leading-snug"
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
      >
        {service.title}
      </motion.h3>

      <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
    </div>

    <motion.div
      className="h-[2px] w-0 group-hover:w-full mx-auto mt-4 bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 transition-all duration-500"
    />
  </motion.div>
);
