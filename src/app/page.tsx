import Navbar from "@/components/organisms/Navbar";

import Hero from "@/components/organisms/Hero";

import Testimonials from "@/components/organisms/Testimonials";
import Team from "@/components/organisms/Team";
import Features from "@/components/organisms/Features";


export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonials />
      <Team />
      <Features />

    </div>
  );
}
