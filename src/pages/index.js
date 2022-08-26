import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import HomeHero from "../components/homepage/HomeHero";
import News from "../components/homepage/News";
import MainServiceContract from "../components/homepage/MainServiceContract";
import ExecutiveTeam from "../components/homepage/ExecutiveTeam";
import SEO from "../components/seo";

const HomePage = ({ data }) => {
  const pageData = data?.allContentfulPageHomePage?.nodes[0];
  const newsData = data?.news?.nodes;
  const executiveTeamData = data?.executiveTeam?.nodes;
  const boardOfDirectorsData = data?.boardOfDirectors?.nodes;

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
      <ExecutiveTeam
        executiveTeamTitle={pageData.executiveTeamTitle}
        executiveTeamSubtitle={pageData.executiveTeamSubtitle}
        executiveTeamData={executiveTeamData}
        boardOfDirectorsSubtitle={pageData.boardOfDirectorsSubtitle}
        boardOfDirectorsData={boardOfDirectorsData}
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
        executiveTeamTitle
        executiveTeamSubtitle
        boardOfDirectorsSubtitle
      }
    }
    news: allContentfulHighlightCards(filter: { node_locale: { eq: $language } }, sort: { fields: order }) {
      nodes {
        heading
        title
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
    executiveTeam: allContentfulExecutiveTeam(filter: { node_locale: { eq: $language } }, sort: { fields: order }) {
      nodes {
        name
        title
        description {
          raw
        }
        image {
          title
          gatsbyImageData
        }
      }
    }
    boardOfDirectors: allContentfulBoardOfDirectors(
      filter: { node_locale: { eq: $language } }
      sort: { fields: order }
    ) {
      nodes {
        name
        title
        image {
          gatsbyImageData
          title
        }
      }
    }
  }
`;

export default HomePage;
