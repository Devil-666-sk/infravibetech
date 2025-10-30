"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // ✅ Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle EmailJS submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_wopn9yo", // 🔹 Your EmailJS Service ID
        "template_twdtagu", // 🔹 Your EmailJS Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "2t80qrQxsCLSTo4uC" // 🔹 Your EmailJS Public Key
      );

      console.log("EmailJS success:", result.text);
      alert("✅ Thank you for contacting InfraVibe Tech! We'll get back soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert("❌ Message failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-premium relative w-full text-white py-16 md:py-20 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* ==== Heading ==== */}
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
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
          Contact <span className="text-white">Us</span>
        </motion.h2>

        <div className="w-24 h-1 mx-auto mt-3 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
          Connect with InfraVibe Tech — whether you need web design, marketing,
          or digital transformation, we’re here to take your business forward.
        </p>
      </div>

      {/* ==== Contact Info + Form ==== */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* ==== Contact Info ==== */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8 shadow-lg"
        >
          <motion.h3
            className="text-3xl font-extrabold mb-3"
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
            Get In Touch
          </motion.h3>

          <div className="w-20 h-1 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

          <p className="text-gray-300 mb-8">
            Let’s discuss how InfraVibe Tech can transform your business
            digitally. We’re just a message away!
          </p>

          <div className="space-y-4 text-left">
            <div className="flex items-center gap-4">
              <Phone className="text-cyan-400 w-6 h-6" />
              <p className="text-gray-200">+91 7860225993</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400 w-6 h-6" />
              <p className="text-gray-200">infravibetech@gmail.com</p>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-emerald-400 w-6 h-6 mt-1" />
              <p className="text-gray-200">
                Sunder Nagar Colony, Bhankharpur, Punjab – 140201
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/dir//InfraVibe+Tech,+Sunder+Nagar+Colony,+Bhankharpur,+Punjab+140201"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:shadow-cyan-500/30 transition-all"
            >
              Get Directions
            </a>
          </div>
        </motion.div>

        {/* ==== Contact Form ==== */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8 shadow-lg"
        >
          <motion.h3
            className="text-3xl font-extrabold mb-3"
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
            Send Us a Message
          </motion.h3>

          <div className="w-20 h-1 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-cyan-500/30 transition-all disabled:opacity-70"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" /> Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* ==== Google Map ==== */}
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.7106818706933!2d76.84080557523337!3d30.648463674619273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee2c65e24407%3A0xe999b69b13bbd504!2sInfraVibe%20Tech!5e0!3m2!1sen!2sin!4v1730300000000!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="rounded-2xl border-none shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
