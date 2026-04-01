import Navbar from "@/components/organisms/Navbar";
import Testimonials from "@/components/organisms/Testimonials";
import Team from "@/components/organisms/Team";
import Features from "@/components/organisms/Features";
import About from "@/components/organisms/About";

export default function page() {
  return (
    <div>
      <Navbar />
      <About />
      <Testimonials />
      <Team />
      <Features />
    </div>
  );
}
