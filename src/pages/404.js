import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Seo title={t('404: Not found')} />
      <div className="flex flex-col place-content-center place-items-center min-h-[calc(100vh_-_305px)]">
        <h2>{t("NOT FOUND")}</h2>
        <p>{t("Message")}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String) {
    locales: allLocale(filter: {ns: {in: ["common", "404"]}, language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default NotFoundPage;
