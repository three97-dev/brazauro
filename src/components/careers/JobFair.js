import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import arrow from "../../assets/careers/arrow.svg";
import background from "../../assets/careers/background.png";
import "./JobFair.css";

const JobFair = ({ nextJobFairDate, nextJobFairTime, nextJobFairAddress, nextJobFairOther, nextJobFairLines }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-[1440px] mx-auto md:px-12 lg:px-[100px] md:py-6 lg:py-12">
      <img className="absolute left-0 top-[29%] -z-10" src={background} alt="background" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center md:gap-x-10 gap-y-6 bg-dark-gray py-12 md:py-20">
        <h2 className="title sm:col-span-2 md:col-span-1 h-fit font-inter font-bold pr-7 md:pr-0 pl-7 sm:pl-10 lg:pl-8 xl:pl-24 text-pink">
          {t("Our next job fair is scheduled")}
        </h2>
        <div className="relative flex md:items-center md:justify-center h-full px-7 sm:px-12 md:px-0">
          <div className="hidden md:block absolute left-0 top-[15px] w-px h-[90%] bg-very-light-gray"></div>
          <div className="h-fit md:pl-12 text-[18px] leading-[22px] font-bold font-inter text-very-light-gray md:text-pink">
            <span>{nextJobFairDate}</span>
            <br />
            <span>{nextJobFairTime}</span>
            <br />
            <span>{nextJobFairAddress}</span>
            <br />
            <span>{nextJobFairOther}</span>
            <br />
            <span>{nextJobFairLines}</span>
          </div>
        </div>
        <div className="relative flex items-center self-center xl:justify-end h-full px-7 sm:px-12 md:pl-5 lg:pl-8 md:pr-5 xl:pr-16 mt-7 sm:mt-0">
          <div className="hidden md:block absolute left-0 top-[15px] w-px h-[90%] bg-very-light-gray"></div>
          <button className="flex justify-between items-center max-w-[263px] w-full mx-auto sm:mx-0 pl-10 sm:pl-7 md:pl-4 lg:pl-6 lg:pl-10 pr-3 py-4 text-[18px] leading-[22px] font-inter font-bold text-left text-dark-gray border border-[5px] border-gold rounded-[10px] bg-white hover:bg-gold">
            {t("Save to Calendar")}
            <img className="ml-3" src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobFair;
