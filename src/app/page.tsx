
import Navbar from "../components/navbar/Navbar";
import HomeSection from "../components/hero/HomeSection";
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
