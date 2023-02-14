import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Image from "../basic/image/Image";

const TableRow = ({ className, children }) => {
  return <div className={`grid grid-cols-2 lg:grid-cols-[290px_180px_auto] font-inter ${className}`}>{children}</div>;
};

const ProcurementStatistics = ({
  procurementStatisticsTitle,
  procurementStatisticsImage,
  lastUpdatedTitle,
  procurementLastUpdatedDate,
  procurementStatisticsData,
}) => {
  return (
    <div className="w-full h-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] pt-12 pb-[100px]">
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
      <div className="max-w-[386px] mb-[50px] mx-auto w-fit">
        <Image image={procurementStatisticsImage} />
      </div>
      <div>
        <TableRow>
          <p className="font-bold p-5">Location</p>
          <p className="font-bold p-5">Total %</p>
          <p className="hidden lg:block font-bold p-5">Items Procured</p>
        </TableRow>
        {procurementStatisticsData.map((item, index) => (
          <TableRow key={index} className="even:bg-pink odd:bg-very-light-gray">
            <p className="font-bold p-5">{item.location}</p>
            <p className="p-5">{item?.totalPercentage ? `${item.totalPercentage}%` : ""}</p>

            <p className="px-5 pt-2 lg:pt-5 pb-5 whitespace-pre-line col-span-full lg:col-auto">
              {item.itemsProcured.itemsProcured}
            </p>
          </TableRow>
        ))}
      </div>
    </div>
  );
};

export default ProcurementStatistics;
