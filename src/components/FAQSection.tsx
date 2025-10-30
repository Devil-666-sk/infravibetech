"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does InfraVibe Tech provide?",
    answer:
      "We offer complete digital solutions including Web Design, Web Development, SEO, Digital Marketing, Branding, and Website Maintenance — all crafted to help your business grow online.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "On average, a standard business website takes around 2–4 weeks depending on the project size, design complexity, and required features.",
  },
  {
    question: "Do you provide SEO and digital marketing together?",
    answer:
      "Yes! Our team provides both — SEO for organic ranking and Digital Marketing for paid promotions — ensuring complete online visibility and lead generation.",
  },
  {
    question: "Will my website be mobile-friendly and fast?",
    answer:
      "Absolutely. We use modern frameworks like Next.js and responsive design techniques to ensure your website loads fast and performs perfectly on all devices.",
  },
  {
    question: "How can I get started with InfraVibe Tech?",
    answer:
      "Simply contact us through our website form or WhatsApp. Our team will connect with you for a quick consultation to understand your goals and start your project.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="faqs"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-premium text-white overflow-hidden"
    >
      {/* === Soft Gradient Glow Background === */}
      <div className="absolute top-0 left-0 w-[25rem] h-[25rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* === Gradient Main Heading === */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
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
          Frequently Asked Questions
        </motion.h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Find quick answers to common questions about our services, process,
          and how we help your business grow digitally.
        </p>

        {/* === FAQ Accordion === */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur-xl shadow-[0_0_25px_-5px_rgba(59,130,246,0.4)] hover:shadow-[0_0_45px_-5px_rgba(59,130,246,0.6)] transition-all duration-500"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {/* === Gradient Question Text === */}
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
                  className="text-lg md:text-xl font-semibold"
                >
                  {faq.question}
                </motion.h3>

                <ChevronDown
                  className={`w-6 h-6 text-teal-300 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
