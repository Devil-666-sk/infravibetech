import type { Metadata } from "next";
import HomeSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ContactUs from "@/components/contactus/ContactUs";
import FAQSection from "@/components/faq/FAQSection";
import OurProcess from "@/components/ourprocess/OurProcess";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title:
    "Contact InfraVibe Tech | Laptop Repair & SEO Company in Zirakpur Punjab",
  description:
    "Get in touch with InfraVibe Tech for laptop repair, printer repair, SEO services and website development in Zirakpur, Derabassi, Mohali and Chandigarh.",
  keywords: [
    "Contact InfraVibe Tech",
    "Laptop repair in Zirakpur",
    "Printer repair in Derabassi",
    "SEO company in Mohali",
    "Website developer in Chandigarh",
    "IT company Punjab",
  ],
  alternates: {
    canonical: "https://infravibetech.com/contact",
  },
  openGraph: {
    title:
      "Contact InfraVibe Tech - IT Hardware & Digital Services in Punjab",
    description:
      "Call or visit InfraVibe Tech for laptop sales, repair services, SEO and web development in Zirakpur and Tricity.",
    url: "https://infravibetech.com/contact",
    type: "website",
  },
};

export default function ContactUsPage() {
  return (
    <>
      {/* Contact Page Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://infravibetech.com/contact",
            url: "https://infravibetech.com/contact",
            name: "Contact InfraVibe Tech",
            description:
              "Contact InfraVibe Tech for laptop repair, printer services, SEO and website development in Zirakpur and Punjab.",
            isPartOf: {
              "@type": "WebSite",
              name: "InfraVibe Tech",
              url: "https://infravibetech.com",
            },
            mainEntity: {
              "@type": "Organization",
              name: "InfraVibe Tech",
              url: "https://infravibetech.com",
              telephone: "+917860225993",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bhankharpur",
                addressRegion: "Punjab",
                postalCode: "140201",
                addressCountry: "IN",
              },
              areaServed: [
                "Zirakpur",
                "Derabassi",
                "Mohali",
                "Chandigarh",
                "Punjab"
              ]
            }
          }),
        }}
      />

      <Navbar />
      <HomeSection />
      <OurProcess />
      <FAQSection />
      <TestimonialsCarousel />
      <ContactUs />
      <Footer />
    </>
  );
}
