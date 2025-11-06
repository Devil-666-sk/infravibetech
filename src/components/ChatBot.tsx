"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.webp"; // apna logo sahi path pe rakho

interface Message {
  from: "bot" | "user";
  text: string;
  options?: string[];
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "👋 Hi! Welcome to InfraVibeTech." },
    { from: "bot", text: "How can I assist you today?" },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOption = (option: string) => {
    let reply: Message = { from: "bot", text: "" };

    switch (option) {
      case "About InfraVibeTech":
        reply.text =
          "InfraVibeTech is a complete IT and digital solutions company offering end-to-end services — from hardware support to online growth.";
        break;

      case "Our Services":
        reply = {
          from: "bot",
          text: "Here are our main services 👇 Tap to connect:",
          options: [
            "🌐 Web Design & Development",
            "📈 SEO (On-page & Off-page)",
            "📱 Social Media Management & Ads",
            "🎯 Lead Generation & Branding Campaigns",
            "🛠️ Laptop & PC Repairing",
            "💻 New & Refurbished Laptop Sales",
            "🖥️ Laptop on Rent",
          ],
        };
        break;

      case "Get a Quote":
        reply.text =
          "Sure! Let's connect directly on WhatsApp for a personalized quote 👇";
        break;

      case "Contact Team":
        reply.text =
          "You can reach our team directly on WhatsApp below 👇";
        break;

      default:
        reply.text = "Please choose an option from below 😊";
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, reply]);
  };

  const handleServiceClick = (service: string) => {
    const whatsappLink = `https://wa.me/917860225993?text=Hi%20InfraVibeTech!%20I'm%20interested%20in%20${encodeURIComponent(
      service
    )}`;
    const mailLink = `mailto:infravibetech@gmail.com?subject=Service%20Inquiry%20-%20${encodeURIComponent(
      service
    )}&body=Hi%20InfraVibeTech,%0D%0A%0D%0AI%27m%20interested%20in%20your%20${encodeURIComponent(
      service
    )}%20service.%0D%0APlease%20contact%20me%20with%20more%20details.%0D%0A%0D%0AThanks!`;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: service },
      {
        from: "bot",
        text: `Great choice! You can contact us via WhatsApp or Email below 👇\n\n📞 *${service}*`,
      },
    ]);

    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 700);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all"
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Chat"
      >
        {open ? <X size={24} /> : <MessageSquare size={26} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 sm:right-6 z-40 w-[90%] sm:w-80 md:w-96 bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Background Logo */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none flex items-center justify-center">
              <Image
                src={logo}
                alt="InfraVibeTech Logo"
                className="object-contain w-40 h-40 sm:w-56 sm:h-56"
              />
            </div>

            {/* Header */}
            <div className="relative z-10 bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 text-white p-3 font-semibold flex justify-between items-center">
              <span>InfraVibe Assistant</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Chat"
                className="hover:scale-110 transition-transform"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div
              className="relative z-10 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400/40 scrollbar-track-transparent px-3 pt-4 pb-2 space-y-3"
              style={{ maxHeight: "22rem", scrollBehavior: "smooth" }}
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 text-white rounded-l-2xl rounded-tr-2xl"
                        : "bg-white/80 text-gray-800 rounded-r-2xl rounded-tl-2xl border border-gray-200/40"
                    } px-3 py-2 text-sm max-w-[80%] shadow-sm whitespace-pre-line`}
                  >
                    {msg.text}

                    {msg.options && (
                      <div className="mt-2 flex flex-col gap-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleServiceClick(opt)}
                            className="bg-gradient-to-r from-green-400 to-blue-400 text-white text-xs font-medium py-2 px-3 rounded-xl hover:scale-105 transition"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {(msg.text.includes("WhatsApp") ||
                      msg.text.includes("below")) && (
                      <div className="mt-2">
                        <Link
                          href="https://wa.me/917860225993?text=Hi%20InfraVibeTech%2C%20I%20need%20some%20help!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-green-600 transition"
                        >
                          <MessageCircle size={14} />
                          Chat on WhatsApp
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            <div className="relative z-10 border-t border-white/20 p-2 grid grid-cols-2 gap-2 bg-white/50 backdrop-blur-md">
              {[
                "About InfraVibeTech",
                "Our Services",
                "Get a Quote",
                "Contact Team",
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className="bg-white/70 hover:bg-white/90 text-gray-800 text-xs sm:text-sm py-2 px-2 rounded-xl transition font-medium shadow-sm hover:shadow-md"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
