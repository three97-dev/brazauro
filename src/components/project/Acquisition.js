import React from "react";

import Image from "../basic/image/Image";
import RRenderer from "../richtextRenderer";

const Acquisition = ({ projectData }) => {
  return (
    <div className="w-full bg-gray-gold">
      <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] py-12 text-white">
        <h3 className="text-center mb-6">{projectData.acquisitionTitle}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_491px] gap-x-11 items-center justify-items-center">
          <div className="md:px-5 py-6">
            <RRenderer
              data={projectData.acquisitionDescription}
              config={{
                p: "mb-7 last:mb-0",
              }}
            />
          </div>
          <div className="flex items-center justify-center h-[275px] w-full max-w-[491px] mt-12 lg:mt-0 px-6 bg-white rounded-[20px]">
            <Image image={projectData.acquisitionImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acquisition;
