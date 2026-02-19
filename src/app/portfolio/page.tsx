import type { Metadata } from "next";
import HomeSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/about/AboutSection";
import ProjectsPage from "@/components/portfolio/PortfolioSection";

export const metadata: Metadata = {
  title:
    "Portfolio | SEO, Web Development & IT Projects in Zirakpur - InfraVibe Tech",
  description:
    "Explore InfraVibe Tech portfolio including website development, SEO optimization, lead generation campaigns and IT hardware projects across Zirakpur, Derabassi, Mohali and Chandigarh.",
  keywords: [
    "Web development portfolio Zirakpur",
    "SEO projects in Punjab",
    "Digital marketing work Mohali",
    "Lead generation campaigns Chandigarh",
    "IT company portfolio Punjab",
    "Website designer in Derabassi",
  ],
  alternates: {
    canonical: "https://infravibetech.com/portfolio",
  },
  openGraph: {
    title:
      "InfraVibe Tech Portfolio - Web, SEO & IT Projects in Punjab",
    description:
      "Check our completed web development, SEO and IT hardware projects across Zirakpur and Tricity.",
    url: "https://infravibetech.com/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Portfolio Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://infravibetech.com/portfolio",
            url: "https://infravibetech.com/portfolio",
            name: "InfraVibe Tech Portfolio",
            description:
              "Portfolio showcasing website development, SEO, lead generation and IT hardware projects in Zirakpur, Mohali and Chandigarh.",
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
      <HomeSection />
      <ProjectsPage />
      <AboutSection />
      <Footer />
    </>
  );
}
