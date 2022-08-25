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
        <div className="grid gap-y-7 text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center">{firstNewsTitle}</h3>
          <p className="md:mb-5 leading-[22px] font-inter">{firstNewsDescription}</p>
          <Image className="self-end mx-auto" image={firstNewsImage} />
        </div>
        <div className="grid gap-y-7 text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center">{secondNewsTitle}</h3>
          <p className="md:mb-5 leading-[22px] font-inter">{secondNewsDescription}</p>
          <Image className="self-end mx-auto" image={secondNewsImage} />
        </div>
        <div className="grid gap-y-7 text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center">{thirdNewsTitle}</h3>
          <p className="md:mb-5 leading-[22px] font-inter">{thirdNewsDescription}</p>
          <Image className="self-end mx-auto" image={thirdNewsImage} />
        </div>
      </div>
      <div className="md:hidden mt-5">
        <Slider>
          <div className="!grid gap-y-7 text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">{firstNewsTitle}</h3>
            <p className="md:mb-5 leading-[22px] font-inter">{firstNewsDescription}</p>
            <Image className="self-end mx-auto" image={firstNewsImage} />
          </div>
          <div className="!grid gap-y-7 text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">{secondNewsTitle}</h3>
            <p className="md:mb-5 leading-[22px] font-inter">{secondNewsDescription}</p>
            <Image className="self-end mx-auto" image={secondNewsImage} />
          </div>
          <div className="!grid gap-y-7 text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">{thirdNewsTitle}</h3>
            <p className="md:mb-5 leading-[22px] font-inter">{thirdNewsDescription}</p>
            <Image className="self-end mx-auto" image={thirdNewsImage} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default News;
