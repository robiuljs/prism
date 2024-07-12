import FAQ from "@/components/sections/FAQ/FAQ";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import PricingTwo from "@/components/sections/pricing/PricingTwo";
import Testimonial from "@/components/sections/testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <PricingTwo/>
      <Testimonial/>
      <FAQ/>
    </main>
  );
}
