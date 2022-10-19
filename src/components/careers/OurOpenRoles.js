import React from "react";

import RRenderer from "../richtextRenderer";

import BottomShape from "../basic/bottom-shape/BottomShape";
import OpenRole from "./OpenRole";

import subtract from "../../assets/subtract.svg";

const OurOpenRoles = ({ roles, title, description, openRolesButtonLabel }) => { 
  return (
    <>
      <div className="relative w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pt-16 md:pt-12 text-dark-gray">
        <h2 className="leading-[36px] md:leading-[50px] md:text-center font-bold text-dark-gray mb-6 md:mb-12">
          {title}
        </h2>
        <RRenderer
          data={description}
          config={{
            p: "font-inter mb-12",
          }}
        />
        <hr className="border border-gold mb-12" />
        <div>
          {roles.map((role) => (
            <OpenRole
              title={role.title}
              description={role.description}
              smallImage={role.smallImage}
              largeImage={role.largeImage}
              buttonLabel={openRolesButtonLabel}
              pageUrl={role.fields.pageUrl}
              hasBorder
            />
          ))}
        </div>
      </div>
      <div className="w-full md:hidden">
        <img className="w-full" src={subtract} />
      </div>
      <BottomShape className="hidden md:block mt-24" />
    </>
  );
};

export default OurOpenRoles;
