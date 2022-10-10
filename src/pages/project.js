import React from "react";
import { graphql } from "gatsby";
import { saveAs } from "file-saver";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Info from "../components/project/Info";
// import Acquisition from "../components/project/Acquisition";
import SEO from "../components/seo";
import FeasibilityTable from "../components/project/FeasibilityTable";

const ProjectPage = ({ data }) => {
  const projectData = data?.allContentfulPageProject?.nodes[0];

  const openThankModal = async (file) => {
    if (typeof window != "undefined") {
      const downloadResult = await fetch(file.url);
      const blob = await downloadResult.blob();
      saveAs(blob, file.fileName);
    }
  };

  return (
    <Layout>
      <SEO title={projectData.heroTitle} />
      <Hero title={projectData.heroTitle} />
      <Info
        projectData={projectData}
        aboutTitle={projectData.aboutTitle}
        aboutDescription={projectData.aboutDescription}
        historyTitle={projectData.projectHistoryTitle}
        projectHistory={projectData.projectHistory}
      />
      {/* <Acquisition projectData={projectData} /> */}
      <FeasibilityTable
        tableTitle={projectData.tableTitle}
        feasibilityItems={projectData.tableData}
        tableLabels={projectData.tableLabels}
        buttonLabel={projectData.tableButtonLabel}
        file={projectData.tableFile.file}
        onDownloadClick={openThankModal}
      />
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($language: String) {
    allContentfulPageProject(filter: { node_locale: { eq: $language } }) {
      nodes {
        heroTitle
        aboutTitle
        aboutDescription {
          raw
        }
        projectHistoryTitle
        projectHistory {
          year
          description
        }
        acquisitionTitle
        acquisitionDescription {
          raw
        }
        acquisitionImage {
          gatsbyImageData
        }
        tableTitle
        tableLabels {
          scenarioGoldPrice
          downside
          base
          spot
          upside
          goldPrice
          usdOz
          afterTaxNpv
          usdMm
          afterTaxIrr
          loMFreeCashFlow
          lomEbitda
          payback
          years
          description
          units
          gminFs
          productionData
          mineLife
          averageMillingThroughput
          year
          stripRatio
          wasteOre
          preStripTonnage
          totalTonnage
          oneTonnageMilled
          goldHeadGrade
          containedGold
          recovery
          totalGoldProduction
          averageAnnualGoldProduction
          firstFiveFullYears
          operatingCosts
          miningCosts
          mined
          milled
          processingCost
          gaCost
          totalSiteCosts
          totalOperatingCosts
          aisc
          capitalCosts
          initialCapital
          lifeOfMineSustainingCapital
          closureCosts
          capitalCostsBeforeTax
          netTaxesPayable
          totalCapitalCosts
          financialEvaluation
          goldPriceAssumption
          brlFxAssumption
        }
        tableData {
          afterTaxIrrFirstPercent
          afterTaxIrrSecondPercent
          afterTaxIrrThirdPercent
          afterTaxIrrFourthPercent
          afterTaxNpvFirstPrice
          afterTaxNpvSecondPrice
          afterTaxNpvThirdPrice
          afterTaxNpvFourthPrice
          aiscValue
          lomFreeCashFlowFirstPrice
          lomFreeCashFlowSecondPrice
          lomFreeCashFlowThirdPrice
          lomFreeCashFlowFourthPrice
          containedGoldValue
          lomEbitdaFirstPrice
          lomEbitdaSecondPrice
          lomEbitdaThirdPrice
          lomEbitdaFourthPrice
          millThroughputValue
          mineLifeValue
          netClosureLiabilitiesValue
          oneTonnageMilledValue
          paybackPeriodFirstYear
          paybackPeriodSecondYear
          paybackPeriodThirdYear
          paybackPeriodFourthYear
          recoveryValue
          goldFirstPrice
          goldSecondPrice
          goldThirdPrice
          goldFourthPrice
          stripRatioValue
          totalCapitalValue
          totalGoldProductionValue
          totalTonnesMinedValue
          millThroughputSecondValue
          preStripTonnageValue
          totalTonnageValue
          goldHeadGradeValue
          averageAnnualGoldValue
          firstFiveFullYearsValue
          miningCostsFirstValue
          miningCostsSecondValue
          processingCostValue
          gACostValue
          totalSiteCostsFirstValue
          totalSiteCostsSecondValue
          totalOperatingCostsValue
          initialCapitalValue
          sustainingCapitalValue
          closureCostsValue
          capitalCostsBeforeTaxValue
          netTaxesPayableValue
          goldPriceAssumptionValue
          brlFxAssumptionValue
          afterTaxNpvSecondValue
          afterTaxIrrSecondValue
          paybackValue
        }
        tableFile {
          file {
            fileName
            url
          }
        }
        tableButtonLabel
      }
    }
  }
`;

export default ProjectPage;
