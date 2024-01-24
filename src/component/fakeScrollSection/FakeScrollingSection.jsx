import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

const FakeScrollingSection = () => {

      if(window.innerWidth > 1024){


    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to("#stopdiv", {
          scrollTrigger: {
            trigger: "#stopdiv",
            start: "top 72%",
            end: "top top",
            markers: true,
            pin: true,
            scrub: true,
          },
        //   y: "-100vh",
        });
    })
}
  return (
    <>
      <div  className="h-full">
      <div id="stopdiv" className="flex lg:h-[25vh] h-[20vh] w-[100vw] absolute z-20">
        <div className="w-[75%] bg-[#deff00] pl-[5vw] flex items-center sticky bottom-0 z-20">
          <h1 className="text-black lg:text-[6vw] text-[5vh]">Start Creating</h1>
        </div>
        <div className="lg:w-[25%] w-[20vh] flex justify-center items-center bg-[black] z-20">
          <i className="lg:text-3xl text-[5vh] lg:p-[3vw] p-[5vw] bg-white rounded-full fa-regular fa-arrow-turn-down-left fa-flip-horizontal"></i>
        </div>
      </div>
        <div
          id="stop"
          className="h-[100vh] bg-gradient-to-b from-white to-[#dcdcda] z-0 lg:py-[5vh] px-[5vw] py-[30vh]"
        >
          <h1 className="lg:text-[7vw] text-[7vh] w-[85%]">
            Unleash your creations. Rein in the chaos.
          </h1>
        </div>
      </div>
    </>
  );
}

export default FakeScrollingSection
