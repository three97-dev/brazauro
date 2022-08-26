import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/seo";

const NotFoundPage = ({ data }) => {
  const page404Data = data?.allContentfulPage404?.nodes[0];
  
  return (
    <Layout>
      <Seo title={page404Data.heading} />
      <div className="flex flex-col place-content-center place-items-center min-h-[calc(100vh_-_305px)]">
        <h2>{page404Data.heading}</h2>
        <p>{page404Data.message}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($language: String) {
    allContentfulPage404(filter: { node_locale: { eq: $language } }) {
      nodes {
        heading
        message
      }
    }
  }
`;

export default NotFoundPage;
