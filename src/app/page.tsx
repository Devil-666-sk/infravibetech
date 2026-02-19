
import Navbar from "../components/navbar/Navbar";
import ServicesSection from "@/components/services/CoreServices";
import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/whychoose/WhyChooseUs";
import MissionVisionSection from "@/components/missionvision/MissionVisionSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import OurProcess from "@/components/ourprocess/OurProcess";
import ContactUs from "@/components/contactus/ContactUs";
import Footer from "@/components/footer/Footer";
import HeroSection from "../components/hero/HeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WhyChooseUs />
    <ServicesSection />
    <AboutSection />    
    <MissionVisionSection /> 
    <PortfolioSection />
    <OurProcess />
    <TestimonialsSection />
    <FAQSection />
    <ContactUs />
    <Footer />
    
    
    </>
  );
}
