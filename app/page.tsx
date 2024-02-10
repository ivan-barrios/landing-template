import AboutUs from "@/components/aboutus/AboutUs";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full max-w-maxSectionWidth flex flex-col gap-[150px]">
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
