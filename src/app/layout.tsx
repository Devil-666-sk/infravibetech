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
  metadataBase: new URL("https://infravibetech.com"),

  title:
    "InfraVibe Tech – IT Support, Laptop, PC & Server Sales, Web Design & Digital Marketing Company in India | GST Registered",

  description:
    "InfraVibe Tech – Empowering Businesses Digitally & Technically. GST Registered IT Company offering Technical Support, AMC Services, Laptop, PC & Server Sales, Repairs, Rentals, Networking, CCTV, Website Development, SEO, Google Ads & Social Media Marketing across India.",

  keywords: [
    "InfraVibe Tech",
    "IT support Punjab Haryana Himachal",
    "Technical support near me",
    "Computer AMC services",
    "Laptop PC server sales India",
    "Server installation services",
    "Laptop repair near me",
    "Computer repair Zirakpur",
    "Networking services Punjab",
    "CCTV installation India",
    "Website development company India",
    "SEO company India",
    "Digital marketing agency India",
    "Google Ads expert",
    "Social media marketing services",
    "Lead generation agency",
    "GST registered IT company"
  ],

  authors: [{ name: "InfraVibe Tech" }],
  creator: "InfraVibe Tech",
  publisher: "InfraVibe Tech",

  alternates: {
    canonical: "https://infravibetech.com",
  },

  openGraph: {
    title: "InfraVibe Tech | Empowering Businesses Digitally & Technically",
    description:
      "Complete IT Support, Laptop-PC-Server Sales, Repairs, AMC & Digital Marketing Solutions.",
    url: "https://infravibetech.com",
    siteName: "InfraVibe Tech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://infravibetech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InfraVibe Tech Professional IT Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "InfraVibe Tech | IT & Digital Experts",
    description:
      "Technical Support, Server Setup, Laptop-PC Sales & Digital Marketing.",
    images: ["https://infravibetech.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://infravibetech.com/#organization",
        name: "InfraVibe Tech",
        slogan: "Empowering Businesses Digitally & Technically",
        url: "https://infravibetech.com",
        logo: "https://infravibetech.com/logo.png",
        email: "info@infravibetech.com",
        telephone: "+91-7860225993",
        taxID: "03GTXPK5286G1Z1",
        sameAs: [
          "https://www.facebook.com/infravibetech",
          "https://www.instagram.com/infra_vibe_tech",
          "https://www.linkedin.com/company/infravibetech"
        ]
      },

      {
        "@type": "LocalBusiness",
        "@id": "https://infravibetech.com/#localbusiness",
        name: "InfraVibe Tech",
        image: "https://infravibetech.com/office.jpg",
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
          latitude: "30.5801",
          longitude: "76.8530"
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
          opens: "09:00",
          closes: "19:00"
        }
      },

      {
        "@type": "Service",
        "serviceType": "IT Technical Support, Networking, AMC & On-Site IT Services",
        provider: { "@id": "https://infravibetech.com/#organization" },
        areaServed: [
          { "@type": "State", "name": "Punjab" },
          { "@type": "State", "name": "Haryana" },
          { "@type": "State", "name": "Himachal Pradesh" },
          { "@type": "City", "name": "Chandigarh" }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Laptop, PC & Server Sales, Rental & Repair Services",
        provider: { "@id": "https://infravibetech.com/#organization" },
        areaServed: [
          { "@type": "State", "name": "Punjab" },
          { "@type": "State", "name": "Haryana" },
          { "@type": "State", "name": "Himachal Pradesh" },
          { "@type": "City", "name": "Chandigarh" }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Website Development, SEO, Google Ads & Digital Marketing",
        provider: { "@id": "https://infravibetech.com/#organization" },
        areaServed: {
          "@type": "Country",
          "name": "India"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Zirakpur" />
        <meta name="geo.position" content="30.5801;76.8530" />
        <meta name="ICBM" content="30.5801, 76.8530" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MCV6EGCKKX" />
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
