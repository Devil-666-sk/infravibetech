
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import ChatBot from "@/components/ChatBot";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
    <Navbar />
    <HomeSection />
    <ServicesSection />
    
    <AboutSection />
    <WhyChooseUs />
    <ChatBot />
    {/* <InfraVibeHome /> */}
    </>
  );
}
