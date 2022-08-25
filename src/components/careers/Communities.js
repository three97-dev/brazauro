import React from "react";

import Image from "../basic/image/Image";

const Communities = ({title, image}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pb-12">
      <div className="mb-12 bg-pink py-7 px-1 md:px-7">
        <h3 className="text-center text-dark-gray">{title}</h3>
      </div>
      <Image className="w-full h-full" image={image} />
    </div>
  );
};

export default Communities;
