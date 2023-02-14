import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import "./TableOfOpenRoles.css";

const TableHeadingRow = ({ labelPositionAvailable, labelPostingDate }) => {
  return (
    <div className="grid table-of-open-roles-row gap-x-[20px] lg:gap-x-[40px]">
      <div className="hidden lg:block"></div>

      <h4 className="col-span-full lg:col-auto">{labelPositionAvailable}</h4>

      <h4 className="hidden lg:block">{labelPostingDate}</h4>
    </div>
  );
};

const TableRow = ({ role, buttonLabel }) => {
  return (
    <div className="grid table-of-open-roles-row bg-pink gap-x-[20px] lg:gap-x-[40px] min-h-[77px]">
      <div className="w-[67px] flex items-center">
        <GatsbyImage
          objectFit="cover"
          image={role.smallImage.gatsbyImageData}
          alt={role.smallImage.title}
          className="flex-shrink-0"
        />
      </div>

      <div className="flex items-center py-2">
        <div>
          <div className="uppercase font-inter text-[18px] leading-[24px] lg:text-[26px] lg:leading-[31px]">
            {role.title}
          </div>
          <div className="lg:hidden uppercase font-inter text-[14px] leading-[20px]">{role.createdAt}</div>
          <div className="lg:hidden mt-2">
            <Link
              to={role.fields.pageUrl}
              className="text-[16px] leading-[20px] text-dark-gold font-bold font-inter underline underline-offset-4 lg:mr-2"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex items-center">
        <div className="uppercase font-inter text-[18px] leading-[24px] lg:text-[26px] lg:leading-[31px] tracking-tight">
          {role.createdAt}
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-end	mr-[36px]">
        <Link
          to={role.fields.pageUrl}
          className="text-[18px] leading-[22px] text-dark-gold font-bold font-inter underline underline-offset-4 lg:mr-2"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};

const TableOfOpenRoles = ({ roles, buttonLabel, labelPositionAvailable, labelPostingDate }) => {
  return (
    <div className="md:min-h-[382px]">
      <div className="grid gap-y-[15px]">
        <TableHeadingRow labelPositionAvailable={labelPositionAvailable} labelPostingDate={labelPostingDate} />
        {roles.map((role) => (
          <TableRow role={role} buttonLabel={buttonLabel} />
        ))}
      </div>
    </div>
  );
};

export default TableOfOpenRoles;
