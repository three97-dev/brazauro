import React from "react";

import RRenderer from "../richtextRenderer";

const TopText = ({description}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pb-12 text-gray-gold">
      <RRenderer data={description} className="px-5"/>
    </div>
  );
};

export default TopText;
