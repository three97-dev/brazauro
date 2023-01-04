import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import ViewersCounter from "./ViewersCounter";

const Footer = () => {
  const { language } = useI18next();
  const query = useStaticQuery(graphql`
    query FooterQuery {
      data: allContentfulFooter {
        nodes {
          address
          location
          privacyPolicy
          node_locale
        }
      }
    }
  `);
  const footerData = query?.data?.nodes.filter((data) => data.node_locale === language)[0];

  return (
    <div className="w-full bg-nero">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-x-4 w-full max-w-[1440px] mx-auto px-12 lg:px-[100px] py-12 text-gold font-bold text-lg font-open-sans">
        <div>
          <div>{footerData.address}</div>
          <div className="mt-4">{footerData.location}</div>
        </div>
        <ViewersCounter />
        <div className="md:col-start-3 md:justify-self-end mt-12 md:mt-0">{footerData.privacyPolicy}</div>
      </div>
    </div>
  );
};

export default Footer;
