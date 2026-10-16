import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowWeWorkSection from "./components/HowWeWorkSection";
import CurriculumSection from "./components/CurriculumSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowWeWorkSection />
      <CurriculumSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
