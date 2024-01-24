import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/HeroSection/HeroSection";
import Lenis from "@studio-freight/lenis";
import BlowingSection from "./component/BlowingSection/BlowingSection";
import { useGSAP } from "@gsap/react";
import Card from "./component/Card";
import ScrollingSection from "./component/scrollingSection/ScrollingSection";
import HorizontalScroll from "./component/HorizontalScroll/HorizontalScroll";
import FakeScrollingSection from "./component/fakeScrollSection/fakeScrollingSection";

function App() {
  // const [count, setCount] = useState(0);
  // from-indigo-300 via-blue-800 to-black

  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <div
        id="mainContainer"
        className="aspect-auto bg-fixed h-full w-full box-border bg-gradient-to-b from-indigo-300 from-20% via-blue-800 via-50% to-black to-70% overflow-hidden"
      >
        <Navbar />
        <HeroSection />
        <BlowingSection />
        <section className="h-full w-full bg-[#d8e2ec] md:p-[10vh] flex md:flex-row flex-col justify-between">
          <Card
            cardNo="1"
            cardDetail={{
              h1: "Set your vision in motion with no-code animations",
              p: "Choose from smart presets and tailor them to your exact specs with options for scroll, loop, click, hover and more.",
              button: "Start Creating",
              video: "./card1.mp4",
              img: "./card2img.webp",
            }}
          />
          <Card
            cardNo="2"
            cardDetail={{
              h1: "Create signature experience with custom CSS",
              p: "Add personalized styles, handle changes at runtime to make components interactive, and streamline edits with global updates.",
              button: "Advanced design features",
              video: "./card2.mp4",
              img: "./card1img.webp",
            }}
          />
        </section>
        <ScrollingSection />
        <HorizontalScroll />
        <FakeScrollingSection/>
      </div>
    </>
  );
}

export default App;
