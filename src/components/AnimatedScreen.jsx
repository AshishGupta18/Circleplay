import React, { useState, useEffect } from "react";
import HomeScreen from "./HomeScreen";
import PropertyDetails from "./PropertyDetails";

export default function AnimatedScreens({ setScrollProgress }) {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (currentScreen === "transitioning") {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          const newProgress = prev + 2;
          setScrollProgress(newProgress);
          if (newProgress >= 100) {
            clearInterval(interval);
            setCurrentScreen("propertyDetails");
          }
          return newProgress;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [currentScreen, setScrollProgress]);

  const handleGetStarted = () => {
    setCurrentScreen("transitioning");
    setAnimationProgress(0);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute w-full h-full transition-transform duration-1000"
        style={{
          transform: `translateY(-${animationProgress}%)`,
        }}
      >
        <HomeScreen onGetStarted={handleGetStarted} />
      </div>
      <div
        className="absolute w-full h-full transition-transform duration-1000"
        style={{
          transform: `translateY(${100 - animationProgress}%)`,
        }}
      >
        <PropertyDetails />
      </div>
    </div>
  );
}