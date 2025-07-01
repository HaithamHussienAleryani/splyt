import NavBar from "./components/NavBar";

import HeroSection from "./sections/HeroSection";
import gsap, { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FalvorSection";

import { useGSAP } from "@gsap/react";

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
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <div className="h-screen"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
