import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const FlavorTitle = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });
      tl.to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }

    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });
    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });
    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });

  return (
    <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split ">
        <h1>We have 6 </h1>
      </div>
      <div
        style={{ clipPath: "polygon(0% 0%, 0% 0, 0% 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0  pt-3 2xl:px-5 px-3 ">
          <h2 className="text-milk">FREAKING</h2>
        </div>
      </div>
      <div className="overflow-hidden py-3 2xl:py-0 second-text-split">
        <h1>Delicious Flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
