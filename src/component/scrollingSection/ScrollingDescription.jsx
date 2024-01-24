import React from 'react'

const ScrollingDescription = (props) => {
  return (
    <div className="my-[4vh] text-white lg:w-[50%] w-[100%]">
      <h1 className="lg:text-[1.5vw] text-[4.5vw] mb-[1.5vh] lg:text-left text-center">
        {props.h1}
      </h1>
      <p className="lg:text-[1.2vw] text-[3.5vw] lg:text-left text-center">
        {props.p}
      </p>
    </div>
  );
}

export default ScrollingDescription
