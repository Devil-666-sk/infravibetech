import type { Metadata } from "next";
import HomeSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/about/AboutSection";
import ContactUs from "@/components/contactus/ContactUs";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsSection";
import OurProcess from "@/components/ourprocess/OurProcess";
import FAQSection from "@/components/faq/FAQSection";

export const metadata: Metadata = {
  title:
    "About InfraVibe Tech | Trusted Laptop Dealer & SEO Company in Zirakpur",
  description:
    "Learn about InfraVibe Tech – a trusted IT company in Zirakpur providing laptop, PC and printer sales, repair services, website development and SEO solutions across Derabassi, Mohali and Chandigarh.",
  keywords: [
    "About InfraVibe Tech",
    "Laptop dealer in Zirakpur",
    "IT company in Punjab",
    "Printer repair in Derabassi",
    "SEO company in Mohali",
    "Website development Chandigarh",
    "Laptop repair near Zirakpur"
  ],
  alternates: {
    canonical: "https://infravibetech.com/about",
  },
  openGraph: {
    title:
      "About InfraVibe Tech - IT Hardware & Digital Experts in Punjab",
    description:
      "InfraVibe Tech offers laptop sales, repair services, web development and SEO solutions in Zirakpur and Tricity.",
    url: "https://infravibetech.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* About Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "@id": "https://infravibetech.com/about",
            url: "https://infravibetech.com/about",
            name: "About InfraVibe Tech",
            description:
              "Information about InfraVibe Tech, a trusted laptop dealer and SEO company in Zirakpur, Punjab.",
            isPartOf: {
              "@type": "WebSite",
              name: "InfraVibe Tech",
              url: "https://infravibetech.com",
            },
            mainEntity: {
              "@type": "Organization",
              name: "InfraVibe Tech",
              url: "https://infravibetech.com",
              logo: "https://infravibetech.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+917860225993",
                contactType: "customer service",
                areaServed: "IN",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhankharpur",
                addressRegion: "Punjab",
                postalCode: "140201",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />

      <Navbar />
      <HomeSection />
      <AboutSection />
      <OurProcess />
      <TestimonialsCarousel />
      <FAQSection />
      <ContactUs />
      <Footer />
    </>
  );
}
