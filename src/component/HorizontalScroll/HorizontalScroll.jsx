import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalScroll = () => {
  const HorizontalImg = [
    "./hcard1.webp",
    "./hcard2.webp",
    "./hcard3.webp",
    "./hcard4.webp",
    "./hcard5.webp",
  ];

  if(window.innerWidth > 1024){
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".horizontalImg");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 2.1),
      ease: "easeInOut",
      scrollTrigger: {
        trigger: "#horScroll",
        pin: true,
        scrub: 1,
        markers:true,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=2000",
      },
    });
  });
  }
  return (
    <div id="horScroll" className="text-black h-[100vh] bg-white">
      <div className="lg:h-[40%] h-[60%] flex lg:flex-row flex-col lg:justify-between justify-evenly items-center lg:items-start lg:px-[4vw] lg:py-[9vh]">
        <div className="lg:w-[50%] w-[90%] lg:text-[4vw] text-[8vw] leading-none">
          <h1>Native business solutions, fit for every project</h1>
        </div>
        <div className="lg:w-[40%] w-[85%]">
          <p className="lg:w-[65%] mb-[5vh]">
            Cater to every industry with our advanced solutions—from eComm to
            events, bookings and more. Need specific logic? Extend the suite
            with 100s of APIs and integrations.
          </p>
          <button className="bg-black lg:w-[12vw] w-[40vw] lg:h-[7vh] h-[5vh] rounded-full text-white hover:text-[1.3vw] duration-200">
            See all Solutions
          </button>
        </div>
      </div>
      <div className="flex items-center lg:h-[60%] h-[40%] lg:w-[215vw] w-[100%] bg-[#e4eaea] lg:overscroll-none lg:overflow-hidden overflow-scroll overscroll-contain px-[4vw] gap-[2vw]">
        {HorizontalImg.map((e, i) => {
          return (
            <img
              className="horizontalImg lg:w-[85vh] rounded-xl shadow-[0_0px_15px_3px_rgba(0,0,0,0.12)]"
              src={e}
              key={`img${i}`}
              alt="img not found"
            />
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalScroll;
