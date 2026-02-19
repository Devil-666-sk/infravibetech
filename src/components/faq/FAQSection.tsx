"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Script from "next/script";

const faqs = [
  {
    q: "What services does InfraVibe Tech provide?",
    a: "InfraVibe Tech provides professional website development, SEO services, digital marketing, social media management, lead generation, laptop & PC repair, and new/refurbished laptop sales.",
  },
  {
    q: "How long does it take to develop a business website?",
    a: "A standard responsive business website typically takes 5–10 working days depending on features, design requirements, and content availability.",
  },
  {
    q: "Do you provide SEO services to improve Google rankings?",
    a: "Yes, we offer on-page and off-page SEO strategies focused on improving Google search rankings, increasing website traffic, and generating quality leads.",
  },
  {
    q: "Do you offer ongoing website maintenance and technical support?",
    a: "Yes, we provide long-term website maintenance, technical support, and performance optimization services.",
  },
  {
    q: "Can small businesses afford digital marketing services?",
    a: "Absolutely. We offer budget-friendly digital marketing solutions tailored for startups and small businesses.",
  },
  {
    q: "Do you provide laptop and PC repair services?",
    a: "Yes, we offer professional laptop and PC repair services, including hardware upgrades and troubleshooting support.",
  },
  {
    q: "Why should I choose InfraVibe Tech?",
    a: "InfraVibe Tech combines digital expertise and technical reliability under one roof, offering transparent communication, professional service, and long-term business partnership support.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      <section className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About Our Digital & Technical Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            Find answers to common questions about website development, SEO services,
            digital marketing, and laptop repair solutions provided by InfraVibe Tech.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-blue-600 w-5 h-5 flex-shrink-0" />
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                    {faq.q}
                  </h3>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    active === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === i ? "max-h-40 opacity-100 pb-5 px-5" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-700 mb-4 font-medium">
            Still have questions about our services?
          </p>
          <a
            href="tel:7860225993"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </>
  );
}
