"use client";

import { useState } from "react";
import {
  Laptop,
  Headset,
  Cpu,
  ShoppingCart,
  ServerCog,
  DatabaseBackup,
  Code2,
  BarChart3,
  UsersRound,
} from "lucide-react";

import ServiceEnquiryModal from "@/components/serviceform/ServiceEnquiryModal";

/* ================= TECHNICAL SERVICES ================= */

const technicalServices = [
  {
    title: "Laptop, PC & Printer Repair",
    description:
      "Professional repair services for laptops, desktops & printers including hardware & software issues.",
    icon: Laptop,
  },
  {
    title: "IT Support & AMC Services",
    description:
      "On-site & remote IT support with annual maintenance contracts (AMC) for offices, shops and enterprises.",
    icon: Headset,
  },
  {
    title: "Upgrade Your System",
    description:
      "System performance upgrades including RAM, SSD, Windows installation & optimization.",
    icon: Cpu,
  },
  {
    title: "Laptop, PC & Server Sales",
    description:
      "Sales, rental and deployment of laptops, desktops & enterprise servers with warranty support.",
    icon: ShoppingCart,
  },
  {
    title: "Server Setup & Networking",
    description:
      "Server installation, firewall setup, networking, structured cabling & security solutions.",
    icon: ServerCog,
  },
  {
    title: "Data Backup & Security",
    description:
      "Secure data backup, recovery solutions & system protection for business continuity.",
    icon: DatabaseBackup,
  },
];

/* ================= DIGITAL SERVICES ================= */

const digitalServices = [
  {
    title: "Website Development",
    description:
      "Fast, responsive & SEO-friendly websites designed to convert visitors into customers.",
    icon: Code2,
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Search engine optimization, Google Ads & social media marketing to grow your online presence.",
    icon: BarChart3,
  },
  {
    title: "Lead Generation Services",
    description:
      "High-quality lead generation campaigns designed to deliver real enquiries and business growth.",
    icon: UsersRound,
  },
];

export default function CoreServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <>
      <section className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= TECHNICAL ================= */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Technical Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
              Complete IT infrastructure, hardware support & system solutions for
              smooth, secure and scalable business operations.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {technicalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedService(service.title)}
                    className="group cursor-pointer relative rounded-2xl bg-white p-8 shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white mb-6 group-hover:scale-110 transition">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <span className="absolute bottom-6 right-6 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition">
                      Enquire now →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= DIGITAL ================= */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
              Digital Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
              Smart digital solutions to boost visibility, generate leads and grow
              your business online.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {digitalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedService(service.title)}
                    className="group cursor-pointer relative rounded-2xl bg-white p-8 shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 text-white mb-6 group-hover:scale-110 transition">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <span className="absolute bottom-6 right-6 text-sm text-green-600 opacity-0 group-hover:opacity-100 transition">
                      Enquire now →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedService && (
        <ServiceEnquiryModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}
