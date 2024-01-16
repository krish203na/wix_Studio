import React from 'react'
import NavbarList from './NavbarList';

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex justify-between items-center sm:h-[4.5vw] h-[13vw] box-border pl-6">
      <div className="h-full flex items-center">
        <img className="h-3/5 items-center" src="./images/logo.png" alt="" />
      </div>
      <div>
        <NavbarList className="md:block hidden" />
      </div>
      <div className=" h-full flex box-content items-center">
        <i className="fa-regular sm:block hidden fa-globe px-[1.5vw] text-xl"></i>
        <a
          className="sm:block hidden w-[6vw] text-center lg:text-lg text-sm underline hover:font-semibold"
          href="#"
        >
          Log in
        </a>
        <button className="bg-[#3910ed] sm:bg-black sm:hover:bg-[#3910ed] transition ease-in-out duration-500 h-full px-[3vw] text-white">
          Start Creating
        </button>
        <button className="sm:hidden bg-black text-white text-xl h-full py-[2vw] px-[4.5vw]">
          <i className="fa-thin fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar
