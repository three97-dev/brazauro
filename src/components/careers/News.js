import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Slider from "../homepage/Slider";

import image1 from "../../assets/careers/image1.png";
import image2 from "../../assets/careers/image2.png";
import image3 from "../../assets/careers/image3.png";

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="hidden md:grid grid-cols-3 gap-x-11 gap-y-14 w-full max-w-[1440px] mx-auto px-12 lg:px-[100px] py-12">
        <div className="grid gap-y-7 text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center">
            {t("Multi-year Agreement with the XXX Union")}
          </h3>
          <p className="md:mb-5 leading-[22px] font-inter">{t("Union of Workers")}</p>
          <img className="self-end mx-auto" src={image1} />
        </div>
        <div className="grid gap-y-7 text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center">
            {t("Weekly social activities for all employees")}
          </h3>
          <p className="md:mb-5 leading-[22px] font-inter">{t("Why is Brazauro an employeLorem ipsum")}</p>
          <img className="self-end mx-auto" src={image2} />
        </div>
        <div className="grid gap-y-7 text-dark-gray">
          <h3 className="text-[24px] leading-[29px] font-inter font-bold text-center">
            {t("State-of-the-art onsite living conditions")}
          </h3>
          <p className="md:mb-5 leading-[22px] font-inter">{t("Why is Brazauro an employeLorem ipsum")}</p>
          <img className="self-end mx-auto" src={image3} />
        </div>
      </div>
      <div className="md:hidden mt-5">
        <Slider>
          <div className="!grid gap-y-7 text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">
              {t("Multi-year Agreement with the XXX Union")}
            </h3>
            <p className="md:mb-5 leading-[22px] font-inter">{t("Union of Workers")}</p>
            <img className="self-end mx-auto" src={image1} />
          </div>
          <div className="!grid gap-y-7 text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">
              {t("Weekly social activities for all employees")}
            </h3>
            <p className="md:mb-5 leading-[22px] font-inter">{t("Why is Brazauro an employeLorem ipsum")}</p>
            <img className="self-end mx-auto" src={image2} />
          </div>
          <div className="!grid gap-y-7 text-dark-gray">
            <h3 className="text-[24px] leading-[29px] font-inter font-bold">
              {t("State-of-the-art onsite living conditions")}
            </h3>
            <p className="md:mb-5 leading-[22px] font-inter">{t("Why is Brazauro an employeLorem ipsum")}</p>
            <img className="self-end mx-auto" src={image3} />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default News;
