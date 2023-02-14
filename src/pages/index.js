import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HomeHero from "../components/homepage/HomeHero";
import News from "../components/homepage/News";
import MainServiceContract from "../components/homepage/MainServiceContract";
import SEO from "../components/seo";
import Team from "../components/homepage/Team";

const HomePage = ({ data }) => {
  const pageData = data?.allContentfulPageHomePage?.nodes[0];
  const newsData = data?.news?.nodes;
  const beloOfficeTeamMembersData = data?.beloOfficeTeamMembers?.nodes;
  const tocantinzinhoSiteTeamMembersData = data?.tocantinzinhoSiteTeamMembers?.nodes;

  return (
    <Layout>
      <SEO title={pageData.heroTitle} />
      <HomeHero title={pageData.heroTitle} subtitle={pageData.heroSubtitle} />
      <News title={pageData.newTitle} newsData={newsData} />
      <div className="w-full">
        <div className="w-full h-6 bg-gold"></div>
        <iframe
          id="vrify-iframe"
          width="100%"
          height="465px"
          frameborder="0"
          allowfullscreen="true"
          allow="fullscreen"
          src={pageData.iFrameLink}
        ></iframe>
      </div>
      <MainServiceContract
        image={pageData.miningServicesImage}
        title={pageData.miningServicesTitle}
        description={pageData.miningServicesDescription}
      />
      <Team
        title={pageData.teamTitle}
        leftOffice={pageData.teamLeftTitle}
        leftTeamData={beloOfficeTeamMembersData}
        rightOffice={pageData.teamRightTitle}
        rightTeamData={tocantinzinhoSiteTeamMembersData}
      />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery($language: String!) {
    allContentfulPageHomePage(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
        heroSubtitle
        newTitle
        iFrameLink
        miningServicesImage {
          gatsbyImageData
        }
        miningServicesTitle
        miningServicesDescription {
          raw
        }
        teamTitle
        teamLeftTitle
        teamRightTitle
      }
    }
    news: allContentfulHighlightCards(filter: { node_locale: { eq: $language } }, sort: { fields: order }) {
      nodes {
        heading
        link
        description {
          raw
        }
        image {
          title
          gatsbyImageData
        }
      }
    }
    beloOfficeTeamMembers: allContentfulBeloOfficeTeamMember(
      filter: { node_locale: { eq: $language } }
      sort: { fields: order }
    ) {
      nodes {
        name
        title
      }
    }
    tocantinzinhoSiteTeamMembers: allContentfulTocantinzinhoSiteTeamMember(
      filter: { node_locale: { eq: $language } }
      sort: { fields: order }
    ) {
      nodes {
        name
        title
      }
    }
  }
`;

export default HomePage;
