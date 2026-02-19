"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Local Business Website",
    category: "Website Development",
    result: "Online presence established",
    desc: "Designed a professional business website with mobile optimization and SEO setup for better visibility.",
  },
  {
    title: "Retail Store SEO Setup",
    category: "SEO Optimization",
    result: "Improved Google ranking",
    desc: "On-page SEO, keyword targeting, and Google Business Profile optimization for local reach.",
  },
  {
    title: "Startup Branding Kit",
    category: "Branding",
    result: "Professional brand identity",
    desc: "Logo, color theme, and social media creatives designed for consistent brand presence.",
  },
  {
    title: "Laptop Service Campaign",
    category: "Lead Generation",
    result: "Increased service inquiries",
    desc: "Ran local ads and WhatsApp lead funnel to generate repair service customers.",
  },
  {
    title: "Social Media Growth",
    category: "Digital Marketing",
    result: "Higher engagement",
    desc: "Content strategy + ad creatives that boosted reach and engagement for a local brand.",
  },
  {
    title: "Business Website Redesign",
    category: "UI/UX Upgrade",
    result: "Better user experience",
    desc: "Modern redesign focusing on speed, mobile responsiveness, and conversion layout.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Projects That Build Trust
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We deliver practical digital and technical solutions that help
          businesses grow with confidence.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 p-6 transition-all duration-300"
          >
            <p className="text-xs font-semibold text-blue-600 mb-2 uppercase">
              {project.category}
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 text-sm mb-4">{project.desc}</p>

            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <CheckCircle size={16} />
              {project.result}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Stats */}
      <div className="mt-20 grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">50+</h3>
          <p className="text-gray-600">Projects Delivered</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">98%</h3>
          <p className="text-gray-600">Client Satisfaction</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
          <p className="text-gray-600">Support Available</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          Let’s Build Something Great for Your Business
        </h3>

        <a
          href="tel:7860225993"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          Start Your Project <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}
