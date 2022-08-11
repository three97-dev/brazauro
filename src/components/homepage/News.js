import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {Link} from 'gatsby-plugin-react-i18next';

import Image from "../basic/image/Image";
import RRenderer from "../richtextRenderer";

const NewsTile = ({ heading, image, description, link, className }) => {
  const { t } = useTranslation();
  return (
    <div className={`bg-pink rounded-b-[20px] shadow-[10px_10px_40px_rgba(0,0,0,0.25)] font-open-sans ${className}`}>
      <div className="w-full h-5 bg-nero"></div>
      <h3 className="px-5 py-6 text-center text-dark-gold">{heading}</h3>
      <Image image={image} className="bg-gray-200 w-full h-[290px]" imgStyle={{ objectFit: `cover` }} />
      <div className="p-5">
        <h4 className="text-center">{t("Team of Executives and Council of G Mining Ventures")}</h4>
        <div className="mt-5 text-gray-gold">
          <RRenderer data={description} />
        </div>
        <Link to={link}>
          <div className="mt-10 text-lg font-bold text-gray-gold underline">Read More</div>
        </Link>
      </div>
    </div>
  );
};

const News = ({ title, newsData }) => {
  return (
    <div className="w-full">
      <h3 className="text-center pt-12 xl:pb-8">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] py-12">
        {newsData.map((nesTile, index) => (
          <NewsTile
            key={index}
            heading={nesTile.heading}
            image={nesTile.image}
            title={nesTile.title}
            description={nesTile.description}
            link={nesTile.link}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default News;