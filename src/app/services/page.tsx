import type { Metadata } from "next";
import HomeSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import OurServices from "@/components/services/CoreServices";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsSection";
import ContactUs from "@/components/contactus/ContactUs";

export const metadata: Metadata = {
  title:
    "IT Services in Zirakpur | Laptop Dealer, Printer Repair & SEO Company Punjab",
  description:
    "InfraVibe Tech provides laptop and printer sales, repair services, website development, SEO (on-page & off-page) and lead generation in Zirakpur, Derabassi, Mohali and Chandigarh.",
  keywords: [
    "IT services in Zirakpur",
    "Laptop dealer in Zirakpur",
    "Printer repair in Derabassi",
    "Computer shop in Punjab",
    "SEO company in Mohali",
    "Website development in Chandigarh",
    "Lead generation company Punjab",
    "Laptop repair near Zirakpur",
  ],
  alternates: {
    canonical: "https://infravibetech.com/services",
  },
  openGraph: {
    title:
      "InfraVibe Tech Services - IT Hardware & Digital Solutions in Punjab",
    description:
      "Professional laptop sales, printer repair, SEO and website development services across Zirakpur and Tricity.",
    url: "https://infravibetech.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Services Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://infravibetech.com/services",
            url: "https://infravibetech.com/services",
            name: "InfraVibe Tech Services",
            description:
              "Laptop sales, printer repair, website development, SEO and IT solutions in Zirakpur, Mohali and Chandigarh.",
            isPartOf: {
              "@type": "WebSite",
              name: "InfraVibe Tech",
              url: "https://infravibetech.com",
            },
            mainEntity: {
              "@type": "Service",
              name: "IT Hardware & Digital Marketing Services",
              provider: {
                "@type": "Organization",
                name: "InfraVibe Tech",
                url: "https://infravibetech.com",
              },
              areaServed: {
                "@type": "Place",
                name: "Zirakpur, Derabassi, Mohali, Chandigarh, Punjab",
              },
              serviceType: [
                "Laptop Sales",
                "Printer Sales",
                "Laptop Repair",
                "Printer Repair",
                "Website Development",
                "SEO Services",
                "Lead Generation",
                "IT Infrastructure Setup"
              ],
            },
          }),
        }}
      />

      <Navbar />
      <HomeSection />
      <OurServices />
      <TestimonialsCarousel />
      <ContactUs />
      <Footer />
    </>
  );
}
