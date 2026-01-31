
import Navbar from "../components/navbar/Navbar";
import ChatBot from "@/components/chatbot/ChatBot";
import ServicesSection from "@/components/services/ServicesSection";
import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/whychoose/WhyChooseUs";
import MissionVisionSection from "@/components/missionvision/MissionVisionSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";
import OurProcess from "@/components/ourprocess/OurProcess";
import ContactUs from "@/components/contactus/ContactUs";
import Footer from "@/components/footer/Footer";
import ProjectsPage from "@/components/project/ProjectsPage";
import PinsPage from "@/components/PinsPage";
import HeroSection from "../components/hero/HeroSection";
export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <ProjectsPage />
    <AboutSection />
    <WhyChooseUs />
    <MissionVisionSection />
    <OurProcess />
    <TestimonialsSection />
    <FAQSection />
    <ChatBot />
    <ContactUs />
    <Footer />
    <PinsPage />
    
    {/* <InfraVibeHome /> */}
    </>
  );
}
