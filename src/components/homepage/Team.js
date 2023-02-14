import React from "react";

import BottomShape from "../basic/bottom-shape/BottomShape";

import "./Team.css";

const TeamData = ({ title, data }) => {
  return (
    <div className="mt-[64px]">
      <div className="bg-pink flex justify-center">
        <h3 className="my-[25px] text-center text-dark-gold">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-[50px] mt-[28px]">
        {data.map((teamMember, index) => {
          return (
            <div key={index} className="min-h-[112px] bg-light-gray flex justify-center items-center text-center">
              <div>
                <h5>{teamMember.name}</h5>
                <div className="text-[14px] leading-[20px] mt-2.5">{teamMember.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Team = ({ title, leftOffice, leftTeamData, rightOffice, rightTeamData }) => {
  return (
    <div className="relative w-full pt-12 font-open-sans">
      <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px]">
        <div>
          <h2 className="text-center">{title}</h2>
        </div>
        <div className="grid home-page-team-layout">
          <TeamData title={leftOffice} data={leftTeamData} />

          <div className="hidden lg:flex justify-center mt-[173px]">
            <div className="h-full w-[1px] bg-black"></div>
          </div>

          <TeamData title={rightOffice} data={rightTeamData} />
        </div>
      </div>
      <BottomShape className="mt-[78px]" />
    </div>
  );
};

export default Team;
