import React from "react";

const CreatedJobs = ({ title, jobsCreatedDuringConstructionsTitle, jobsCreatedDuringConstruction, jobsCreatedDuringOperationTitle, jobsCreatedDuringOperation }) => {
  return (
    <div className="grid md:grid-cols-2 w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pt-16 pb-12 md:pb-24">
      <div className="flex items-center md:px-14 xl:px-32 mb-7 md:mb-0">
        <h2 className="text-dark-gray">{title}</h2>
      </div>
      <div className="md:px-14 xl:px-32">
        <div className="mb-3 text-dark-gray font-inter">
          <span className="text-base md:text-lg font-semibold">{jobsCreatedDuringConstructionsTitle}</span>
          <br />
          <span className="text-4xl md:text-6xl font-bold">{`${jobsCreatedDuringConstruction}+`}</span>
        </div>
        <div className="text-dark-gray font-inter">
          <span className="text-base md:text-lg font-semibold">{jobsCreatedDuringOperationTitle}</span>
          <br />
          <span className="text-4xl md:text-6xl font-bold">{`${jobsCreatedDuringOperation}+`}</span>
        </div>
      </div>
    </div>
  );
};

export default CreatedJobs;
