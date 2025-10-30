"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import heroImg from "@/assets/logo.png";
import {
  Cpu,
  Cloud,
  Rocket,
  MonitorSmartphone,
  LineChart,
  Wrench,
  Share2,
  Network,
  ShieldCheck,
  MousePointer2,
  LucideIcon,
} from "lucide-react";

/* ================= Floating Icon Component ================= */
interface FloatingIconProps {
  Icon: LucideIcon;
  color?: string;
  position?: string;
  duration?: number;
  distance?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  Icon,
  color = "text-blue-400/60",
  position = "top-0 left-0",
  duration = 8,
  distance = 20,
}) => (
  <motion.div
    className={`absolute ${position} ${color}`}
    animate={{ y: [0, distance, 0] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
  >
    <Icon size={28} />
  </motion.div>
);

/* ================= Hero Section ================= */
export default function HeroSection() {
  return (
    <>
      {/* ==== SEO Meta Tags ==== */}
      <Head>
        <title>
          InfraVibe Tech — Web Design, Development & Digital Marketing in Punjab
        </title>
        <meta
          name="description"
          content="InfraVibe Tech is a creative web design and digital marketing company in Punjab offering modern website development, SEO, and social media growth solutions."
        />
        <meta
          name="keywords"
          content="InfraVibe Tech, web design Punjab, web development Mohali, digital marketing Punjab, SEO services Chandigarh, social media management, IT solutions, Bhankharpur tech company"
        />
        <meta name="author" content="InfraVibe Tech" />
        <link rel="canonical" href="https://www.infravibetech.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="InfraVibe Tech — Empowering Businesses Digitally"
        />
        <meta
          property="og:description"
          content="Grow your business online with modern web design, SEO, and digital marketing by InfraVibe Tech, Punjab."
        />
        <meta property="og:url" content="https://www.infravibetech.com/" />
        <meta
          property="og:image"
          content="https://www.infravibetech.com/assets/og-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="InfraVibe Tech — Web Design & SEO Experts in Punjab"
        />
        <meta
          name="twitter:description"
          content="InfraVibe Tech builds modern websites and offers digital marketing & SEO services in Punjab, India."
        />
        <meta
          name="twitter:image"
          content="https://www.infravibetech.com/assets/og-banner.jpg"
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "InfraVibe Tech",
              image: "https://www.infravibetech.com/assets/logo.png",
              "@id": "https://www.infravibetech.com",
              url: "https://www.infravibetech.com",
              telephone: "+917860225993",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sunder Nagar Colony, Bhankharpur",
                addressLocality: "Mohali",
                addressRegion: "Punjab",
                postalCode: "140201",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/infravibetech",
                "https://www.instagram.com/infravibetech",
                "https://www.linkedin.com/company/infravibetech",
              ],
            }),
          }}
        />
      </Head>

      {/* ==== Hero Section ==== */}
      <section
        className="relative w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center 
                   bg-premium text-white overflow-hidden 
                   px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 2xl:px-64 
                   py-24 md:py-28 lg:py-32 xl:py-36"
      >
        {/* ==== Gradient Glows ==== */}
        <div className="absolute -top-24 left-0 w-[28rem] h-[28rem] bg-blue-500/25 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-teal-400/20 blur-[160px] rounded-full"></div>

        {/* ==== Subtle Grid ==== */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e223a_1px,transparent_1px),linear-gradient(to_bottom,#0e223a_1px,transparent_1px)] bg-[size:60px_60px] opacity-10"></div>

        {/* ==== Floating Tech Icons ==== */}
        <FloatingIcon
          Icon={Cpu}
          color="text-teal-400/60"
          position="top-20 left-10"
          duration={6}
          distance={20}
        />
        <FloatingIcon
          Icon={Cloud}
          color="text-blue-400/60"
          position="top-[25%] right-14"
          duration={7}
          distance={20}
        />
        <FloatingIcon
          Icon={Rocket}
          color="text-cyan-400/60"
          position="bottom-28 left-[40%]"
          duration={6.5}
          distance={25}
        />
        <FloatingIcon
          Icon={MonitorSmartphone}
          color="text-indigo-400/60"
          position="top-[45%] left-10"
          duration={8}
          distance={20}
        />
        <FloatingIcon
          Icon={LineChart}
          color="text-pink-400/60"
          position="bottom-16 right-[35%]"
          duration={7}
          distance={18}
        />
        <FloatingIcon
          Icon={Wrench}
          color="text-green-400/60"
          position="top-[30%] left-[60%]"
          duration={9}
          distance={22}
        />
        <FloatingIcon
          Icon={Share2}
          color="text-sky-400/60"
          position="bottom-[25%] right-10"
          duration={8.5}
          distance={25}
        />
        <FloatingIcon
          Icon={Network}
          color="text-teal-300/60"
          position="top-[15%] right-[40%]"
          duration={10}
          distance={18}
        />
        <FloatingIcon
          Icon={ShieldCheck}
          color="text-emerald-400/60"
          position="top-[60%] right-[50%]"
          duration={9}
          distance={20}
        />

        {/* ==== Left Content ==== */}
        <motion.div
          className="z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left 
                     space-y-6 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ backgroundPositionX: "0%" }}
            animate={{ backgroundPositionX: "200%" }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage:
                "linear-gradient(90deg,#00ffff,#3b82f6,#14b8a6,#00ffff)",
              backgroundSize: "200%",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Empowering <span className="text-white">Businesses</span>{" "}
            <br className="hidden sm:block" /> Digitally
          </motion.h1>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-base md:text-lg leading-relaxed">
            <span className="text-teal-400 font-semibold">InfraVibe Tech</span>{" "}
            helps your brand grow with{" "}
            <span className="text-blue-400 font-medium">modern web design</span>
            ,{" "}
            <span className="text-emerald-400 font-medium">
              custom development
            </span>
            , <span className="text-pink-400 font-medium">SEO</span> &{" "}
            <span className="text-cyan-400 font-medium">
              digital marketing
            </span>{" "}
            that delivers measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 justify-center md:justify-start">
            <Link
              href="#services"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 
                         font-semibold shadow-lg hover:shadow-teal-500/40 
                         hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>

            <Link
              href="https://wa.me/917860225993?text=Hi%20InfraVibe%20Tech%2C%20I%20want%20to%20know%20more!"
              target="_blank"
              className="px-8 py-3 rounded-xl border border-white/30 
                         hover:border-teal-400 text-white font-semibold 
                         backdrop-blur-md hover:bg-white/10 
                         transition-all duration-300"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </motion.div>

        {/* ==== Right Logo ==== */}
        <motion.div
          className="z-10 flex-1 flex justify-center md:justify-end items-center mb-14 sm:mb-16 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px]
                        rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 
                        shadow-[0_0_80px_-15px_rgba(0,255,200,0.4)] overflow-hidden group"
          >
            <Image
              src={heroImg}
              alt="InfraVibe Tech Logo - Web Design & Digital Marketing Company in Punjab"
              fill
              className="object-contain p-6 md:p-8 lg:p-10 group-hover:scale-110 transition-all duration-500"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* ==== Scroll Indicator ==== */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MousePointer2 className="w-6 h-6 animate-pulse" />
        </motion.div>
      </section>
    </>
  );
}
