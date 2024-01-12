import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import HeroSection from "./component/HeroSection/HeroSection";

function App() {
  const [count, setCount] = useState(0);
  // from-indigo-300 via-blue-800 to-black

  return (
    <>
      <div
        id="mainContainer"
        className="bg-fixed h-full w-full overflow-hidden bg-gradient-to-b from-indigo-300 from-20% via-blue-800 via-50% to-black to-70%"
      >
        <Navbar />
        <HeroSection/>
      </div>
    </>
  );
}

export default App;
