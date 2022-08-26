import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TopText from "../components/facts-and-data/TopText";
import ProjectPathForward from "../components/facts-and-data/ProjectPathForward";
import SEO from "../components/seo";

const FactsAndData = ({ data }) => {
  const pageData = data?.allContentfulPageFactsAndData?.nodes[0];
  return (
    <Layout>
      <SEO title={pageData.heroTitle} />
      <Hero title={pageData.heroTitle} />
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
    allContentfulPageFactsAndData(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
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
