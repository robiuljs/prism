import FAQ from "@/components/sections/FAQ/FAQ";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import Pricing from "@/components/sections/pricing/Pricing";
import Testimonial from "@/components/sections/testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <FAQ/>
    </main>
  );
}
