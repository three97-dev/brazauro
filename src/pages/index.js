import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../components/Layout";
import HomeHero from "../components/homepage/HomeHero";
import News from "../components/homepage/News";
import MainServiceContract from "../components/homepage/MainServiceContract";
import ExecutiveTeam from "../components/homepage/ExecutiveTeam";

const HomePage = ({ data }) => {
  const { t } = useTranslation();

  const newsData = data?.news?.nodes;
  const executiveTeamData = data?.executiveTeam?.nodes;
  const boardOfDirectorsData = data?.boardOfDirectors?.nodes;

  return (
    <Layout>
      <HomeHero />
      <News newsData={newsData} />
      <div className="w-full">
        <div className="w-full h-6 bg-gold"></div>
        <iframe
          id="vrify-iframe"
          width="100%"
          height="465px"
          frameborder="0"
          allowfullscreen="true"
          allow="fullscreen"
          src={t("iFrameLink")}
        ></iframe>
      </div>
      <MainServiceContract />
      <ExecutiveTeam
        executiveTeamData={executiveTeamData}
        boardOfDirectorsData={boardOfDirectorsData}
      />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "index"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    news: allContentfulNews(sort: { fields: createdAt }, filter: { node_locale: { eq: $language } }) {
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
    executiveTeam: allContentfulExecutiveTeam(filter: { node_locale: { eq: $language } }) {
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
    boardOfDirectors: allContentfulBoardOfDirectors(filter: { node_locale: { eq: $language } }) {
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
