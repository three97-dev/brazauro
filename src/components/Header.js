import React, { useState } from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import Dropdown from "react-dropdown";

import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, languages, changeLanguage } = useI18next();
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
  const options = languages.map((lng) => lng);

  return (
    <nav className={`w-full bg-white top-0 z-20 ${isOpen && "sticky"}`}>
      <div className="w-full h-14 lg:h-[75px] bg-black lg:bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] items-center w-full h-full max-w-[1440px] mx-auto px-12 lg:px-[100px]">
          <div className="hidden lg:block"></div>
          <Link to="/" className="justify-self-start lg:justify-self-center">
            <img src={logo} alt="logo" className="h-[55px]" />
          </Link>
          <Dropdown
            className="hidden lg:block relative justify-self-end w-[70px]"
            options={options}
            onChange={(e) => changeLanguage(e.value)}
            value={language}
          />
          <div onClick={() => setIsOpen(!isOpen)} className="block lg:hidden justify-self-end h-6 z-40">
            {!isOpen ? (
              <button>
                <img src={menu} alt="menu" />
              </button>
            ) : (
              <button>
                <img src={close} alt="close" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-[62px] bg-nero hidden lg:block">
        <div className="flex items-center justify-between w-full h-full max-w-[1440px] mx-auto px-12 lg:px-[100px] text-gold text-lg font-bitter">
          <div className="flex items-center h-full w-full">
            {headerData.navLinks.map((navLink, index) => (
              <Link
                key={index}
                to={navLink.url}
                className="flex items-center last:ml-auto px-4 mx-3.5 h-full first:ml-0 last:mr-0"
              >
                {navLink.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-0 right-0 bottom-0 top-0 w-full h-screen bg-dark-gray/50 backdrop-blur-sm z-20">
          <div className="fixed top-[-1px] right-0 bottom-0 w-3/4 bg-white z-30">
            <ul className="pt-12 mx-4 border-b">
              {headerData.navLinks.map((navLink, index) => (
                <li className="mb-5">
                  <Link key={index} to={navLink.url} className="grid mx-3.5 h-full first:ml-0 last:mr-0">
                    <h4>{navLink.label}</h4>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex items-center w-fit mx-auto mt-4">
              {languages.map((lng) => (
                <li
                  className={`first:mr-4 font-medium ${
                    language === "es"
                      ? "last:text-dark-gold first:text-dark-gray"
                      : "first:text-dark-gold last:text-dark-gray"
                  }`}
                  key={lng}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      changeLanguage(lng);
                    }}
                  >
                    <h4> {lng.toLocaleUpperCase()}</h4>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
