import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Info from "../components/project/Info";
import Acquisition from "../components/project/Acquisition";
import SEO from "../components/seo";

const ProjectPage = ({ data }) => {
  const projectData = data?.allContentfulPageProject?.nodes[0];
  return (
    <Layout>
      <SEO title={projectData.heroTitle} />
      <Hero title={projectData.heroTitle} />
      <Info
        projectData={projectData}
        aboutTitle={projectData.aboutTitle}
        aboutDescription={projectData.aboutDescription}
        historyTitle={projectData.projectHistoryTitle}
        projectHistory={projectData.projectHistory}
      />
      <Acquisition projectData={projectData} />
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($language: String) {
    allContentfulPageProject(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
        aboutTitle
        aboutDescription {
          raw
        }
        projectHistoryTitle
        projectHistory {
          year
          description
        }
        acquisitionTitle
        acquisitionDescription {
          raw
        }
        acquisitionImage {
          gatsbyImageData
        }
      }
    }
  }
`;

export default ProjectPage;
