import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";

const FlavorSlider = () => {
  const sliderRef = useRef();
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  useGSAP(() => {
    if (!isTablet) {
      const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1300}px`,
          scrub: true,

          pin: true,
        },
      });
      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1300}px`,
        ease: "power1.inOut",
      });
    }
  });
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[80vh] md:w-[90vw] md:h-[40vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              loading="lazy"
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              loading="lazy"
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              loading="lazy"
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
