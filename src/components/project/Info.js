import React from "react";

import RRenderer from "../richtextRenderer";
import Image from "../basic/image/Image";

const Info = ({ aboutTitle, aboutDescription, historyTitle, projectHistory, projectImage }) => {
  return (
    <div className="w-full lg:bg-pink">
      <div className="grid lg:grid-cols-[11fr_14fr] w-full max-w-[1440px] mx-auto">
        <div className="pt-12 pb-12 lg:pb-24 px-7 sm:px-12 lg:pr-14 lg:pl-[100px] lg:bg-pink lg:border-r border-dark-gold">
          <h4>{aboutTitle}</h4>
          <div className="mt-10 lg:mt-16 text-gray-gold">
            <RRenderer data={aboutDescription} config={{ p: "px-4 lg:px-0" }} />
          </div>
        </div>
        <hr className="block lg:hidden bg-dark-gold mx-7 sm:mx-12" />
        <div className="pt-12 pb-16 px-7 sm:px-12 lg:pr-14 lg:pl-[100px] lg:bg-pink">
          <h4>{historyTitle}</h4>
          <div className="md:grid md:grid-cols-[1fr_8fr] lg:grid-cols-[1fr_4fr] gap-x-4 md:gap-x-11 items-center mt-10 text-[18px] leading-[22px] font-bitter">
            {projectHistory.map((historyRow, index) => (
              <React.Fragment key={index}>
                <div className="justify-self-end px-5 py-6 text-blue-stone">{historyRow.year}</div>
                <div className="px-5 py-6 text-gray-gold">{historyRow.description}</div>
              </React.Fragment>
            ))}
          </div>
          <Image image={projectImage} className="mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Info;
