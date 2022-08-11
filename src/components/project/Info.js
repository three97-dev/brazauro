import React from "react";

import RRenderer from "../richtextRenderer";

const Info = ({ aboutTitle, aboutDescription, historyTitle, projectHistory }) => {
  return (
    <div className="grid lg:grid-cols-[11fr_14fr] w-full max-w-[1440px] mx-auto">
      <div className="pt-12 pb-12 lg:pb-24 px-7 sm:px-12 lg:pr-14 lg:pl-[100px]">
        <h3 className="text-center lg:text-left">&lt;{aboutTitle}&gt;</h3>
        <div className="mt-10 lg:mt-16 text-gray-gold">
          <RRenderer data={aboutDescription} />
        </div>
      </div>
      <div className="pt-12 pb-16 px-7 sm:px-12 lg:pl-14 lg:pr-[100px] bg-pink">
        <h3 className="text-center lg:text-left">{historyTitle}</h3>
        <div className="grid grid-cols-[1fr_4fr] gap-x-4 md:gap-x-11 items-center mt-10 text-[18px] leading-[22px] font-bitter">
          {projectHistory.map((historyRow, index) => (
            <React.Fragment key={index}>
              <div className="justify-self-end px-5 py-6 text-blue-stone">{historyRow.year}</div>
              <div className="px-5 py-6 text-gray-gold">{historyRow.description}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
