"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Aman Thakur",
    role: "Local Shop Owner",
    review:
      "Infra VibeTech redesigned my website and optimized it for local SEO. Now my shop appears on Google Maps and I’m getting regular online inquiries!",
  },
  {
    name: "Shreya Patel",
    role: "Startup Founder",
    review:
      "Their digital marketing and social media strategies helped my new brand gain visibility fast. The team is super creative and supportive!",
  },
  {
    name: "Rohit Bansal",
    role: "E-commerce Entrepreneur",
    review:
      "InfraVibe handled everything — from website design to Google Ads and SEO. My online sales have grown over 70% since launch!",
  },
  {
    name: "Pooja Nair",
    role: "Freelance Designer",
    review:
      "Very professional and easy to work with. They optimized my portfolio site for better ranking, and now I’m getting clients through organic traffic!",
  },
  {
    name: "Vivek Sharma",
    role: "Restaurant Owner",
    review:
      "Thanks to Infra VibeTech’s local SEO and Google Business setup, my restaurant started showing up in top searches nearby — amazing results!",
  },
  {
    name: "Sneha Kapoor",
    role: "Digital Creator",
    review:
      "The InfraVibe team built a clean, fast-loading website for my blog and helped boost my content visibility through SEO and backlinks.",
  },
  {
    name: "Ankit Yadav",
    role: "Small Business Owner",
    review:
      "Loved their website maintenance and performance improvement service. My old site is now faster, mobile-friendly, and fully optimized.",
  },
  {
    name: "Divya Malhotra",
    role: "Marketing Manager",
    review:
      "We hired Infra VibeTech for SEO and PPC management — and their results were excellent! Our brand started ranking for key industry terms.",
  },
];

export default function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // large screen
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // tablet
        settings: { slidesToShow: 1, centerMode: false },
      },
      {
        breakpoint: 480, // mobile
        settings: { slidesToShow: 1, dots: true, centerMode: false },
      },
    ],
  };

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-premium text-white overflow-hidden"
    >
      {/* === Gradient Glow Background === */}
      <div className="absolute top-0 left-0 w-[20rem] h-[20rem] bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-gradient-to-l from-teal-400/20 to-blue-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* === Section Heading === */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4"
          >
            What Our Clients Say
          </motion.h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by{" "}
            <span className="text-teal-400 font-semibold">business owners</span>,{" "}
            <span className="text-blue-400 font-semibold">creators</span>, and{" "}
            <span className="text-pink-400 font-semibold">startups</span> across
            India — <strong>Infra VibeTech</strong> delivers real results through
            modern web design, SEO, and digital marketing.
          </p>
        </motion.div>

        {/* === Carousel === */}
        <Slider {...settings} className="max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="px-3 sm:px-4"
            >
              <div className="p-5 sm:p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_0_25px_-5px_rgba(45,212,191,0.4)] text-left hover:shadow-[0_0_45px_-5px_rgba(45,212,191,0.6)] transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
                  “{t.review}”
                </p>

                {/* Gradient Name */}
                <motion.h4
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
                  className="font-semibold text-base sm:text-lg"
                >
                  {t.name}
                </motion.h4>

                <p className="text-gray-400 text-xs sm:text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
