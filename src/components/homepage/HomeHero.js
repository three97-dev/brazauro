import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const HomeHero = ({title, subtitle}) => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center justify-center w-full h-[575px] px-7 sm:px-12 lg:px-[100px] text-center text-white">
        <StaticImage
          src={"../../assets/homepage/hero.png"}
          alt="Hero image"
          className="!absolute w-full h-full object-cover -z-10"
        />
        <h1>{title}</h1>
        <h2 className="text-[18px] md:text-[24px] leading-[29px] font-bold mt-6 md:mt-0">{subtitle}</h2>
      </div>
      <div className="w-full h-6 bg-gold"></div>
    </div>
  );
};

export default HomeHero;
