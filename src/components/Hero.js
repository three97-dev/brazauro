import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = ({ title }) => {
  return (
    <div className="relative w-full h-[229px] mt-3">
      <StaticImage src={"../assets/hero-background.png"} alt="Hero image" className="!absolute w-full h-full object-cover -z-20" />
      <div className="flex justify-center w-full h-full px-7 sm:px-12 lg:px-[100px] pt-9">
        <div className="relative flex items-center justify-center w-full max-w-[1240px] h-[109px] px-8 rounded-[20px] bg-light-gray/80 shadow-[10px_10px_40px_rgba(0,0,0,0.25)] overflow-hidden">
        <StaticImage src={"../assets/hero.png"} alt="Hero image" className="!absolute top-0 left-0 w-full h-full object-cover -z-10" />
          <h2 className="text-center text-dark-gold z-10">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
