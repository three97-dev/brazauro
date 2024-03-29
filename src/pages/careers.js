import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CreatedJobs from "../components/careers/CreatedJobs";
import Communities from "../components/careers/Communities";
import EmployerOfChoice from "../components/careers/EmployerOfChoice";
import News from "../components/careers/News";
import OurOpenRoles from "../components/careers/OurOpenRoles";
import SEO from "../components/seo";

const Careers = ({ data }) => {
  const pageData = data?.allContentfulPageCareers?.nodes[0];
  const roles = data?.roles?.nodes;

  return (
    <Layout>
      <SEO title={pageData.heroTitle} />
      <Hero title={pageData.heroTitle} />
      <CreatedJobs
        title={pageData.jobsTitle}
        jobsCreatedDuringConstructionsTitle={pageData.jobsCreatedDuringConstructionsTitle}
        jobsCreatedDuringConstruction={pageData.jobsCreatedDuringConstruction}
        jobsCreatedDuringOperationTitle={pageData.jobsCreatedDuringOperationTitle}
        jobsCreatedDuringOperation={pageData.jobsCreatedDuringOperation}
      />
      <Communities title={pageData.communitiesTitle} image={pageData.communitiesImage} />
      <EmployerOfChoice title={pageData.employerOfChoiceTitle} description={pageData.employerOfChoiceDescription} />
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
      <OurOpenRoles
        roles={roles}
        title={pageData.openRolesTitle}
        description={pageData.openRolesDescription}
        openRolesButtonLabel={pageData.openRolesButtonLabel}
      />
    </Layout>
  );
};

export const query = graphql`
  query CareersQuery($language: String) {
    roles: allContentfulOurOpenRoles(filter: { node_locale: { eq: $language } }, sort: { fields: order }) {
      nodes {
        title
        fields {
          pageUrl
        }
        description {
          raw
        }
        smallImage {
          gatsbyImageData(width: 67, height: 67)
          title
        }
        largeImage {
          gatsbyImageData
          title
        }
        createdAt(formatString: "MM/DD/YYYY")
      }
    }
    allContentfulPageCareers(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
        jobsTitle
        jobsCreatedDuringConstructionsTitle
        jobsCreatedDuringConstruction
        jobsCreatedDuringOperationTitle
        jobsCreatedDuringOperation
        communitiesTitle
        communitiesImage {
          gatsbyImageData
          title
        }
        employerOfChoiceTitle
        employerOfChoiceDescription {
          raw
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
        openRolesTitle
        openRolesDescription {
          raw
        }
        openRolesButtonLabel
      }
    }
  }
`;

export default Careers;
