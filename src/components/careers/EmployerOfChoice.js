import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const EmployerOfChoice = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[1440px] mx-auto md:px-12 lg:px-[100px] md:pt-12">
      <div className="grid md:grid-cols-2 md:gap-x-20 xl:gap-x-36 bg-gold py-12 px-7 sm:px-12 md:px-16 xl:px-28">
        <h2 className="font-bold mb-7 md:mb-0 text-dark-gray font-inter">
          {t("Brazauro is an employer of choice in Brazil")}
        </h2>
        <p className="leading-[22px] text-dark-gray font-inter">
          {t("Why is Brazauro an employe")}
        </p>
      </div>
    </div>
  );
};

export default EmployerOfChoice;
