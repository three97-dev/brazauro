import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby-plugin-react-i18next";

import BottomShape from "../basic/bottom-shape/BottomShape";

import arrow from "../../assets/careers/arrow.svg";
import subtract from "../../assets/subtract.svg";
import arrowLeft from "../../assets/careers/arrow-left.svg";
import arrowRight from "../../assets/careers/arrow-right.svg";

const Prev = () => {
  return (
    <div className="flex items-center py-2 px-8 bg-black">
      <img className="block mr-2" src={arrowLeft} alt="arrow" />
      <div className="text-pink">Prev</div>
    </div>
  );
};

const Next = () => {
  return (
    <div className="flex items-center py-2 px-8 bg-black">
      <div className="text-pink">Next</div>
      <img className="block ml-2" src={arrowRight} alt="arrow" />
    </div>
  );
};

const Roles = ({ roles }) => {
  return (
    <div className="grid gap-y-5">
      {roles &&
        roles.map((role, index) => (
          <Link
            key={role.index}
            to={role.link}
            className="roles-shadow flex justify-between items-center max-w-[387px] w-full mx-auto sm:mx-0 pl-4 pr-10 py-8 text-[18px] leading-[22px] font-inter font-bold text-left text-dark-gray border border-[5px] border-gold rounded-[10px] bg-white hover:bg-gold"
          >
            {role.title}
            <img className="ml-3" src={arrow} alt="arrow" />
          </Link>
        ))}
    </div>
  );
};

const OurOpenRoles = ({ roles, description }) => {
  const { t } = useTranslation();
  const itemsPerPage = 5;
  const [currentRoles, setCurrentRoles] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentRoles(roles.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(roles.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % roles.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="relative w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] pt-12 text-dark-gray">
        <h2 className="leading-[36px] md:leading-[50px] md:text-center font-inter font-bold text-dark-gray mb-6 md:mb-12">
          {t("Our Open Roles")}
        </h2>
        <p className="mb-12 leading-[22px] font-inter">{description}</p>
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-5">
          {roles.map((role, index) => (
            <Link
              key={role.index}
              to={role.link}
              className="roles-shadow flex justify-between items-center max-w-[387px] w-full mx-auto sm:mx-0 pl-4 pr-10 py-8 text-[18px] leading-[22px] font-inter font-bold text-left text-dark-gray border border-[5px] border-gold rounded-[10px] bg-white hover:bg-gold"
            >
              {role.title}
              <img className="ml-3" src={arrow} alt="arrow" />
            </Link>
          ))}
        </div>
        <div className="sm:hidden">
          <Roles roles={currentRoles} />
          <ReactPaginate
            nextLabel={<Next />}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            previousLabel={<Prev />}
            renderOnZeroPageCount={null}
            containerClassName="flex justify-between mt-12"
            pageClassName="hidden"
          />
        </div>
      </div>
      <div className="w-full md:hidden mt-12">
        <img className="w-full" src={subtract} />
      </div>
      <BottomShape className="hidden md:block mt-24" />
    </>
  );
};

export default OurOpenRoles;
