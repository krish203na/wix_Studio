import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const HeroSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll("#reveal-type");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars" });

      console.log(text);

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 27%",
          end: "100% 27%",
          pin: true,
          pinSpacer: true,
          scrub: true,
          markers: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });

  });

  return (
    <>
      <section className="w-full h-full ">
        <div
          id="reveal-type"
          className="w-3/4 md:ml-[3vw] ml-[8vw] md:mt-[8vw] mt-[30vh] flex flex-col gap-[5vh]"
        >
          <h1 className="md:text-[9vw] text-[15vw] md:text-white text-white leading-none">
            Wix Studio
          </h1>
          <h1 className="md:text-[9vw] text-[15vw] md:text-white text-white leading-none -mt-[6vh]">
            Deliver brilliance.
          </h1>
          <h1 className="md:text-[9vw] text-[15vw] md:text-white text-white leading-none -mt-[6vh]">
            Smash deadlines.
          </h1>
          <button className="bg-white text-black md:w-[45vw] lg:w-[20vw] w-[45vw] h-[7vh] lg:text-xl rounded-full">
            Start creating <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
