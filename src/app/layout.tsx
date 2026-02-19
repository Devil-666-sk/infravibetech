import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import CookieConsent from "@/components/cookie/CookieConsent";
import FloatingActions from "@/components/floatingactions/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* =======================
   SEO METADATA (GLOBAL)
======================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://infravibetech.com"),

  title:
    "InfraVibe Tech – IT Support, Laptop, PC & Server Sales, Web Design & Digital Marketing Company in India",

  description:
    "GST registered IT company in Zirakpur providing IT Support, AMC Services, Laptop-PC-Server Sales, Repairs, Networking, CCTV Installation, Website Development, SEO & Google Ads across India.",

  keywords: [
    "IT support Zirakpur",
    "IT support Chandigarh",
    "Laptop repair Zirakpur",
    "Computer AMC services",
    "Server installation Punjab",
    "CCTV installation Zirakpur",
    "Website development company India",
    "SEO company India",
    "Digital marketing agency India"
  ],

  authors: [{ name: "InfraVibe Tech" }],
  creator: "InfraVibe Tech",
  publisher: "InfraVibe Tech",

  alternates: {
    canonical: "https://infravibetech.com",
  },

  openGraph: {
    title: "InfraVibe Tech | IT & Digital Experts",
    description:
      "Complete IT Support, Laptop-PC Sales, Server Setup & Digital Marketing Services.",
    url: "https://infravibetech.com",
    siteName: "InfraVibe Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://infravibetech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InfraVibe Tech IT Services",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =======================
   ROOT LAYOUT
======================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "InfraVibe Tech",
    url: "https://infravibetech.com",
    logo: "https://infravibetech.com/logo.png",
    image: "https://infravibetech.com/office.jpg",
    telephone: "+917860225993",
    email: "info@infravibetech.com",
    priceRange: "₹₹",

    address: {
      "@type": "PostalAddress",
      streetAddress: "Bhankharpur",
      addressLocality: "Zirakpur",
      addressRegion: "Punjab",
      postalCode: "140201",
      addressCountry: "IN"
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.5801,
      longitude: 76.8530
    },

    openingHours: "Mo-Sa 09:00-19:00",

    areaServed: [
      "Zirakpur",
      "Chandigarh",
      "Punjab",
      "Haryana",
      "Himachal Pradesh"
    ],

    sameAs: [
      "https://www.facebook.com/infravibetech",
      "https://www.instagram.com/infra_vibe_tech",
      "https://www.linkedin.com/company/infravibetech"
    ]
  };

  return (
    <html lang="en">
      <head>

        {/* GEO SEO */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Zirakpur" />
        <meta name="geo.position" content="30.6043045;76.8353311" />
        <meta name="ICBM" content="30.6043045, 76.8353311" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MCV6EGCKKX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MCV6EGCKKX');

              function trackCall() {
                gtag('event', 'click_to_call', {
                  event_category: 'engagement',
                  event_label: 'phone_call'
                });
              }

              function trackWhatsApp() {
                gtag('event', 'click_whatsapp', {
                  event_category: 'engagement',
                  event_label: 'whatsapp_message'
                });
              }
            `,
          }}
        />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        
        <FloatingActions />     
        <CookieConsent />
      </body>
    </html>
  );
}
