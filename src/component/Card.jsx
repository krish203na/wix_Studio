import React from "react";

const Card = (props) => {

  const positionDesider = (no) => {
    if(no % 2 == 0)
    {
      console.log(no % 2 == 0);
      return "end"
    }
  }

  return (
    <div className="md:w-[49%] w-full h-[90%] md:rounded-xl bg-white hover:-translate-y-3 duration-200 md:p-8 box-border flex md:flex-col flex-col-reverse overflow-hidden">
      <div className="md:w-[80%] w-full md:p-0 p-[4vw] md:mb-0 mb-[10vh]">
        <h1 className="md:text-[2.5vw] text-[8vw] leading-tight mb-[3vh] font-normal">
          {props.cardDetail.h1}
        </h1>
        <p className="md:text-[1.3vw] text-[4vw] leading-tight md:mb-[3vh] mb-[1.5vh]">
          {props.cardDetail.p}
        </p>
        <button className="md:text-[1.4vw] text-[4.3vw] font-normal ">
          {props.cardDetail.button}
        </button>
      </div>
      <div
        className={`flex md:justify-between w-full md:items-center justify-${positionDesider(props.cardNo)} md:mt-[6vh]  mb-[6vh]`}
      >
        <video
          className="md:w-[65%] w-[90%] md:shadow-none shadow-[0_0px_10px_3px_rgba(0,0,0,0.4)]"
          src={props.cardDetail.video}
          autoPlay
          muted
          loop
        ></video>
        <img
          className="w-[30%] md:block hidden"
          src={props.cardDetail.img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Card;
