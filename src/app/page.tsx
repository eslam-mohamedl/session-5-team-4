import About from "@/components/organisms/About";
import Footer from "@/components/organisms/Footer";
import HeroSection from "@/components/organisms/HeroSection";
import Navbar from "@/components/organisms/Navbar";
import PricingSection from "@/components/organisms/PricingSection";
import Contact from "@/components/organisms/Contact";
import PlogSection from "@/components/organisms/PlogSection";
export default function page() {
  return (
    <div>
      <Navbar />
      <About />
      <PricingSection />
      <Footer />
      <Contact />
      <HeroSection/>
      <PlogSection />
    </div>
  );
}
