import React from "react";

import Image from "../basic/image/Image";
import Slider from "../homepage/Slider";

const News = ({
  firstNewsTitle,
  firstNewsDescription,
  firstNewsImage,
  secondNewsTitle,
  secondNewsDescription,
  secondNewsImage,
  thirdNewsTitle,
  thirdNewsDescription,
  thirdNewsImage,
}) => {
  return (
    <>
      <div className="hidden md:grid grid-cols-3 gap-x-11 gap-y-14 w-full max-w-[1440px] mx-auto px-12 lg:px-[100px] py-12">
        <div className="flex flex-col h-full text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center mb-7">{firstNewsTitle}</h3>
          <p className="md:mb-10 leading-[22px] font-inter">{firstNewsDescription}</p>
          <Image className="block mt-auto mx-auto md:h-[200px] lg:h-[270px]" image={firstNewsImage} />
        </div>
        <div className="flex flex-col h-full text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center mb-7">{secondNewsTitle}</h3>
          <p className="md:mb-10 leading-[22px] font-inter">{secondNewsDescription}</p>
          <Image className="block mt-auto mx-auto md:h-[200px] lg:h-[270px]" image={secondNewsImage} />
        </div>
        <div className="flex flex-col h-full text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center mb-7">{thirdNewsTitle}</h3>
          <p className="md:mb-10 leading-[22px] font-inter">{thirdNewsDescription}</p>
          <Image className="block mt-auto mx-auto md:h-[200px] lg:h-[270px]" image={thirdNewsImage} />
        </div>
      </div>
      <div className="md:hidden mt-5">
        <Slider>
          <div className="!grid gap-y-7 h-full text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">{firstNewsTitle}</h3>
            <p className="md:mb-5 leading-[22px] font-inter">{firstNewsDescription}</p>
            <Image className="self-end mt-auto mx-auto w-full max-w-[385px] h-[270px]" image={firstNewsImage} />
          </div>
          <div className="!grid gap-y-7 h-full text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">{secondNewsTitle}</h3>
            <p className="md:mb-5 leading-[22px] font-inter">{secondNewsDescription}</p>
            <Image className="self-end mt-auto mx-auto w-full max-w-[385px] h-[270px]" image={secondNewsImage} />
          </div>
          <div className="!grid gap-y-7 h-full text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">{thirdNewsTitle}</h3>
            <p className="md:mb-5 leading-[22px] font-inter">{thirdNewsDescription}</p>
            <Image className="self-end mt-auto mx-auto w-full max-w-[385px] h-[270px]" image={thirdNewsImage} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default News;
