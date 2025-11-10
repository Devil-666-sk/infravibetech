import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/cookie/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Infra VibeTech | Web Design, Digital Marketing, IT Support & Accessories in India",
  description:
    "Infra VibeTech provides complete IT and digital services — including Web Design & Development, SEO, Digital Marketing, Social Media Management, Technical Support, AMC, Laptop & PC Repair, Accessories & Peripherals, and Sales of New & Refurbished Systems. Your trusted IT partner in Punjab, India.",
  keywords: [
    "Infra VibeTech",
    "Infra Vibe Tech",
    "web design company",
    "web development services",
    "digital marketing agency",
    "SEO company India",
    "social media management",
    "technical support",
    "IT support",
    "computer AMC",
    "annual maintenance contract",
    "laptop repair",
    "PC repair",
    "refurbished laptops",
    "refurbished PCs",
    "laptop on rent",
    "computer rental",
    "laptop sales",
    "new laptop sales",
    "refurbished system sales",
    "exchange offers",
    "computer accessories",
    "IT accessories",
    "computer peripherals",
    "mouse and keyboard",
    "printer setup",
    "CCTV and networking accessories",
    "network cables and routers",
    "computer parts",
    "monitor and UPS",
    "business website design",
    "ecommerce development",
    "software company Punjab",
    "IT hardware solutions",
  ],
  openGraph: {
    title: "Infra VibeTech | Complete IT & Digital Solutions",
    description:
      "From digital growth to IT hardware — Infra VibeTech offers Web Design, SEO, Marketing, AMC, Repairs, Accessories & Peripherals, and more. One-stop technology partner in India.",
    url: "https://infravibetech.com",
    siteName: "Infra VibeTech",
    images: [
      {
        url: "https://infravibetech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Infra VibeTech - Complete IT & Digital Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://infravibetech.com",
  },
  metadataBase: new URL("https://infravibetech.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Infra VibeTech",
    image: "https://infravibetech.com/logo.png",
    "@id": "https://infravibetech.com",
    url: "https://infravibetech.com",
    telephone: "+91-7860225993",
    email: "infravibetech@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sunder Nagar Colony, Bhankharpur, Issapur Road",
      addressLocality: "Dera Bassi",
      addressRegion: "Punjab",
      postalCode: "140201",
      addressCountry: "IN",
    },
    description:
      "Infra VibeTech offers a complete range of IT and digital services — including Web Design, Development, SEO, Digital Marketing, Social Media Management, AMC, Laptop & PC Repair, IT Accessories & Peripherals, and Sales of New & Refurbished Systems with Exchange Offers. Providing reliable, affordable, and growth-focused technology services across India.",
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [
      "https://www.facebook.com/infravibetech",
      "https://www.instagram.com/infravibetech",
      "https://www.linkedin.com/company/infravibetech",
    ],
    serviceType: [
      "Website Design & Development",
      "SEO Optimization",
      "Digital Marketing (Google & Meta Ads)",
      "Social Media Management",
      "Technical Support & IT Maintenance",
      "Annual Maintenance Contract (AMC)",
      "Laptop & PC Repair",
      "Laptop & PC Accessories Sales",
      "Computer Peripherals Sales",
      "Printer & Scanner Setup",
      "CCTV Installation & Accessories",
      "Networking Accessories & Routers",
      "New Laptop & PC Sales",
      "Refurbished System Sales",
      "Exchange Offers",
      "Laptop & PC on Rent",
      "Custom Software & Web Apps",
      "Business Branding & Graphic Design",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MCV6EGCKKX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MCV6EGCKKX');
            `,
          }}
        />

        {/* ✅ LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
     