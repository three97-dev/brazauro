import React from "react";
import { Link } from "gatsby-plugin-react-i18next";

import Image from "../basic/image/Image";
import RRenderer from "../richtextRenderer";
import Slider from "./Slider";

const NewsTile = ({ heading, image, description, link, className }) => {
  return (
    <div
      className={`bg-pink rounded-b-[20px] shadow-[10px_10px_35px_rgba(0,0,0,0.15)] md:shadow-[10px_10px_40px_rgba(0,0,0,0.25)] font-open-sans ${className}`}
    >
      <div className="w-full h-5 bg-nero"></div>
      <h3 className="px-5 py-6 text-center text-dark-gold">{heading}</h3>
      <Image image={image} className="bg-gray-200 w-full h-[290px]" imgStyle={{ objectFit: `cover` }} />
      <div className="p-5">
        <div className="mt-5 text-gray-gold">
          <RRenderer data={description} />
        </div>
        <Link className="hidden" to={link}>
          <div className="mt-10 text-lg font-bold text-gray-gold underline">Read More</div>
        </Link>
      </div>
    </div>
  );
};

const News = ({ title, newsData }) => {
  return (
    <div className="w-full">
      <h2 className="text-center px-7 sm:px-12 lg:px-[100px] pt-12">{title}</h2>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] py-12">
        {newsData.map((neswTile, index) => (
          <NewsTile
            key={index}
            heading={neswTile.heading}
            image={neswTile.image}
            description={neswTile.description}
            link={neswTile.link}
            className=""
          />
        ))}
      </div>
      <div className="md:hidden">
        <Slider>
          {newsData.map((nesTile, index) => (
            <NewsTile
              key={index}
              heading={nesTile.heading}
              image={nesTile.image}
              description={nesTile.description}
              link={nesTile.link}
              className="h-full"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
