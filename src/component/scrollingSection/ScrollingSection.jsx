import React from "react";
import ScrollingDescription from "./ScrollingDescription";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollingSection = () => {

  if(window.innerWidth > 1024){
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#ScrollingSectionmark",
        start: "top top",
        // markers: true,
        end: "300% top",
        scrub: true,
        pin: true,
      },
    });

    t1.to("#scrolling", { y: "0vh", duration: 500 });
    t1.to("#scrolling", { y: "-100vh", duration: 500 });
    t1.to("#SecondImg", {
      opacity: 1,
      duration: 300,
    });
    t1.to("#scrolling",{y:"-100vh",duration:500});
    // t1.to("#scrolling",{y:"-100vh",duration:500});

    // gsap.to("#SecondImg", {
    //   scrollTrigger: {
    //     trigger: "#ScrollingSectionmark",
    //     start: "70 top",
    //     markers: true,
    //     end: "bottom top",
    //     // scrub: true,
    //     // pin: true,
    //   },
    //   opacity: 1,
    //   duration: 400,
    // });
  });
  }
  return (
    <div
      id="ScrollingSectionmark"
      className="flex flex-col lg:h-[100vh] h-[208vh] bg-black"
    >
      {/* ======================================================================================================= */}
      <div className="flex lg:flex-row flex-col">
        <div
          id="scrolling"
          className="bg-black text-white lg:w-[40%] w-[100%] lg:px-[3vw] px-[8vw] lg:py-[3vh] py-[3vh]"
        >
          <div>
            <h1 className="lg:text-[3.5vw] text-[8vw] leading-none lg:mb-[5.2vh] mb-[4vh]">
              Team workflows that just make sense
            </h1>
          </div>
          <div>
            <ScrollingDescription
              h1={"Multi-project management"}
              p={
                "Track every project from one workspace—on desktop, or the Studio mobile app."
              }
            />
            <ScrollingDescription
              h1={"Design libraries"}
              p={
                "Share reusable assets and templates with teammates and the Studio community."
              }
            />
            <ScrollingDescription
              h1={"Constant collaboration"}
              p={
                "Work on the same site at the same time, with custom roles and permissions."
              }
            />
          </div>
          <button>
            See all tool <br />
            <i className="fa-regular fa-arrow-turn-down-left fa-flip-horizontal"></i>
          </button>
        </div>
        <div className="bg-[#dcdcda] lg:w-[60%] w-[100%] flex justify-center items-center p-[4vw] gap-[1.5vw]">
          <div className="flex justify-center items-center p-[0.5vw] bg-[#dcdcda] rounded-lg shadow-[0_0px_15px_3px_rgba(0,0,0,0.1)]">
            <img
              className="w-[100%] h-[100%] rounded-lg"
              src="./desktop.webp"
              alt=""
            />
          </div>
          <div className="flex justify-center items-center p-[0.5vw] bg-[#dcdcda] rounded-lg shadow-[0_0px_15px_3px_rgba(0,0,0,0.1)]">
            <img
              className="w-[100%] h-[100%] rounded-lg"
              src="./Mobile.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* ====================================================================================================================== */}
      {/* ======================================================================================================= */}
      <div className="flex  top-200 lg:flex-row flex-col" id="scrolling">
        <div className="bg-black text-white lg:w-[40%] w-[100%] lg:px-[3vw] px-[8vw] lg:py-[3vh] py-[3vh]">
          <div>
            <h1 className="text-[3.5vw] leading-none mb-[5.2vh]   lg:text-[3.5vw] text-[8vw] leading-none lg:mb-[5.2vh] mb-4vh]">
              Client workflows that just make sense
            </h1>
          </div>
          <div>
            <ScrollingDescription
              h1={"Customizable handovers"}
              p={
                "Personalize the process with client-specific resources and custom roles and permissions."
              }
            />
            <ScrollingDescription
              h1={"A code-free CMS"}
              p={
                "Let clients add data and update content, without touching the design."
              }
            />
            <ScrollingDescription
              h1={"Live comments"}
              p={
                "Make version history mixups a thing of the past. See and fix feedback directly on the canvas."
              }
            />
          </div>
          <button>
            See all tool
            <i className="text-white fa-regular fa-arrow-turn-down-left fa-flip-horizontal"></i>
          </button>
        </div>
        <div
          id="SecondImg"
          className="bg-[#dcdcda] lg:w-[60%] w-[100%] flex justify-center items-center p-[4vw] gap-[1.5vw] lg:opacity-0 opacity-100"
        >
          <div className="flex justify-center items-center p-[0.5vw] bg-[#dcdcda] rounded-lg shadow-[0_0px_15px_3px_rgba(0,0,0,0.1)]">
            <img
              className="w-[100%] h-[100%] rounded-lg"
              src="./scrollimg2.webp"
              alt=""
            />
          </div>
          {/* <div className="flex justify-center items-center p-[0.5vw] bg-[#dcdcda] rounded-lg shadow-[0_0px_15px_3px_rgba(0,0,0,0.1)]">
            <img
              className="w-[100%] h-[100%] rounded-lg"
              src="./hcard5.webp"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ScrollingSection;




