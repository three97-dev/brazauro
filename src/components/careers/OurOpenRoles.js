import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby-plugin-react-i18next";

import arrow from "../../assets/careers/arrow.svg";
import BottomShape from "../basic/bottom-shape/BottomShape";

const OurOpenRoles = ({ roles }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pt-12 pb-24 md:pb-32 xl:pb-48 text-dark-gray">
      <h2 className="leading-[36px] md:leading-[50px] text-center font-inter text-dark-gray mb-12">{t("Our Open Roles")}</h2>
      <p className="mb-12 leading-[22px] font-inter">
        {t("Lorem ipsum dolor sit amet")}
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-5">
        {roles.map((role, index) => (
          <Link
            key={role.index}
            to={role.link}
            className="roles-shadow flex justify-between items-center max-w-[387px] w-full mx-auto sm:mx-0 pl-4 pr-10 py-8 text-[18px] leading-[22px] font-inter font-bold text-left text-dark-gray border border-[5px] border-gold rounded-[10px] bg-white hover:bg-gold"
          >
            {role.title}
            <img className="ml-3" src={arrow} alt="arrow" />
          </Link>
        ))}
      </div>
      <BottomShape />
    </div>
  );
};

export default OurOpenRoles;
