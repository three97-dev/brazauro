import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import StatisticSlider from "./StatisticSlider";

const EmploymentStatistics = ({
  employmentStatisticsTitle,
  lastUpdatedTitle,
  employmentLastUpdatedDate,
  companyBrmAndGmin,
  employedContractor,
  genderSplit,
}) => {
  return (
    <div className="w-full h-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] pb-12">
      <div className="flex flex-wrap justify-between gap-x-5 gap-y-3 py-[18px] px-4 mb-12 bg-pink">
        <div className="flex items-center">
          <StaticImage src={"../../assets/purchasing/statistics.svg"} alt="statistics icon" className="mr-5" />
          <h4>{employmentStatisticsTitle}</h4>
        </div>
        <div className="font-inter italic">
          <span className="mr-1">{lastUpdatedTitle}</span>
          <span>{employmentLastUpdatedDate}</span>
        </div>
      </div>
      <div className="hidden md:flex flex-wrap justify-between gap-y-8 gap-x-5 text-center px-8 xl:px-24">
        <div className="grid justify-center mb-7 xl:mb-0">
          <h3 className="mb-6">{companyBrmAndGmin.title}</h3>
          <div className="w-[280px] h-[280px] rounded-full p-10 mb-6 bg-very-light-gray">
            <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-pink">
              <StaticImage src={"../../assets/purchasing/logo.png"} alt="logo icon" />
            </div>
          </div>
          <div className="grid gap-y-3">
            <p className="font-bold">{companyBrmAndGmin.percentageFromBrazauro} from Brazauro</p>
            <p className="font-bold">{companyBrmAndGmin.employeesFromBrazauro} Employees</p>
            <p>{companyBrmAndGmin.percentageFromGmin} from GMIN</p>
            <p>{companyBrmAndGmin.employeesFromGmin} Employees</p>
          </div>
        </div>
        <div className="grid justify-center mb-7 xl:mb-0">
          <h3 className="mb-6">{employedContractor.title}</h3>
          <div className="w-[280px] h-[280px] rounded-full p-10 mb-6 bg-very-light-gray">
            <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-pink">
              <StaticImage src={"../../assets/purchasing/miner.png"} alt="miner icon" />
            </div>
          </div>
          <div className="grid gap-y-3">
            <p className="font-bold">{employedContractor.percentageFromBrazauro} from Brazauro</p>
            <p className="font-bold">{employedContractor.employeesFromBrazauro} Employees</p>
            <p>{employedContractor.percentageFromGmin} from GMIN</p>
            <p>{employedContractor.employeesFromGmin} Employees</p>
          </div>
        </div>
        <div className="grid justify-center">
          <h3 className="mb-6">{genderSplit.title}</h3>
          <div className="w-[280px] h-[280px] rounded-full p-10 mb-6 bg-very-light-gray">
            <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full bg-pink">
              <StaticImage src={"../../assets/purchasing/gender.png"} alt="gender icon" />
            </div>
          </div>
          <div className="grid gap-y-3">
            <p className="font-bold">{genderSplit.percentageFromBrazauro} from Brazauro</p>
            <p className="font-bold">{genderSplit.employeesFromBrazauro} Employees</p>
            <p>{genderSplit.percentageFromGmin} from GMIN</p>
            <p>{genderSplit.employeesFromGmin} Employees</p>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <StatisticSlider>
          <div className="mb-7">
            <h3 className="text-center mb-6">{companyBrmAndGmin.title}</h3>
            <div className="flex justify-center items-center mx-auto w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full mb-6 bg-very-light-gray">
              <div className="flex items-center justify-center w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full bg-pink">
                <StaticImage src={"../../assets/purchasing/logo.png"} alt="logo icon" />
              </div>
            </div>
            <div className="grid gap-y-3 text-center">
              <p className="font-bold">{companyBrmAndGmin.percentageFromBrazauro} from Brazauro</p>
              <p className="font-bold">{companyBrmAndGmin.employeesFromBrazauro} Employees</p>
              <p>{companyBrmAndGmin.percentageFromGmin} from GMIN</p>
              <p>{companyBrmAndGmin.employeesFromGmin} Employees</p>
            </div>
          </div>
          <div className="mb-7">
            <h3 className="text-center mb-6">{employedContractor.title}</h3>
            <div className="flex justify-center items-center mx-auto w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full mb-6 bg-very-light-gray">
              <div className="flex items-center justify-center w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full bg-pink">
                <StaticImage src={"../../assets/purchasing/miner.png"} alt="miner icon" />
              </div>
            </div>
            <div className="grid gap-y-3 text-center">
              <p className="font-bold">{employedContractor.percentageFromBrazauro} from Brazauro</p>
              <p className="font-bold">{employedContractor.employeesFromBrazauro} Employees</p>
              <p>{employedContractor.percentageFromGmin} from GMIN</p>
              <p>{employedContractor.employeesFromGmin} Employees</p>
            </div>
          </div>
          <div className="mb-7">
            <h3 className="text-center mb-6">{genderSplit.title}</h3>
            <div className="flex justify-center items-center mx-auto w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full mb-6 bg-very-light-gray">
              <div className="flex items-center justify-center w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full bg-pink">
                <StaticImage src={"../../assets/purchasing/gender.png"} alt="gender icon" />
              </div>
            </div>
            <div className="!grid gap-y-3 text-center">
              <p className="font-bold">{genderSplit.percentageFromBrazauro} from Brazauro</p>
              <p className="font-bold">{genderSplit.employeesFromBrazauro} Employees</p>
              <p>{genderSplit.percentageFromGmin} from GMIN</p>
              <p>{genderSplit.employeesFromGmin} Employees</p>
            </div>
          </div>
        </StatisticSlider>
      </div>
    </div>
  );
};

export default EmploymentStatistics;
