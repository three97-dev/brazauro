import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import OpenRole from "../components/careers/OpenRole";
import BottomShape from "../components/basic/bottom-shape/BottomShape";

import ResumeForm from "../components/careers/ResumeForm";

const OpenRolePage = ({ data }) => {
  const pageData = data.allContentfulPageOpenRolePage.nodes[0];
  const openRoleData = data.allContentfulOurOpenRoles.nodes[0];

  return (
    <Layout>
      <div className="w-full max-w-[1440px] mx-auto px-7 sm:px-12 lg:px-[100px] py-12">
        <Link className="block underline mb-12" to="/careers">
          {pageData.returnButton}
        </Link>

        <div className="grid xl:grid-cols-2 gap-y-12 xl:gap-x-16 mt-6">
          <OpenRole
            title={openRoleData.title}
            description={openRoleData.description}
            smallImage={openRoleData.smallImage}
            largeImage={openRoleData.largeImage}
            className="mb-10 md:mb-0"
          />
          <div>
            <h4 className="mt-6 mb-10">{pageData.formTitle}</h4>
            <ResumeForm pageData={pageData} />
          </div>
        </div>
      </div>

      <BottomShape className="mt-24" />
    </Layout>
  );
};

export const query = graphql`
  query OpenRoleQuery($id: String, $language: String) {
    allContentfulOurOpenRoles(filter: { contentful_id: { eq: $id }, node_locale: { eq: $language } }) {
      nodes {
        title
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
      }
    }
    allContentfulPageOpenRolePage(filter: { node_locale: { eq: $language } }) {
      nodes {
        formTitle
        firstName
        surname
        profession
        phoneNumber
        city
        uploadResume
        formButtonLabel
        returnButton
      }
    }
  }
`;

export default OpenRolePage;
