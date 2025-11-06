
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import ChatBot from "@/components/ChatBot";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MissionVisionSection from "@/components/MissionVisionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import OurProcess from "@/components/OurProcess";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import ProjectsPage from "@/components/ProjectsPage";

export default function Home() {
  return (
    <>
    <Navbar />
    <HomeSection />
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
    {/* <InfraVibeHome /> */}
    </>
  );
}
