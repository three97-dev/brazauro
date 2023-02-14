import React from "react";

import RRenderer from "../richtextRenderer";

import BottomShape from "../basic/bottom-shape/BottomShape";
import TableOfOpenRoles from "./TableOfOpenRoles";

const OurOpenRoles = ({ roles, title, description, openRolesButtonLabel }) => {
  return (
    <>
      <div className="relative w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pt-5 md:pt-10 text-dark-gray">
        <h2 className="leading-[36px] md:leading-[50px] md:text-center font-bold text-dark-gray mb-6 md:mb-12">
          {title}
        </h2>
        <RRenderer
          data={description}
          config={{
            p: "font-inter mb-12 overflow-hidden text-ellipsis",
          }}
        />
        <hr className="border border-gold mb-8" />
        <TableOfOpenRoles
          roles={roles}
          buttonLabel={openRolesButtonLabel}
          labelPositionAvailable="Position Available"
          labelPostingDate="Posting Date"
        />
        <hr className="border border-gold my-8" />
      </div>
      <BottomShape className="mt-24" />
    </>
  );
};

export default OurOpenRoles;
