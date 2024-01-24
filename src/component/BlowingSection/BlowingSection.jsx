import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const BlowingSection = () => {
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  // gsap.from("#BlowingSection", {
  //   scrollTrigger: {
  //     trigger: "#BlowingSection",
  //     start: "bottom 80%",
  //     end: "top top",
  //     // markers: true,
  //     scrub: true,
  //     // pin:true
  //   },
  //   // duration:1,
  //   width: 0,
  //   height: 0,
  //   y: -50,
  //   borderRadius: 9000,
  //   border: 2,
  // });

  // ==============================================================================================

  const video = useRef("null");
  if (window.innerWidth > 600) {
    useGSAP(() => {
      console.log(window.innerHeight);
      console.log(window.innerWidth);

      // console.log(video)
      gsap.registerPlugin(ScrollTrigger);

      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#BlowingSection",
          scrub: 1,
          start: "10% 95%",
          end: "bottom center",
          // markers: true,
          toggleActions: "play none reverse none",
        },
      });

      t2.fromTo(
        "#BlowingSection",
        {
          width: 0,
          height: 0,
          borderRadius: 9000,
        },
        {
          width: 100,
          height: 100,
          borderRadius: 9000,
        }
      );

      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#blow",
          scrub: 1,
          // markers: true,
          start: "30% bottom",
          end: "top top",
          toggleActions: "play none reverse none",
        },
      });

      t1.to("#BlowingSection", {
        width: 200,
        height: 200,
        borderRadius: 9000,
      });
      if (window.innerWidth > 1024) {
      t1.fromTo(
        "#blowingHeading1",
        { marginTop: "0px", },
        { marginTop: "250px", left: "20vw" }
      );
        t1.to(
          "#BlowingSection",
          {
            width: "100%",
            height: "100%",
            borderRadius: 0,
          },
          0.5
        );
        
        let tSectionPin = gsap.timeline({
          scrollTrigger: {
            trigger: "#blow",
            scrub: true,
            // markers: true,
            start: "top top",
            end: "200% top",
            pin: true,
            toggleActions: "play none reverse none",
          },
        });

        // tSectionPin.from("#blowinghero", { opacity:0, width: "100%" });

        tSectionPin.to(
          "#blowingHeading1",
          { opacity: 0, display: "none",top:0,left:"20vw",marginTop:"20px" },
          0.2
        );
        tSectionPin.fromTo(
          "#right",
          {
            y: 600,
            display: "hidden",
            width: "80%",
            margin: "auto",
            // opacity: 0,
            right: "150px",
          },
          {
            y: -10,
            display: "flex",
            margin: "auto",
            opacity: 1,
            right: "150px",
            // onComplete: video.current.play(),
          },
          0.2
        );
        // tSectionPin.to("#right", {onComplete: video.current.play()});
        tSectionPin.to("#right", { right: "20px", width: "70%" }, 0.6);
        tSectionPin.from(
          "#left",
          { display: "none", x: -200, opacity: 0 },
          0.7
        );
        tSectionPin.to("#right", { right: "20px", width: "70%" });
        
      }
      else if (window.innerWidth > 600 && window.innerWidth < 1024) {
        t1.fromTo(
          "#blowingHeading1",
          { marginTop: "0px" },
          { marginTop: "20px" }
        );
        t1.to(
          "#BlowingSection",
          {
            width: "100%",
            height: "150vh",
            borderRadius: 0,
          },
          0.5
        );

        let tSectionPin = gsap.timeline({
          scrollTrigger: {
            trigger: "#blow",
            scrub: true,
            markers: true,
            start: "top top",
            end: "=+400 top",
            pin: true,
            toggleActions: "play none reverse none",
          },
        });

        tSectionPin.to("#blowingHeading1", { opacity: 0, marginTop: "40px" });
        tSectionPin.fromTo(
          "#right",
          {
            y: 500,
            display: "hidden",
            width: "100%",
            margin: "auto",
            // opacity: 0,
            // right: "150px",
          },
          {
            y: -80,
            display: "flex",
            margin: "auto",
            opacity: 1,
            // right: "150px",
            // onComplete: video.current.play(),
          },
          0
        );
        // tSectionPin.to("#right", {onComplete: video.current.play()});
        tSectionPin.to("#right", { width: "100%" }, 0);
        // tSectionPin.to("#right", { y: -400 });
        tSectionPin.from("#left", { opacity: 0 }, 0);
        // tSectionPin.to("#right", {
        //   width: "100%",
        // });
      }

      // if (window.innerWidth > 1024) {
      //   let tSectionPin = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: "#blow",
      //       scrub: true,
      //       // markers: true,
      //       start: "top top",
      //       end: "130% top",
      //       pin: true,
      //       toggleActions: "play none reverse none",
      //     },
      //   });

      //   // tSectionPin.from("#blowinghero", { opacity:0, width: "100%" });

      //   tSectionPin.to(
      //     "#blowingHeading1",
      //     { opacity: 0, display: "none", marginTop: "40px" },
      //     0.2
      //   );
      //   tSectionPin.fromTo(
      //     "#right",
      //     {
      //       y: 600,
      //       display: "hidden",
      //       width: "80%",
      //       margin: "auto",
      //       // opacity: 0,
      //       right: "150px",
      //     },
      //     {
      //       y: -10,
      //       display: "flex",
      //       margin: "auto",
      //       opacity: 1,
      //       right: "150px",
      //       onComplete: video.current.play(),
      //     },
      //     0.2
      //   );
      //   // tSectionPin.to("#right", {onComplete: video.current.play()});
      //   tSectionPin.to("#right", { right: "20px", width: "70%" }, 0.6);
      //   tSectionPin.from(
      //     "#left",
      //     { display: "none", x: -200, opacity: 0 },
      //     0.7
      //   );
      //   tSectionPin.to("#right", { right: "20px", width: "70%" });
      // }
      // if (window.innerWidth > 600 && window.innerWidth < 1024) {
      //   let tSectionPin = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: "#blow",
      //       scrub: true,
      //       markers: true,
      //       start: "top top",
      //       end: "=+400 top",
      //       pin: true,
      //       toggleActions: "play none reverse none",
      //     },
      //   });

      //   tSectionPin.to(
      //     "#blowingHeading1",
      //     { opacity: 0, marginTop: "40px" },
          
      //   );
      //   tSectionPin.fromTo(
      //     "#right",
      //     {
      //       y: 500,
      //       display: "hidden",
      //       width: "100%",
      //       margin: "auto",
      //       // opacity: 0,
      //       // right: "150px",
      //     },
      //     {
      //       y: -80,
      //       display: "flex",
      //       margin: "auto",
      //       opacity: 1,
      //       // right: "150px",
      //       // onComplete: video.current.play(),
      //     },
      //     0
      //   );
      //   // tSectionPin.to("#right", {onComplete: video.current.play()});
      //   tSectionPin.to("#right", { width: "100%" },0);
      //   // tSectionPin.to("#right", { y: -400 });
      //   tSectionPin.from(
      //     "#left",
      //     {opacity: 0},0
      //   );
      //   // tSectionPin.to("#right", {
      //   //   width: "100%",
      //   // });
      // }

      // tHeader.from("#blowingHeading1",{
      //   y:40
      // });
      // .fromTo("#blowingHeading",{opacity:0,duration:1},{opacity:1});
      // .from("#blowingHeading", { display: "none" })
      // .to("#blowingHeading", { opacity: 0, duration: 1 })
      // .fromTo("#right",{top:200,left:20,opacity:0,display:"flex",width:"100%"},{top:50,left:20,opacity:1,duration:1},1.5)
    });
  }

  //   gsap.from("#blowingHeading", {
  //     scrollTrigger: {
  //       trigger: "#blowingHeading1",
  //       start:"top 10%",
  //       end:"bottom 10%",
  //       markers:true,
  //       // pin:true,
  //       // scrub:true
  //     },
  //     // width:500
  //     left:0
  //   });
  // });

  return (
    <>
      <section
        id="blow"
        // id="BlowingSection"
        className="flex justify-center mt-[20vh] h-screen"
      >
        <section
          id="BlowingSection"
          className="bg-white lg:h-screen md:h-[150%] w-full relative border-0 lg:flex lg:justify-center lg:flex-col overflow-hidden"
        >
          {/* // className="absolute flex justify-center w-[100vw] left-0 top-[10vh]" */}
          <h1
            id="blowingHeading1"
            className="md:text-[3vw] md:my-[30px] lg:absolute lg:w-[60vw] md:w-full md:my-[3vh] m-auto lg:inline text-center transition duration-100"
          >
            The web creation platform built for agencies
          </h1>
          <div
            id="right"
            className="w-full flex justify-center lg:absolute items-center"
          >
            <video
              ref={video}
              className="w-[90%] shadow-[0_0px_20px_0px_rgba(0,0,0,0.2)] "
              src="./BlowingSectionVideo.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
          {/* <div id="blowinghero" className="flex items-center h-full opacity-1"> */}
          <div
            id="left"
            className="lg:w-[30vw] lg:h-[80%] lg:mt-[0vh] md:-mt-[10vh] flex lg:flex-col justify-between "
          >
            <div id="leftUpper" className="w-full">
              <h1 className="lg:text-[2.3vw] md:text-[3.5vw] leading-tight pl-[4vw] pr-[2vw] py-[4vh]">
                Focus on design–everything scales automatically
              </h1>
              <p className="lg:text-[1.3vw] md:text-[1.8vw] leading-tight pl-[4vw] pr-[3vw] py-[2vh]">
                Create freely on canvas, including in pixels, with a responsive
                editor that optimizes designs for every screen size.
              </p>
              <button className="lg:text-[1.3vw] md:text-[2vw] leading-tight font-semibold pl-[4vw] pr-[1vw] py-[2vh]">
                Start Creating
              </button>
            </div>
            <div id="leftDown">
              <div
                id="leftDown1"
                className="text-base pl-[4vw] pr-[3vw] py-[2vh]"
              >
                Integrations
              </div>
              <div
                id="leftDown2"
                className="text-base pl-[4vw] pr-[3vw] py-[2vh]"
              >
                logos
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
      </section>

      {/* ============================================================================================================================ */}

      {/* <section className="">
        <h1 className="text-[3vw] absolute text-center w-full transition duration-100">
          The web creation platform built for agencies
        </h1>
        <div className="bg-white h-screen w-full relative border-0 overflow-hidden flex">
          <div
            id="left"
            className="w-[40vw] h-[80%] flex flex-col justify-between "
          >
            <div id="leftUpper" className="w-full">
              <h1 className="text-[2.3vw] leading-tight pl-[4vw] pr-[2vw] py-[4vh]">
                Focus on design–everything scales automatically
              </h1>
              <p className="text-[1.3vw] leading-tight pl-[4vw] pr-[3vw] py-[2vh]">
                Create freely on canvas, including in pixels, with a responsive
                editor that optimizes designs for every screen size.
              </p>
              <button className="text-[1.3vw] leading-tight font-semibold pl-[4vw] pr-[1vw] py-[2vh]">
                Start Creating
              </button>
            </div>
            <div id="leftDown">
              <div
                id="leftDown1"
                className="text-base pl-[4vw] pr-[3vw] py-[2vh]"
              >
                Integrations
              </div>
              <div
                id="leftDown2"
                className="text-base pl-[4vw] pr-[3vw] py-[2vh]"
              >
                logos
              </div>
            </div>
          </div>
          <video
            className="w-[70%] shadow-[0_0px_20px_0px_rgba(0,0,0,0.2)] "
            src="./BlowingSectionVideo.mp4"
          ></video>
        </div>
      </section> */}

    </>
  );
};

export default BlowingSection;
