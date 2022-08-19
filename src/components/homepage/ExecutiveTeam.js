import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Image from "../basic/image/Image";
import RRenderer from "../richtextRenderer";
import BottomShape from "../basic/bottom-shape/BottomShape";
import Slider from "./Slider";

import subtract from "../../assets/subtract.svg";

const ExecutiveTeamMember = ({ name, title, description, image }) => {
  return (
    <div className="flex flex-col items-center">
      <Image image={image} className="w-64 h-64 bg-gray-300" imgStyle={{ objectFit: `cover` }} />
      <h4 className="mt-4 text-center">{name}</h4>
      <div className="text-sm text-dark-gold font-semibold text-center">{title}</div>
      <div className="py-5 md:pl-8 md:pr-6 text-gray-gold">
        <RRenderer data={description} />
      </div>
    </div>
  );
};

const BoardOfDirectorsMember = ({ image, name, title }) => {
  return (
    <div className="flex flex-col items-center">
      <Image image={image} className="w-64 md:w-36 h-64 md:h-36 bg-gray-300" imgStyle={{ objectFit: `cover` }} />
      <h4 className="mt-4 text-center">{name}</h4>
      <div className="text-sm text-dark-gold font-semibold text-center">{title}</div>
    </div>
  );
};

const ExecutiveTeam = ({ executiveTeamData, boardOfDirectorsData }) => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full pt-12 font-open-sans">
      <div className="hidden md:block w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px]">
        <div>
          <h2 className="text-center">{t("Team of Executives and Council of G Mining Ventures")}</h2>
          <h4 className="mt-6 text-dark-gold text-center">{t("Executive Leadership")}</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 mt-12">
          {executiveTeamData.map((executiveTeamMember, index) => (
            <ExecutiveTeamMember
              key={index}
              name={executiveTeamMember.name}
              title={executiveTeamMember.title}
              description={executiveTeamMember.description}
              image={executiveTeamMember.image}
            />
          ))}
        </div>
        <div className="block">
          <hr className="mt-16 border border-dark-gold rounded-full" />
          <h4 className="mt-12 text-dark-gold text-center">{t("Board of Directors")}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 mt-12 mb-32">
            {boardOfDirectorsData.map((boardOfDirectorsMember, index) => (
              <BoardOfDirectorsMember
                key={index}
                image={boardOfDirectorsMember.image}
                name={boardOfDirectorsMember.name}
                title={boardOfDirectorsMember.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="mx-auto px-7 sm:px-12">
          <h2 className="text-center">{t("Team of Executives and Council of G Mining Ventures")}</h2>
          <h4 className="mt-6 text-dark-gold text-center">{t("Executive Leadership")}</h4>
        </div>
        <Slider>
          {executiveTeamData.map((executiveTeamMember, index) => (
            <ExecutiveTeamMember
              key={index}
              name={executiveTeamMember.name}
              title={executiveTeamMember.title}
              description={executiveTeamMember.description}
              image={executiveTeamMember.image}
            />
          ))}
        </Slider>
      </div>
      <hr className="md:hidden mt-12 mb-12 border-t mx-7 border-dark-gold rounded-full" />
      <div className="md:hidden">
        <div className="mx-auto px-7 sm:px-12">
          <h4 className="mt-6 text-dark-gold text-center">{t("Board of Directors")}</h4>
        </div>
        <Slider>
          {boardOfDirectorsData.map((boardOfDirectorsMember, index) => (
            <BoardOfDirectorsMember
              key={index}
              image={boardOfDirectorsMember.image}
              name={boardOfDirectorsMember.name}
              title={boardOfDirectorsMember.title}
            />
          ))}
        </Slider>
      </div>
      <div className="w-full md:hidden">
        <img className="w-full" src={subtract} />
      </div>
      <BottomShape className="hidden md:block" />
    </div>
  );
};

export default ExecutiveTeam;
