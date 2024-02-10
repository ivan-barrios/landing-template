import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="w-full max-w-maxSectionWidth">
        <Hero />
        {/* Possibilities for landing */}
        {/* <AboutUs />
      <Services />
      <Testimonials />
      <Contact /> */}
      </div>
    </main>
  );
}
