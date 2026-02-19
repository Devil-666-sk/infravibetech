"use client";

import { useEffect, useState } from "react";
import { Star, Phone } from "lucide-react";

const users = [
  { name: "Amit Sharma", business: "Retail Store Owner" },
  { name: "Priya Verma", business: "Boutique Owner" },
  { name: "Rahul Singh", business: "Startup Founder" },
  { name: "Sneha Kapoor", business: "E-commerce Seller" },
  { name: "Vikas Yadav", business: "Electronics Shop" },
  { name: "Anjali Mehta", business: "Salon Owner" },
  { name: "Rohit Gupta", business: "Laptop Repair Client" },
  { name: "Neha Tiwari", business: "Coaching Institute" },
  { name: "Sandeep Mishra", business: "Mobile Shop" },
  { name: "Karan Malhotra", business: "Online Brand" },
  { name: "Pooja Singh", business: "Home Bakery" },
  { name: "Aditya Raj", business: "Freelancer" },
  { name: "Simran Kaur", business: "Clothing Brand" },
  { name: "Manish Pandey", business: "Service Client" },
  { name: "Nikita Chauhan", business: "Makeup Studio" },
  { name: "Deepak Kumar", business: "Hardware Shop" },
  { name: "Ritu Agarwal", business: "Local Business" },
  { name: "Arjun Srivastava", business: "Startup Owner" },
  { name: "Megha Saxena", business: "Marketing Client" },
  { name: "Yash Thakur", business: "Electronics Dealer" },
  { name: "Shivam Dubey", business: "Laptop Service" },
  { name: "Kavita Joshi", business: "Small Business" },
  { name: "Abhishek Verma", business: "Online Seller" },
  { name: "Tanya Arora", business: "Brand Owner" },
  { name: "Gaurav Singh", business: "Retail Store" },
  { name: "Ayesha Khan", business: "Service Client" },
  { name: "Harsh Jain", business: "Startup Client" },
  { name: "Komal Mishra", business: "Coaching Owner" },
  { name: "Varun Patel", business: "Retail Client" },
  { name: "Ishita Roy", business: "Digital Services Client" },
];

const reviews = [
  "InfraVibe Tech built our website professionally and improved our Google visibility within weeks.",
  "Very reliable laptop repair service. Fast delivery and transparent pricing.",
  "Their SEO and marketing strategy helped us generate genuine business leads.",
  "Professional team with clear communication and on-time project completion.",
  "We saw real growth after their digital marketing support.",
];

const testimonials = users.map((u, i) => ({
  ...u,
  review: reviews[i % reviews.length],
  rating: 5,
}));

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getCard = (offset: number) =>
    testimonials[(index + offset + testimonials.length) % testimonials.length];

  return (
    <section className="w-full py-24 bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-4 sm:px-6 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Trusted by Growing Businesses
        </h2>
        <p className="text-gray-600">
          Businesses rely on InfraVibe Tech for digital growth & technical support.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="flex items-center justify-center gap-6 w-full max-w-6xl">
          <Card data={getCard(-1)} />
          <Card data={getCard(0)} center />
          <Card data={getCard(1)} />
        </div>
      </div>

      <div className="mt-20 text-center">
        <a
          href="tel:7860225993"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl shadow-lg transition"
        >
          <Phone size={18} /> Get Free Consultation
        </a>
      </div>
    </section>
  );
}

function Card({ data, center }: any) {
  return (
    <div
      className={`relative transition-all duration-500 ease-out w-[90%] sm:w-[45%] md:w-[30%] ${
        center
          ? "scale-100 opacity-100 z-20"
          : "scale-90 opacity-40 blur-[3px] hidden sm:block"
      }`}
    >
      {center && (
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-2xl rounded-3xl"></div>
      )}

      <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 md:p-10 text-center border border-white/40 hover:shadow-[0_15px_60px_rgba(0,0,0,0.12)] transition">
        
        <div className="flex justify-center mb-5 gap-1">
          {[...Array(data.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm"
            />
          ))}
        </div>

        <p className="text-gray-700 mb-7 text-sm md:text-base leading-relaxed font-light">
          “{data.review}”
        </p>

        <div className="w-10 h-[2px] bg-blue-500/40 mx-auto mb-5 rounded-full"></div>

        <h4 className="font-semibold text-lg text-gray-900 tracking-wide">
          {data.name}
        </h4>
        <p className="text-sm text-gray-500 mt-1">{data.business}</p>
      </div>
    </div>
  );
}
