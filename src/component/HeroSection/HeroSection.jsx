import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-screen ">
      <div className="w-3/4 md:ml-[3vw] ml-[8vw] md:mt-[4vw] mt-[30vh] flex flex-col gap-[5vh]">
        <h1 className="md:text-[9vw] text-[15vw] md:text-gray-600 text-white flex flex-col leading-none">
          <span>Wix Studio</span>
          <span>Deliver brilliance.</span>
          <span>Smash deadlines.</span>
        </h1>
        <button className="bg-white text-black rounded-3xl md:w-[20vw] w-[45vw] h-[7vh] text-xl">
          Start creating <i className="fa-light fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
