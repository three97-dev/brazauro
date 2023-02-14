import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import RRenderer from "../richtextRenderer";
import Button from "../basic/button/Button";

const OpenRole = ({ title, description, smallImage, largeImage, buttonLabel, pageUrl, hasBorder, className }) => {
  return (
    <>
      <div className={`${className}`}>
        <div className="grid gap-y-6 md:gap-y-8 md:mr-[3px]">
          <div className="flex items-center h-fit bg-pink">
            <GatsbyImage
              objectFit="cover"
              image={smallImage.gatsbyImageData}
              alt={smallImage.title}
              className="flex-shrink-0"
            />
            <div className="w-full py-[18px]">
              <h3 className="uppercase font-inter font-bold px-5 xl:px-10">{title}</h3>
            </div>
          </div>
          <RRenderer
            data={description}
            config={{
              p: "font-inter md:pr-10",
            }}
          />
          {pageUrl && (
            <Button className="hidden md:flex items-end" link={pageUrl} buttonClasses="py-[14px] px-[50px] bg-gold">
              {buttonLabel}
            </Button>
          )}
        </div>
        <GatsbyImage
          objectFit="cover"
          image={largeImage.gatsbyImageData}
          alt={largeImage.title}
          className="md:max-w-[400px] lg:max-w-[600px]"
        />
      </div>
      
    </>
  );
};

export default OpenRole;
