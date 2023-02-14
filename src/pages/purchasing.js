import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import RRenderer from "../components/richtextRenderer";
import EmploymentStatistics from "../components/purchasing/EmploymentStatistics";
import ProcurementStatistics from "../components/purchasing/ProcurementStatistics";

const PurchasingPage = ({ data }) => {
  const purchasingPageData = data?.allContentfulPagePurchasing?.nodes[0];
  const procurementStatisticsData = data?.allContentfulProcurementStatistics.nodes;

  return (
    <Layout>
      <SEO title={purchasingPageData.heroTitle} />
      <Hero title={purchasingPageData.heroTitle} />
      <div className="w-full max-w-[1440px] mx-auto px-7 md:px-12 lg:px-[100px] pt-12">
        <RRenderer
          data={purchasingPageData.topText}
          config={{
            p: "font-inter mb-12",
          }}
        />
      </div>
      <EmploymentStatistics
        employmentStatisticsTitle={purchasingPageData.employmentStatisticsTitle}
        lastUpdatedTitle={purchasingPageData.lastUpdatedTitle}
        employmentLastUpdatedDate={purchasingPageData.employmentLastUpdatedDate}
        companyBrmAndGmin={purchasingPageData.companyBrmAndGmin}
        employedContractor={purchasingPageData.employedContractor}
        genderSplit={purchasingPageData.genderSplit}
      />
      <ProcurementStatistics
        procurementStatisticsTitle={purchasingPageData.procurementStatisticsTitle}
        procurementStatisticsImage={purchasingPageData.procurementStatisticsImage}
        lastUpdatedTitle={purchasingPageData.lastUpdatedTitle}
        procurementLastUpdatedDate={purchasingPageData.procurementLastUpdatedDate}
        procurementStatisticsData={procurementStatisticsData}
      />
    </Layout>
  );
};

export const query = graphql`
  query PurchasingQuery($language: String) {
    allContentfulPagePurchasing(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
        topText {
          raw
        }
        employmentStatisticsTitle
        lastUpdatedTitle
        employmentLastUpdatedDate(formatString: "MM/DD/YYYY")
        companyBrmAndGmin {
          title
          percentageFromBrazauro
          employeesFromBrazauro
          percentageFromGmin
          employeesFromGmin
        }
        employedContractor {
          title
          percentageFromBrazauro
          employeesFromBrazauro
          percentageFromGmin
          employeesFromGmin
        }
        genderSplit {
          title
          percentageFromBrazauro
          employeesFromBrazauro
          percentageFromGmin
          employeesFromGmin
        }
        procurementStatisticsTitle
        procurementStatisticsImage {
          gatsbyImageData
        }
        procurementLastUpdatedDate(formatString: "MM/DD/YYYY")
      }
    }
    allContentfulProcurementStatistics(
      filter: { node_locale: { eq: $language } }
      sort: { fields: createdAt, order: ASC }
    ) {
      nodes {
        location
        totalPercentage
        itemsProcured {
          itemsProcured
        }
      }
    }
  }
`;

export default PurchasingPage;
