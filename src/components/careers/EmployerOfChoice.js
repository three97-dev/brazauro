import React from "react";

import RRenderer from "../richtextRenderer";

const EmployerOfChoice = ({ title, description }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto md:px-12 lg:px-[100px] md:pt-12">
      <div className="grid items-center md:grid-cols-2 md:gap-x-20 xl:gap-x-36 bg-gold py-12 px-7 sm:px-12 md:px-16 xl:px-28">
        <h2 className="mb-7 md:mb-0 font-bold text-dark-gray">{title}</h2>
        <RRenderer
          data={description}
          config={{
            p: "leading-[22px] text-dark-gray font-inter last:!mb-0",
          }}
        />
      </div>
    </div>
  );
};

export default EmployerOfChoice;
