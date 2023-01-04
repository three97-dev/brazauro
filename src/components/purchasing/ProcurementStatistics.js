import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProcurementStatistics = ({
  procurementStatisticsTitle,
  lastUpdatedTitle,
  procurementLastUpdatedDate,
  procurementStatisticsData,
}) => {
  return (
    <div className="w-full h-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] py-12">
      <div className="flex flex-wrap justify-between gap-x-5 gap-y-3 py-[18px] px-4 mb-12 bg-pink">
        <div className="flex items-center">
          <StaticImage src={"../../assets/purchasing/shopping-cart.svg"} alt="statistics icon" className="mr-5" />
          <h4>{procurementStatisticsTitle}</h4>
        </div>
        <div className="font-inter italic">
          <span className="mr-1">{lastUpdatedTitle}</span>
          <span>{procurementLastUpdatedDate}</span>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          {procurementStatisticsData.map((item, index) => (
            <div key={index} className="grid grid-cols-[220px_20px_minmax(693px,_auto)] md:grid-cols-[280px_40px_minmax(693px,_auto)] w-full min-w-[935px] md:min-w-[1013px] font-inter even:bg-pink odd:bg-very-light-gray">
              <p className="font-bold p-5">{item.location}</p>
              <div className="bg-white"></div>
              <p className="p-5 whitespace-pre-line">{item.itemsProcured.itemsProcured}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcurementStatistics;
