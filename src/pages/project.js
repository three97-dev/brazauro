import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Info from "../components/project/Info";
import Acquisition from "../components/project/Acquisition";

const ProjectPage = ({ data }) => {
  const projectData = data?.allContentfulProjectPage?.nodes[0];
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Hero title={t("Project Hero Title")} />
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
    locales: allLocale(filter: { ns: { in: ["common", "project"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allContentfulProjectPage(filter: { node_locale: { eq: $language } }) {
      nodes {
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
