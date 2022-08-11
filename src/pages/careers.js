import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CreatedJobs from "../components/careers/CreatedJobs";
import Communities from "../components/careers/Communities";
import EmployerOfChoice from "../components/careers/EmployerOfChoice";
import News from "../components/careers/News";
import JobFair from "../components/careers/JobFair";
import OurOpenRoles from "../components/careers/OurOpenRoles";

const Careers = ({ data }) => {
  const { t } = useTranslation();
  const pageData = data?.roles?.nodes;

  return (
    <Layout>
      <Hero title={t("Careers")} />
      <CreatedJobs />
      <Communities />
      <EmployerOfChoice />
      <News />
      <JobFair />
      <OurOpenRoles roles={pageData} />
    </Layout>
  );
};

export const query = graphql`
  query CareersQuery($language: String) {
    locales: allLocale(filter: { ns: { in: ["common", "careers"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    roles: allContentfulOurOpenRoles(filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        link
      }
    }
  }
`;

export default Careers;
