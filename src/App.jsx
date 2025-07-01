import NavBar from "./components/NavBar";

import HeroSection from "./sections/HeroSection";
import gsap, { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FalvorSection";

import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import { Suspense } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Suspense fallback={<div>Loading...</div>}>
            <HeroSection />
            <MessageSection />
            <FlavorSection />
            <NutritionSection />
            <BenefitSection />
            <TestimonialSection />
            <FooterSection />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

export default App;
