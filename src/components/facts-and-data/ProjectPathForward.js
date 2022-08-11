import React from "react";
import Image from "../basic/image/Image";

import RRenderer from "../richtextRenderer";

const ProjectPathForward = ({ title,description, image  }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pt-4 lg:pt-10 pb-12">
      <h3 className="px-5">{title}</h3>
      <div className="mt-8 lg:mt-12 px-5 text-gray-gold">
        <RRenderer data={description} />
      </div>
      <Image image={image} className="mt-14" />
    </div>
  );
};

export default ProjectPathForward;
