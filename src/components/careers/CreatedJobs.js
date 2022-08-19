import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const CreatedJobs = () => {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pt-12 md:pt-0 pb-12 md:pb-24">
      <div className="flex items-center md:px-14 xl:px-32 mb-7 md:mb-0">
        <h2 className="leading-[36px] md:leading-[50px] text-dark-gray font-inter">{t("We're adding jobs")}</h2>
      </div>
      <div className="md:px-14 xl:px-32">
        <div className="mb-3 text-dark-gray font-inter">
          <span className="text-base md:text-lg font-semibold">{t("Jobs created during construction")}</span>
          <br />
          <span className="text-4xl md:text-6xl font-bold">1200+</span>
        </div>
        <div className="text-dark-gray font-inter">
          <span className="text-base md:text-lg font-semibold">{t("Jobs created during operation")}</span>
          <br />
          <span className="text-4xl md:text-6xl font-bold">600+</span>
        </div>
      </div>
    </div>
  );
};

export default CreatedJobs;
