import type { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import WhyChooseUs from "@/components/whychoose/WhyChooseUs";
import OurProcess from "@/components/ourprocess/OurProcess";
import ContactUs from "@/components/contactus/ContactUs";
import Footer from "@/components/footer/Footer";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";

export const metadata: Metadata = {
  title:
    "Why Choose InfraVibe Tech | Trusted Laptop Dealer & SEO Company in Zirakpur",
  description:
    "Discover why InfraVibe Tech is the trusted laptop, PC and printer dealer in Zirakpur offering repair services, website development, SEO and lead generation across Derabassi, Mohali and Chandigarh.",
  keywords: [
    "Why choose InfraVibe Tech",
    "Best laptop dealer in Zirakpur",
    "Printer repair in Derabassi",
    "IT company in Punjab",
    "SEO company in Mohali",
    "Website development in Chandigarh",
    "Laptop repair near Zirakpur",
    "Lead generation company Punjab"
  ],
  alternates: {
    canonical: "https://infravibetech.com/why-choose-us",
  },
  openGraph: {
    title:
      "Why Choose InfraVibe Tech - IT Hardware & Digital Experts in Punjab",
    description:
      "Trusted IT partner for laptop sales, printer repair, SEO and web development services in Zirakpur and Tricity.",
    url: "https://infravibetech.com/why-choose-us",
    type: "website",
  },
};

export default function WhyChooseUsPage() {
  return (
    <>
      {/* WebPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://infravibetech.com/why-choose-us",
            url: "https://infravibetech.com/why-choose-us",
            name: "Why Choose InfraVibe Tech",
            description:
              "Reasons to choose InfraVibe Tech for laptop sales, printer repair, SEO and website development services in Zirakpur, Derabassi and Mohali.",
            isPartOf: {
              "@type": "WebSite",
              name: "InfraVibe Tech",
              url: "https://infravibetech.com",
            },
            about: {
              "@type": "Organization",
              name: "InfraVibe Tech",
              url: "https://infravibetech.com",
            },
          }),
        }}
      />

      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurProcess />
      <TestimonialsCarousel />
      <FAQSection />
      <ContactUs />
      <Footer />
    </>
  );
}
