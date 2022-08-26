import React from "react";

import Image from "../basic/image/Image";
import RRenderer from "../richtextRenderer";

const MainServiceContract = ({ image, title, description }) => {
  return (
    <div className="w-full bg-gray-gold">
      <div className="w-full max-w-[1440px] mx-auto px-10 sm:px-12 lg:px-[100px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] md:items-center gap-x-8 lg:px-16">
          <div className="flex items-center justify-center justify-self-center md:justify-self-start w-64 h-28 p-5 bg-[#D9D9D9] rounded-[20px] shadow-[10px_10px_40px_rgba(0,0,0,0.25)]">
            <Image image={image} className="object-contain" />
          </div>
          <div className="mt-12 md:mt-0 text-white">
            <h4>{title}</h4>
            <RRenderer data={description} whiteText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainServiceContract;
