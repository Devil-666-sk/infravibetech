import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InfraVibe Tech | Web Design, Digital Marketing & IT Solutions",
  description:
    "InfraVibe Tech offers premium Web Design & Development, Digital Marketing, Social Media Maintenance, Tech Support, and PC/Laptop Rentals. Delivering innovative, reliable, and growth-focused tech solutions from Punjab, India.",
  keywords: [
    "InfraVibe Tech",
    "web design",
    "web development",
    "digital marketing",
    "social media management",
    "tech support",
    "IT maintenance",
    "laptop rental",
    "PC on rent",
    "software company Punjab",
    "InfraVibe",
  ],
  openGraph: {
    title: "InfraVibe Tech | Web Design & IT Solutions",
    description:
      "Empowering businesses with cutting-edge web design, digital marketing, and technical maintenance. Discover InfraVibe Tech's premium IT services.",
    url: "https://infravibetech.com",
    siteName: "InfraVibe Tech",
    images: [
      {
        url: "https://infravibetech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InfraVibe Tech - Web Design & IT Solutions",
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
    name: "InfraVibe Tech",
    image: "https://infravibetech.com/logo.png",
    "@id": "https://infravibetech.com",
    url: "https://infravibetech.com",
    telephone: "+91-7860225993",
    email: "infravibetech@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sunder Nagar Colony, Bhankharpur",
      addressLocality: "Punjab",
      postalCode: "140201",
      addressCountry: "IN",
    },
    description:
      "InfraVibe Tech is a full-service IT company providing Web Design, Development, Digital Marketing, Social Media Maintenance, Tech Support, and PC/Laptop Rentals across India.",
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [
      "https://www.facebook.com/infravibetech",
      "https://www.instagram.com/infravibetech",
      "https://www.linkedin.com/company/infravibetech",
    ],
    serviceType: [
      "Web Design & Development",
      "Digital Marketing",
      "Social Media Maintenance",
      "Tech Support & Maintenance",
      "PC & Laptop on Rent",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
