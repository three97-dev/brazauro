import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { useIsDesktop } from "../utils/useApplyAfterWidth";

const Hero = ({ title }) => {
  const isDesktop = useIsDesktop();
  
  return (
    <div className="relative w-full md:h-[229px]">
      {isDesktop && (
        <StaticImage
          src={"../assets/hero-background.png"}
          alt="Hero image"
          className="!absolute w-full h-full object-cover -z-20"
        />
      )}
      <div className="flex justify-center w-full h-full px-7 sm:px-12 lg:px-[100px] pt-12 md:pt-[59px]">
        <div className="relative flex items-center justify-center w-full max-w-[1240px] h-[110px] px-8 rounded-[20px] bg-light-gray/80 shadow-[10px_10px_40px_rgba(0,0,0,0.25)] overflow-hidden">
          <StaticImage
            src={"../assets/hero.png"}
            alt="Hero image"
            className="!absolute top-0 left-0 w-full h-full object-cover rounded-[20px] -z-10"
          />
          <h1 className="md:hidden text-center font-bitter text-dark-gold z-10">{title}</h1>
          <h2 className="hidden md:block text-center font-bitter text-dark-gold z-10">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
