import React from "react";

import RRenderer from "../richtextRenderer";

const Info = ({ aboutTitle, aboutDescription, historyTitle, projectHistory }) => {
  return (
    <div className="w-full lg:bg-pink">
      <div className="grid lg:grid-cols-[11fr_14fr] w-full max-w-[1440px] mx-auto">
        <div className="pt-12 md:pt-6 lg:pt-12 pb-12 lg:pb-24 px-7 sm:px-12 lg:pr-14 lg:pl-[100px] lg:bg-pink">
          <h2>&lt;{aboutTitle}&gt;</h2>
          <div className="mt-10 lg:mt-16 text-gray-gold">
            <RRenderer data={aboutDescription} config={{ p: "px-4 lg:px-0" }} />
          </div>
        </div>
        <hr className="block lg:hidden bg-dark-gold mx-7 sm:mx-12" />
        <div className="pt-12 pb-16 px-7 sm:px-12 lg:pr-14 lg:pl-[100px] lg:bg-pink">
          <h2>{historyTitle}</h2>
          <div className="relative md:grid md:grid-cols-[1fr_8fr] lg:grid-cols-[1fr_4fr] gap-x-4 md:gap-x-11 items-center mt-10 text-[18px] leading-[22px] font-bitter">
            <div className="hidden lg:block absolute top-10 left-[-78px] h-[78%] w-px bg-dark-gold"></div>
            {projectHistory.map((historyRow, index) => (
              <React.Fragment key={index}>
                <div className="justify-self-end px-5 py-6 text-blue-stone">{historyRow.year}</div>
                <div className="px-5 py-6 text-gray-gold">{historyRow.description}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
