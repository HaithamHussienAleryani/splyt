import NavBar from "./components/NavBar";

import HeroSection from "./sections/HeroSection";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import MessageSection from "./sections/MessageSection";
gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <MessageSection />
      <div className="h-screen"></div>
    </main>
  );
}

export default App;
