"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle,
  Code2,
  Server,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    title: "Corporate Website Development",
    category: "Full Stack Web Development",
    icon: Code2,
    result: "40% increase in qualified inquiries",
    desc: "Built a scalable, SEO-optimized, high-performance website focused on lead generation and long-term business growth.",
    impact: "Converted visitors into paying clients within 30 days.",
  },
  {
    title: "E-Commerce Sales Platform",
    category: "Secure Online Store Setup",
    icon: ShoppingCart,
    result: "65% boost in online revenue",
    desc: "Developed a conversion-focused e-commerce platform with payment integration, inventory automation, and optimized checkout flow.",
    impact: "Reduced cart abandonment & increased repeat customers.",
  },
  {
    title: "IT Infrastructure Deployment",
    category: "Network & Server Solutions",
    icon: Server,
    result: "99.9% uptime reliability",
    desc: "Configured secure server architecture, firewall protection, and optimized internal network systems for operational efficiency.",
    impact: "Improved system stability & reduced downtime costs.",
  },
  {
    title: "SEO & Lead Generation Funnel",
    category: "Digital Growth Strategy",
    icon: TrendingUp,
    result: "3X lead generation growth",
    desc: "Optimized Google Business Profile, technical SEO, and designed a high-converting WhatsApp lead funnel.",
    impact: "Generated consistent inbound leads & measurable ROI.",
  },
];

export default function PortfolioSection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-4">
            Our Portfolio
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Technology That Builds Trust & Drives Sales
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At InfraVibe Tech, we combine advanced technology with smart business strategy.
            Our solutions are designed not just to look good — but to generate revenue.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl border border-gray-100 p-10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <Icon className="text-blue-600 w-7 h-7" />
                  </div>

                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-5 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex items-center gap-2 text-green-600 font-semibold mb-3">
                  <CheckCircle size={18} />
                  {project.result}
                </div>

                <p className="text-sm text-gray-500 italic mb-6">
                  {project.impact}
                </p>

                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                >
                  Launch Similar Project
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Metrics */}
        <div className="mt-28 bg-white rounded-3xl shadow-xl p-14 text-center border border-gray-100">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
            Proven Technology Partner for Growing Businesses
          </h3>

          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            <div>
              <h4 className="text-4xl font-bold text-blue-600">50+</h4>
              <p className="text-gray-600 mt-2">Successful Projects</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold text-blue-600">98%</h4>
              <p className="text-gray-600 mt-2">Client Retention Rate</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold text-blue-600">24/7</h4>
              <p className="text-gray-600 mt-2">Dedicated Support</p>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-gray-600 mb-10 text-lg">
            We don’t just build websites or systems — we create business growth engines
            that help you generate leads, increase sales, and build long-term credibility.
          </p>
        </div>

        {/* SALES CONVERSION SECTION */}
        <div className="mt-20 bg-blue-600 text-white rounded-3xl p-14 text-center shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Turn Your Business Into a Sales Machine?
          </h3>

          <p className="max-w-3xl mx-auto text-blue-100 mb-10 text-lg">
            Most businesses lose customers due to outdated websites, weak marketing,
            and poor technical setup. InfraVibe Tech builds high-converting digital
            systems designed to generate consistent leads and measurable revenue.
          </p>

          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            <div>
              <h4 className="text-4xl font-bold">↑ 3X</h4>
              <p className="text-blue-100 mt-2">Lead Growth</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">↑ 65%</h4>
              <p className="text-blue-100 mt-2">Sales Conversion Increase</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold">↓ 40%</h4>
              <p className="text-blue-100 mt-2">Operational Costs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:7860225993"
              className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition shadow-lg"
            >
              Call Now & Get Free Business Audit
            </a>

            <a
              href="/contact"
              className="border border-white px-10 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition"
            >
              Get Custom Growth Strategy
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
