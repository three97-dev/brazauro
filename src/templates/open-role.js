import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import RRenderer from "../components/richtextRenderer";
import OpenRole from "../components/careers/OpenRole";
import BottomShape from "../components/basic/bottom-shape/BottomShape";
import Image from "../components/basic/image/Image";
import Button from "../components/basic/button/Button";

import subtract from "../assets/subtract.svg";
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
        <OpenRole
          title={openRoleData.title}
          description={openRoleData.description}
          smallImage={openRoleData.smallImage}
          largeImage={openRoleData.largeImage}
          className="mb-10 md:mb-0"
        />
        <h4 className="my-6">{pageData.responsibilitiesTitle}</h4>
        <RRenderer data={openRoleData.summaryOfResponsibilities} />
        <h4 className="my-6">{pageData.requirementsTitle}</h4>
        <RRenderer data={openRoleData.requirements} />
        <h4 className="my-6">{pageData.abilitiesTitle}</h4>
        <RRenderer data={openRoleData.abilities} />
        <h4 className="my-6">{pageData.additionalInformationTitle}</h4>
        <RRenderer data={openRoleData.additionalInformation} />
        <div className="grid md:grid-cols-2 gap-y-12 mt-6">
          <div className="pr-5 xl:pr-32">
            <h4 className="mt-6 mb-10">{pageData.formTitle}</h4>
            <ResumeForm pageData={pageData} />
          </div>
          <div className="grid justify-center md:px-5 md:border-l md:border-dark-gold">
            <h4 className="mt-6 mb-10">{pageData.meetUsTitle}</h4>
            <Image className="mx-auto mb-12" image={pageData.meetUsImage} />
            <RRenderer data={pageData.meetUsDescription} config={{ p: "font-inter" }} />
            <Button
              link="/"
              className="mt-6"
              buttonClasses="flex items-center bg-[#6FCF97] text-white py-[10px] px-[46px]"
            >
              <span className="block mr-2">{pageData.meetUsButtonLabel}</span>
              <StaticImage src={"../assets/careers/wats-up.svg"} alt="start chat" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full md:hidden">
        <img className="w-full" src={subtract} />
      </div>
      <BottomShape className="hidden md:block mt-24" />
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
        summaryOfResponsibilities {
          raw
        }
        requirements {
          raw
        }
        abilities {
          raw
        }
        additionalInformation {
          raw
        }
      }
    }
    allContentfulPageOpenRolePage(filter: { node_locale: { eq: $language } }) {
      nodes {
        responsibilitiesTitle
        requirementsTitle
        abilitiesTitle
        additionalInformationTitle
        formTitle
        firstName
        surname
        profession
        phoneNumber
        city
        uploadResume
        formButtonLabel
        meetUsTitle
        meetUsImage {
          gatsbyImageData
        }
        meetUsDescription {
          raw
        }
        meetUsButtonLabel
        returnButton
      }
    }
  }
`;

export default OpenRolePage;
