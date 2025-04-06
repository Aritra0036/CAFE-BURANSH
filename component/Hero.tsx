// components/Hero.js
"use client";

import React from "react";
import GlassTemperatureBox from "./GlassTemperatureBox";
import CheckInOut from "./checkInOut";

const Hero = () => {
  return (
    <section>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-[90vh] object-cover filter brightness-120 contrast-90 saturate-100 hue-rotate-[-5deg]"
      >
        <source src="/HV.mp4" type="video/mp4" />
      </video>
      <GlassTemperatureBox/>
      <CheckInOut/>
    </section>
  );
};

export default Hero;