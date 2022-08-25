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
  const pageData = data?.allContentfulCareersPage?.nodes[0];
  const roles = data?.roles?.nodes;

  return (
    <Layout>
      <Hero title={t("Careers")} />
      <CreatedJobs
        jobsCreatedDuringConstruction={pageData.jobsCreatedDuringConstruction}
        jobsCreatedDuringOperation={pageData.jobsCreatedDuringOperation}
      />
      <Communities title={pageData.communitiesTitle} image={pageData.communitiesImage} />
      <EmployerOfChoice
        title={pageData.employerOfChoiceTitle}
        description={pageData.employerOfChoiceDescription.employerOfChoiceDescription}
      />
      <News
        firstNewsTitle={pageData.firstNewsTitle}
        firstNewsDescription={pageData.firstNewsDescription.firstNewsDescription}
        firstNewsImage={pageData.firstNewsImage}
        secondNewsTitle={pageData.secondNewsTitle}
        secondNewsDescription={pageData.secondNewsDescription.secondNewsDescription}
        secondNewsImage={pageData.secondNewsImage}
        thirdNewsTitle={pageData.thirdNewsTitle}
        thirdNewsDescription={pageData.thirdNewsDescription.thirdNewsDescription}
        thirdNewsImage={pageData.thirdNewsImage}
      />
      <JobFair
        nextJobFairDate={pageData.nextJobFairDate}
        nextJobFairTime={pageData.nextJobFairTime}
        nextJobFairAddress={pageData.nextJobFairAddress}
        nextJobFairOther={pageData.nextJobFairOther}
        nextJobFairLines={pageData.nextJobFairLines}
      />
      <OurOpenRoles roles={roles} description={pageData.openRolesDescription.openRolesDescription} />
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
    allContentfulCareersPage(filter: { node_locale: { eq: $language } }) {
      nodes {
        jobsCreatedDuringConstruction
        jobsCreatedDuringOperation
        communitiesTitle
        communitiesImage {
          gatsbyImageData
          title
        }
        employerOfChoiceTitle
        employerOfChoiceDescription {
          employerOfChoiceDescription
        }
        firstNewsTitle
        firstNewsDescription {
          firstNewsDescription
        }
        firstNewsImage {
          gatsbyImageData
          title
        }
        secondNewsTitle
        secondNewsDescription {
          secondNewsDescription
        }
        secondNewsImage {
          gatsbyImageData
          title
        }
        thirdNewsTitle
        thirdNewsDescription {
          thirdNewsDescription
        }
        thirdNewsImage {
          gatsbyImageData
          title
        }
        nextJobFairDate
        nextJobFairTime
        nextJobFairAddress
        nextJobFairOther
        nextJobFairLines
        openRolesDescription {
          openRolesDescription
        }
      }
    }
  }
`;

export default Careers;
