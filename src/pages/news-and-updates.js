import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import RRenderer from "../components/richtextRenderer";
import PaginatedLatestNews from "../components/news-and-updates/PaginatedLatestNews";

const NewsAndUpdates = ({ data }) => {
  const newsUpdatesPageData = data?.allContentfulPageNewsAndUpdatesPage?.nodes[0];
  const latestNewsData = data?.allContentfulLatestNews?.nodes;

  return (
    <Layout>
      <SEO title={newsUpdatesPageData.heroTitle} />
      <Hero title={newsUpdatesPageData.heroTitle} />
      <div className="w-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] pt-12">
        <RRenderer
          data={newsUpdatesPageData.topText}
          config={{
            p: "font-inter mb-12",
          }}
        />
      </div>
      <PaginatedLatestNews latestNewsTitle={newsUpdatesPageData.latestNewsTitle} latestNewsData={latestNewsData} />
    </Layout>
  );
};

export const query = graphql`
  query NewsAndUpdatesQuery($language: String) {
    allContentfulPageNewsAndUpdatesPage(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
        topText {
          raw
        }
        latestNewsTitle
      }
    }
    allContentfulLatestNews(filter: { node_locale: { eq: $language } }, sort: { fields: createdAt, order: ASC }) {
      nodes {
        title
        description {
          description
        }
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

export default NewsAndUpdates;
