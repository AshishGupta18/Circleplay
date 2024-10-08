import React, { useState } from "react";
import AnimatedScreens from "../components/AnimatedScreen";

export default function IphoneShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-bg-dark">
      {/* Left Section: Step and Description */}
      <div className="text-left text-white w-1/2 pl-8">
        <h2 className="text-5xl font-medium mb-4 text-[#888888]">
          Step <span className="text-white">3</span>
        </h2>
        <hr className="w-12 my-5 h-1 bg-primary-blue" />
        <div className="flex items-center">
          <span className="h-2 w-2 bg-yellow-500 rounded-full mr-2"></span>
          <p className="text-desc">Smooth Onboarding for the Tenant begins</p>
        </div>
      </div>

      {/* Right half with black background */}
      <div className="w-1/2 bg-black relative h-screen">
        {/* Scrollbar on the right */}
        <div className="absolute right-8 top-1/2 h-1/2 w-1 bg-gray-800 rounded-full transform -translate-y-1/2">
          <div 
            className="w-3 h-3 bg-white rounded-full absolute right-0 transform -translate-x-0"
            style={{ top: `${scrollProgress}%` }}
          ></div>
        </div>

        {/* iPhone at the center of the division */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-[570px] bg-black rounded-[3rem] border-4 border-gray-800 p-2 relative">
            <div className="w-full h-8 bg-black absolute top-0 left-0 rounded-t-[3rem] flex justify-center">
              <div className="w-1/3 h-6 bg-black absolute top-0 rounded-b-xl"></div>
            </div>
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              <AnimatedScreens setScrollProgress={setScrollProgress} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}