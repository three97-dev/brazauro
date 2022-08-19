import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import map from "../../assets/careers/map1.png";
import ellipse from "../../assets/careers/ellipse.svg";

const Communities = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pb-12">
      <div className="mb-12 bg-pink py-7 px-1 md:px-7">
        <h3 className="text-center text-dark-gray">{t("Sourcing a minimum of 30%")}</h3>
      </div>
      <img className="w-full px-5" src={map} alt="Communities surrounding Tocantinzinho." />
    </div>
  );
};

export default Communities;
