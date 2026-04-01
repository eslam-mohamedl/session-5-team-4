import Navbar from "@/components/organisms/Navbar";

import Hero from "@/components/organisms/Hero";

import Testimonials from "@/components/organisms/Testimonials";
import Team from "@/components/organisms/Team";
import Features from "@/components/organisms/Features";
import Gallery from "@/components/organisms/Gallery";


export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <Team />
      <Features />
      <Gallery />

    </div>
  );
}
