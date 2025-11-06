"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Tathastu Realtor – Real Estate Website & Branding",
    category: "Web Design & Digital Marketing",
    description:
      "A complete real estate website solution for Tathastu Realtor featuring dynamic property listings, Google-integrated maps, and a strong branding campaign for Zirakpur’s Silver City project.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    link: "#",
  },
  {
    title: "Silver City Zirakpur – Property Microsite + SEO",
    category: "Landing Page + SEO Optimization",
    description:
      "Developed a fast-loading property microsite with SEO optimization and local Google ranking strategy for Zirakpur’s premium real estate project.",
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    link: "#",
  },
  {
    title: "TechSmart Computers – Refurbished Laptop Store",
    category: "E-Commerce + Web Development",
    description:
      "Designed an online store for refurbished laptops with product filters, pricing integration, and responsive UI for better user experience and sales conversion.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    link: "#",
  },
  {
    title: "Elite Fitness Hub – Social Media & Ad Campaign",
    category: "Social Media Marketing",
    description:
      "Managed creative social media campaigns, fitness branding, and lead generation ads to increase gym memberships by 140% in 2 months.",
    img: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642",
    link: "#",
  },
  {
    title: "EduLift Institute – Website + Lead Generation",
    category: "Web Development & Marketing",
    description:
      "Developed a responsive education institute website integrated with automated lead capture and WhatsApp inquiry system, driving 3x more enrollments.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    link: "#",
  },
  {
    title: "City Laptop Care – Repair & Service Portal",
    category: "Service Website Development",
    description:
      "Built a complete laptop and PC repair service website for online appointment booking, live chat support, and Google review integration.",
    img: "https://images.unsplash.com/photo-1581093588401-22e8c5f62f4d",
    link: "#",
  },
  {
    title: "Panipat Real Homes – Real Estate Landing Page",
    category: "Landing Page Design + SEO",
    description:
      "Developed a modern real estate landing page optimized for Facebook & Google ads with integrated lead tracking and CRM setup.",
    img: "https://images.unsplash.com/photo-1600585154207-4f1e9a9b1a9c",
    link: "#",
  },
  {
    title: "Infra VibeTech – Corporate Portfolio Website",
    category: "Corporate Branding + Web Design",
    description:
      "Designed and developed Infra VibeTech’s official portfolio site featuring premium gradient UI, glass morphic effects, SEO structure, and animation-driven UX.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "#",
  },
];

export default function ProjectsPage() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="min-h-screen bg-premium pt-28 pb-16 px-6 sm:px-10 md:px-16 font-[Poppins]">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
        >
          Our Client Projects & Success Stories
        </motion.h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Explore how <strong>Infra VibeTech</strong> has helped businesses grow
          with web design, marketing, and IT solutions — from real estate to tech.
        </p>
      </div>

      <Slider {...settings}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-4"
          >
            <div
              className="group relative bg-white/10 border border-white/20 rounded-2xl backdrop-blur-xl 
                          shadow-[0_0_20px_rgba(0,200,150,0.15)] overflow-hidden 
                          hover:shadow-[0_0_35px_rgba(0,200,150,0.3)] transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-green-400 font-medium mb-2">
                  {proj.category}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {proj.description}
                </p>
                <a
                  href={proj.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 hover:brightness-125"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>

      <div className="text-center mt-16">
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white text-sm sm:text-base
          bg-gradient-to-r from-green-400 via-blue-400 to-teal-400
          shadow-[0_0_25px_rgba(0,200,150,0.4)]
          hover:shadow-[0_0_40px_rgba(0,200,150,0.6)]
          transition-all duration-300"
        >
          Start Your Project With Us 🚀
        </motion.a>
      </div>
    </section>
  );
}
