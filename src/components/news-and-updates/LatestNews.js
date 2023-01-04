import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const LatestNews = ({ latestNewsTitle, latestNews }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] pt-3 pb-7">
      <h4 className="mb-10">{latestNewsTitle}</h4>
      <div>
        {latestNews.map((item, index) => (
          <div key={index} className="shadow sm:flex p-4 mb-6 rounded-[10px] border-[5px] border-gold">
            <h5 className="block sm:hidden mb-4 text-center">{item.title}</h5>
            <GatsbyImage
              objectFit="contain"
              image={item.image.gatsbyImageData}
              alt={item.image.title}
              className="flex-shrink-0 block h-fit mx-auto sm:mr-10 mb-3 sm:mb-0"
            />
            <div>
              <h5 className="hidden sm:block mb-2">{item.title}</h5>
              <p className="mb-2">{item.description.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
