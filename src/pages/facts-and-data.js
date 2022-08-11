import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TopText from "../components/facts-and-data/TopText";
import ProjectPathForward from "../components/facts-and-data/ProjectPathForward";

const FactsAndData = ({ data }) => {
  const pageData = data?.allContentfulFactsAndDataPage?.nodes[0];
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Hero title={t("Facts and Data Hero Title")} />
      <TopText description={pageData.topText} />
      <ProjectPathForward
        title={pageData.sectionTitle}
        description={pageData.sectionDescription}
        image={pageData.sectionImage}
      />
    </Layout>
  );
};

export const query = graphql`
  query FactsAndDataQuery($language: String) {
    locales: allLocale(filter: { ns: { in: ["common", "facts-and-data"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulFactsAndDataPage(filter: { node_locale: { eq: $language } }) {
      nodes {
        topText {
          raw
        }
        sectionTitle
        sectionDescription {
          raw
        }
        sectionImage {
          gatsbyImageData
        }
      }
    }
  }
`;

export default FactsAndData;
