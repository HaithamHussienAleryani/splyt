import NavBar from "./components/NavBar";

import HeroSection from "./sections/HeroSection";
import gsap, { ScrollTrigger } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FalvorSection from "./sections/FalvorSection";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <FalvorSection/>
      <div className="h-screen"></div>
    </main>
  );
}

export default App;
