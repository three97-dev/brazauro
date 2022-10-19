import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

import RRenderer from "../richtextRenderer";
import Button from "../basic/button/Button";

const OpenRole = ({ title, description, smallImage, largeImage, buttonLabel, pageUrl, hasBorder, className }) => {
  return (
    <>
      <div className={`flex flex-col md:flex-row w-full ${className}`}>
        <div className="grid gap-y-6 md:gap-y-8 md:mr-[3px]">
          <div className="flex items-center h-fit bg-pink pl-6 md:pl-0">
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
          className="md:w-[295px] lg:w-[345px] xl:w-[491px] md:h-[200px] lg:h-[230px] xl:h-[344px] flex-shrink-0 mt-6 md:mt-0"
        />
      </div>
      {pageUrl && (
        <Button
          className="flex md:hidden items-end mt-6 mx-auto"
          link={pageUrl}
          buttonClasses="py-[14px] px-[50px] bg-gold"
        >
          {buttonLabel}
        </Button>
      )}
      {hasBorder && <hr className="border border-gold my-12" />}
    </>
  );
};

export default OpenRole;
