import Navbar from "@/components/organisms/Navbar";
import Hero from "@/components/organisms/Hero";
import Testimonials from "@/components/organisms/Testimonials";
import Team from "@/components/organisms/Team";
import Features from "@/components/organisms/Features";
import Gallery from "@/components/organisms/Gallery";

import About from "@/components/organisms/About";

export default function page() {
  return (
    <div>
      <Navbar />
      <About />
      <Hero />
      <Testimonials />
      <Team />
      <Features />

      <Gallery />
    </div>
  );
}
