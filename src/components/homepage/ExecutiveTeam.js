import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Image from "../basic/image/Image";
import RRenderer from "../richtextRenderer";
import BottomShape from "../basic/bottom-shape/BottomShape";

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
      <Image image={image} className="w-36 h-36 bg-gray-300" imgStyle={{ objectFit: `cover` }} />
      <h4 className="mt-4 text-center">{name}</h4>
      <div className="text-sm text-dark-gold font-semibold text-center">{title}</div>
    </div>
  );
};

const ExecutiveTeam = ({
  executiveTeamData,
  boardOfDirectorsData,
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full py-12 bg-pink font-open-sans">
      <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px]">
        <div>
          <h3 className="text-center">{t("Team of Executives and Council of G Mining Ventures")}</h3>
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
      <BottomShape />
    </div>
  );
};

export default ExecutiveTeam;