"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Info } from "lucide-react";
import { useState, useCallback, useRef } from "react";
import emailjs from "@emailjs/browser";

// ✅ Notification Component
const NotificationMessage = ({ notification, setNotification }) => {
  if (!notification.message) return null;

  const typeClasses = {
    success: "bg-emerald-600 border-emerald-700 text-white",
    error: "bg-red-600 border-red-700 text-white",
    info: "bg-yellow-600 border-yellow-700 text-white",
  };

  const Icon = notification.type === "success" ? CheckCircle : notification.type === "error" ? XCircle : Info;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl flex items-center gap-3 border ${typeClasses[notification.type]}`}
      role="alert"
    >
      <Icon className="w-6 h-6" />
      <div className="flex-1">
        <p className="font-semibold">{notification.type.toUpperCase()}</p>
        <p className="text-sm">{notification.message}</p>
      </div>
      <button
        onClick={() => setNotification({ message: "", type: null })}
        className="ml-4 opacity-70 hover:opacity-100 transition-opacity"
      >
        &times;
      </button>
    </motion.div>
  );
};

// ✅ Main Component
export default function ContactUs() {
  // ✅ Fixed: Added correct typing for formRef
  const formRef = useRef<HTMLFormElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: null });

  // ✅ Your EmailJS environment variables
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const showNotification = useCallback((message: string, type: "success" | "error" | "info") => {
    setNotification({ message, type });
    const timer = setTimeout(() => {
      setNotification({ message: "", type: null });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showNotification("Please fill all fields before submitting!", "info");
      return;
    }

    if (!formRef.current) {
      showNotification("Form reference not found!", "error");
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      console.log("EmailJS Result:", result.text);

      showNotification("Message sent successfully! We’ll contact you soon.", "success");
      setForm({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Submission Error:", error);
      showNotification(`Failed to send message: ${error.text || "Network Error"}`, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 font-['Inter'] relative w-full text-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <NotificationMessage notification={notification} setNotification={setNotification} />

      {/* Background glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] absolute top-10 left-10 animate-pulse-slow" />
        <div className="w-80 h-80 bg-blue-500/30 rounded-full blur-[100px] absolute bottom-10 right-10 animate-pulse-slow delay-500" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* === Heading === */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "200%" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "linear-gradient(90deg, #00ffff, #3b82f6, #14b8a6, #00ffff)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Contact <span className="text-white">Us</span>
          </motion.h2>

          <div className="w-24 h-1 mx-auto mt-3 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Connect with Infra VibeTech — whether you need web design, marketing, or digital transformation,
            we’re here to take your business forward.
          </p>
        </div>

        {/* === Info + Form === */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/10 transition-shadow"
          >
            <motion.h3
              className="text-3xl font-extrabold mb-3"
              initial={{ backgroundPositionX: "0%" }}
              animate={{ backgroundPositionX: "200%" }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "linear-gradient(90deg, #00ffff, #3b82f6, #14b8a6, #00ffff)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Get In Touch
            </motion.h3>

            <div className="w-20 h-1 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

            <p className="text-gray-300 mb-8 flex-grow">
              Let’s discuss how Infra VibeTech can transform your business digitally. We’re just a message away!
            </p>

            <div className="space-y-6 text-left">
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400 w-6 h-6 p-1 rounded-full bg-white/10" />
                <a href="tel:+917860225993" className="text-gray-200 hover:text-cyan-400 transition font-medium">
                  +91 7860225993
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-blue-400 w-6 h-6 p-1 rounded-full bg-white/10" />
                <a
                  href="mailto:infravibetech@gmail.com"
                  className="text-gray-200 hover:text-blue-400 transition font-medium"
                >
                  infravibetech@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-emerald-400 w-6 h-6 mt-1 p-1 rounded-full bg-white/10" />
                <p className="text-gray-200">Sunder Nagar Colony, Bhankharpur, Punjab – 140201</p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="https://www.google.com/maps/dir//InfraVibe+Tech,+Sunder+Nagar+Colony,+Bhankharpur,+Punjab+140201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-cyan-500/30 transition-all hover:ring-2 ring-offset-2 ring-cyan-400 ring-offset-gray-900"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-shadow"
          >
            <motion.h3
              className="text-3xl font-extrabold mb-3"
              initial={{ backgroundPositionX: "0%" }}
              animate={{ backgroundPositionX: "200%" }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "linear-gradient(90deg, #00ffff, #3b82f6, #14b8a6, #00ffff)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Send Us a Message
            </motion.h3>

            <div className="w-20 h-1 mb-6 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400" />

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-transparent focus:border-cyan-400 transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-transparent focus:border-blue-400 transition"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 border border-transparent focus:border-emerald-400 transition resize-none"
                required
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg py-3 rounded-full shadow-lg shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 
3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* === Map === */}
      <div className="mt-20 max-w-6xl mx-auto relative z-10">
        <h3
          className="text-2xl font-bold text-white mb-4 border-l-4 border-teal-400 pl-3"
          style={{
            backgroundImage: "linear-gradient(90deg, #00ffff, #3b82f6, #14b8a6, #00ffff)",
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Our Location
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.409678358663!2d76.8327561745943!3d30.60430909182963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f95b980cfcbb5%3A0x72f3d0d6acfb54f7!2sInfra%20VibeTech!5e1!3m2!1sen!2sin!4v1762428706735!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl border-4 border-white/10 shadow-2xl"
        ></iframe>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-slow.delay-500 {
          animation-delay: -4s;
        }
      `}</style>
    </section>
  );
}
