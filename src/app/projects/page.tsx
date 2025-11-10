import HomeSection from "@/components/hero/HomeSection";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AboutSection from "@/components/about/AboutSection";
import ProjectsPage from "@/components/project/ProjectsPage";

export default function ProjectPage() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <ProjectsPage />
      <Footer />
    </>
  );
}
