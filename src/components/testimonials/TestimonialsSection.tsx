"use client";

import { Star, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  { name: "Rahul Singh", role: "Startup Founder, Chandigarh", review: "InfraVibe Tech helped us generate quality leads within the first month. Their SEO strategy is result-oriented and transparent." },
  { name: "Priya Verma", role: "Boutique Owner, Zirakpur", review: "Our website looks premium and loads super fast. We’ve seen noticeable growth in walk-in customers." },
  { name: "Amit Sharma", role: "Retail Store Owner, Mohali", review: "Reliable IT AMC support and fast laptop repairs. Highly professional and trustworthy team." },
  { name: "Sneha Kapoor", role: "E-commerce Seller, Delhi", review: "Their digital marketing campaign boosted our online sales significantly." },
  { name: "Vikas Yadav", role: "Electronics Shop Owner", review: "Server installation and networking setup was done perfectly. Zero downtime." },
  { name: "Anjali Mehta", role: "Salon Owner", review: "Google Ads campaign delivered real customers. ROI was clearly visible." },
  { name: "Rohit Gupta", role: "Corporate Client", review: "Professional team with quick response time and excellent support." },
  { name: "Neha Tiwari", role: "Coaching Institute Director", review: "Website + SEO combo worked amazingly well for our admissions." },
  { name: "Sandeep Mishra", role: "Mobile Shop Owner", review: "CCTV installation and networking services were handled very smoothly." },
  { name: "Karan Malhotra", role: "Online Brand Founder", review: "Creative website design with strong branding. Very satisfied." },
  { name: "Pooja Singh", role: "Home Bakery Owner", review: "Their digital marketing brought consistent local orders." },
  { name: "Aditya Raj", role: "Freelancer", review: "Best IT support experience so far. Transparent pricing." },
  { name: "Simran Kaur", role: "Clothing Brand Owner", review: "SEO ranking improved within weeks. Highly recommended." },
  { name: "Manish Pandey", role: "Manufacturing Business", review: "Server setup & IT infrastructure handled professionally." },
  { name: "Nikita Chauhan", role: "Makeup Studio Owner", review: "Social media ads helped us increase bookings." },
  { name: "Deepak Kumar", role: "Hardware Store", review: "Laptop repair and networking services were fast and affordable." },
  { name: "Ritu Agarwal", role: "Local Business Owner", review: "Website development exceeded expectations." },
  { name: "Arjun Srivastava", role: "Startup Founder", review: "Clear communication and timely delivery." },
  { name: "Megha Saxena", role: "Marketing Client", review: "Strong SEO foundation and real growth in traffic." },
  { name: "Yash Thakur", role: "Electronics Dealer", review: "Excellent AMC support and genuine IT consultation." },
];

export default function PremiumTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const scrollContainer = scrollRef.current;
  if (!scrollContainer) return;

  let animationFrame: number;
  let scrollAmount = 0;

  const slide = () => {
    scrollAmount += 0.5;
    if (scrollAmount >= scrollContainer.scrollWidth / 2) {
      scrollAmount = 0;
    }
    scrollContainer.scrollLeft = scrollAmount;
    animationFrame = requestAnimationFrame(slide);
  };

  animationFrame = requestAnimationFrame(slide);

  return () => cancelAnimationFrame(animationFrame);
}, []);

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-cyan-50 px-6 md:px-16 overflow-hidden">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Trusted by 100+ Growing Businesses
        </h2>
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Reliable IT Support, Website Development & Digital Growth Solutions across India.
        </p>

        <div className="flex justify-center items-center gap-3 mt-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-semibold text-gray-800">5.0 Client Satisfaction</span>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden "
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-[320px] bg-white shadow-xl border border-gray-100 p-8 rounded-3xl transition hover:scale-105 duration-500"
          >
            <div className="flex items-center gap-1 text-green-600 text-xs mb-4">
              <ShieldCheck size={16} />
              Verified Client
            </div>

            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              “{item.review}”
            </p>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-gray-500 text-xs">{item.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <a
          href="tel:7860225993"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:scale-105 transition duration-300 px-10 py-4 rounded-2xl text-white font-semibold text-lg"
        >
          <Phone size={20} />
          Book Free Consultation
        </a>

        <p className="text-gray-500 mt-4 text-sm">
          Free IT Consultation • Transparent Pricing • Fast Support
        </p>
      </div>
    </section>
  );
}