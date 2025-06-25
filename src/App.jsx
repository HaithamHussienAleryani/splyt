import NavBar from "./components/NavBar";

import HeroSection from "./sections/HeroSection";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <div className="h-screen"></div>
    </main>
  );
}

export default App;
