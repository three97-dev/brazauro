import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";

import logo from "../assets/logo.png";

const Header = () => {
  const { language, languages, changeLanguage, t } = useI18next();
  const query = useStaticQuery(graphql`
    query HeaderQuery {
      data: allContentfulHeader {
        nodes {
          navLinks {
            label
            url
          }
          node_locale
        }
      }
    }
  `);
  const headerData = query?.data?.nodes.filter((data) => data.node_locale === language)[0];
  
  return (
    <nav className="w-full bg-white">
      <div className="w-full h-[75px] bg-white">
        <div className="grid grid-cols-[1fr_2fr_1fr] items-center w-full h-full max-w-[1440px] mx-auto px-12 lg:px-[100px]">
          <div></div>
          <img src={logo} className="h-[55px] justify-self-center" />
          <Link
            to="/contact-us"
            className="hidden md:flex items-center justify-self-end text-blue-stone text-lg font-bitter"
          >
            {t("Contact Us")}
          </Link>
        </div>
      </div>
      <div className="w-full h-[62px] bg-nero hidden lg:block">
        <div className="flex items-center justify-between w-full h-full max-w-[1440px] mx-auto px-12 lg:px-[100px] text-gold text-lg font-bitter">
          <div className="flex items-center h-full">
            {headerData.navLinks.map((navLink, index) => (
              <Link key={index} to={navLink.url} className="flex items-center px-4 mx-3.5 h-full first:ml-0 last:mr-0">
                {navLink.label}
              </Link>
            ))}
          </div>
          <ul className="flex items-center">
            {languages.map((lng) => (
              <li className="first:mr-4" key={lng}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    changeLanguage(lng);
                  }}
                >
                  {lng}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
