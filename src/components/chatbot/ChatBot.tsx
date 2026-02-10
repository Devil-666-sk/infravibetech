"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.webp";

interface Message {
  from: "bot" | "user";
  text: string;
  options?: string[];
}

const SERVICES = [
  "🌐 Website Design & Development",
  "🛒 E-Commerce Website",
  "📈 SEO (Local + National)",
  "📢 Google Ads & Social Media Ads",
  "🎯 Lead Generation Campaigns",
  "📱 Social Media Management",
  "🛠 Laptop / PC Repair & AMC",
  "💻 New & Refurbished Laptop Sales",
  "🖥 Laptop on Rent",
  "🔐 Server, Networking & Backup",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "👋 Hi! Welcome to **InfraVibeTech** — IT & Digital Growth Experts.",
    },
    {
      from: "bot",
      text:
        "We help businesses grow with websites, SEO, ads & complete IT support.\n\nHow can I help you today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOption = (option: string) => {
    let reply: Message = { from: "bot", text: "" };

    if (option === "About InfraVibeTech") {
      reply.text =
        "InfraVibeTech provides **Website Development, SEO, Digital Marketing, Lead Generation, IT Support, AMC & Laptop Services** for startups and businesses.\n\n📍 Serving PAN India.";
    }

    if (option === "Our Services") {
      reply = {
        from: "bot",
        text: "Here are our professional services 👇",
        options: SERVICES,
      };
    }

    if (option === "Get Free Demo") {
      reply.text =
        "🎉 Great choice!\n\nWe offer **FREE website audit / FREE demo**.\nClick below to connect instantly on WhatsApp 👇";
    }

    if (option === "Contact Team") {
      reply.text =
        "📞 Our team is available on WhatsApp for instant support & quotes 👇";
    }

    setMessages((prev) => [...prev, { from: "user", text: option }, reply]);
  };

  const handleServiceClick = (service: string) => {
    const whatsappLink = `https://wa.me/917860225993?text=Hi%20InfraVibeTech!%20I%20need%20${encodeURIComponent(
      service
    )}`;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: service },
      {
        from: "bot",
        text:
          `✅ *${service}*\n\nOur expert will assist you shortly.\nClick WhatsApp below 👇`,
      },
    ]);

    setTimeout(() => window.open(whatsappLink, "_blank"), 600);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-xl"
        whileTap={{ scale: 0.9 }}
      >
        {open ? <X /> : <MessageSquare />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed bottom-20 right-4 sm:right-6 z-40 w-[92%] sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 flex items-center gap-2">
              <Image src={logo} alt="InfraVibeTech" className="w-7 h-7" />
              <span className="font-semibold">InfraVibe Assistant</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-xl max-w-[80%] ${
                      msg.from === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.text}

                    {msg.options && (
                      <div className="mt-2 space-y-2">
                        {msg.options.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => handleServiceClick(opt)}
                            className="block w-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs py-2 rounded-lg"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}

                    {msg.text.includes("WhatsApp") && (
                      <Link
                        href="https://wa.me/917860225993"
                        target="_blank"
                        className="inline-flex mt-2 items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-lg text-xs"
                      >
                        <MessageCircle size={14} />
                        WhatsApp Now
                      </Link>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Buttons */}
            <div className="grid grid-cols-2 gap-2 p-2 border-t">
              {[
                "About InfraVibeTech",
                "Our Services",
                "Get Free Demo",
                "Contact Team",
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className="bg-gray-100 hover:bg-gray-200 text-xs py-2 rounded-xl"
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
