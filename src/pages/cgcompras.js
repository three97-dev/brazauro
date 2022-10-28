import React from "react";
import { graphql } from "gatsby";
import { saveAs } from "file-saver";

import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import DocumentTile from "../components/documents/DocumentTile";

const Documents = ({ data }) => {
  const pageData = data.allContentfulPageDocumentsPage.nodes[0];
  const documents = data.documents.nodes[0]?.documents;

  const onDownloadClick = async (file) => {
    if (typeof window != "undefined") {
      const downloadResult = await fetch(file.url);
      const blob = await downloadResult.blob();
      saveAs(blob, file.fileName);
    }
  };

  return (
    <Layout>
      <SEO title={pageData.heroTitle} />
      <Hero title={pageData.heroTitle} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 w-full max-w-[1440px] min-h-[calc(100vh_-_534px)] mx-auto px-7 sm:px-12 lg:px-[100px] py-12 pb-24">
        {documents.map((document) => (
          <DocumentTile
            key={document.order}
            title={document.title}
            file={document.file}
            onDownloadClick={onDownloadClick}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query DocumentsQuery($language: String) {
    allContentfulPageDocumentsPage(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
      }
    }
    documents: allContentfulPageDocumentsPage(filter: { node_locale: { eq: "en" } }, sort: { fields: updatedAt }) {
      nodes {
        documents {
          title
          file {
            fileName
            contentType
            url
          }
        }
      }
    }
  }
`;

export default Documents;
