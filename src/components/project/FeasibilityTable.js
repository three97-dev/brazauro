import React from "react";

import "./FeasibilityTable.css";

const FeasibilityTable = ({ tableTitle, tableLabels, feasibilityItems, buttonLabel, file, onDownloadClick }) => {
  const numberFormat = new Intl.NumberFormat("en-US");
  const xUnitFormat = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumSignificantDigits: 2,
  });
  const percentFormat = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  });

  return (
    <div className="py-12 px-7 md:px-16 lg:px-[100px] bg-gray-gold">
      <h3 className="max-w-[1284px] w-full md:text-center font-inter font-bold text-white mx-auto px-5 md:px-12 md:px-8 mb-8 md:mb-12">
        {tableTitle}
      </h3>
      <div className="max-w-[1284px] mx-auto px-5 md:px-8 pt-5 md:pt-8 bg-white rounded-[20px]">
        <div className="overflow-x-scroll lg:overflow-x-auto">
          <div className="feasibility-wrapper feasibility-grid-area font-open-sans">
            <div className="grid-scenario-gold-price-title-area bg-light-gray text-dark-gold uppercase py-2">
              {tableLabels.scenarioGoldPrice}
            </div>
            <div className="grid-feasibility-down-side-area bg-light-gray text-dark-gold uppercase text-center py-2">
              {tableLabels.downside}
            </div>
            <div className="grid-feasibility-base-area text-dark-gold uppercase text-center bg-gold border-nero border-l border-t border-r py-2">
              {tableLabels.base}
            </div>
            <div className="grid-feasibility-spot-area text-dark-gold bg-light-gray uppercase text-center py-2">
              {tableLabels.spot}
            </div>
            <div className="grid-feasibility-upside-area text-dark-gold bg-light-gray uppercase text-center py-2">
              {tableLabels.upside}
            </div>
            <div className="grid-gold-price-name-area font-light text-dark-gold uppercase border-nero bg-light-gray border-b py-1">
              {tableLabels.goldPrice}
            </div>
            <div className="grid-gold-price-currency-area text-center text-dark-gold uppercase font-light bg-light-gray border-nero border-b py-1">
              {tableLabels.usdOz}
            </div>
            <div className="grid-gold-first-price-area text-center font-light text-dark-gold uppercase bg-light-gray border-nero border-b py-1">
              {currencyFormat.format(feasibilityItems.goldFirstPrice)}
            </div>
            <div className="grid-gold-second-price-area text-center font-light text-dark-gold uppercase bg-gold border-nero border-l border-b border-r py-1">
              {currencyFormat.format(feasibilityItems.goldSecondPrice)}
            </div>
            <div className="grid-gold-third-price-area text-center font-light text-dark-gold uppercase bg-light-gray border-nero border-b py-1">
              {currencyFormat.format(feasibilityItems.goldThirdPrice)}
            </div>
            <div className="grid-gold-fourth-price-area text-center font-light text-dark-gold uppercase bg-light-gray border-nero border-b py-1">
              {currencyFormat.format(feasibilityItems.goldFourthPrice)}
            </div>
            <div className="grid-after-tax-npv-area font-light pb-2 pt-1">{tableLabels.afterTaxNpv}</div>
            <div className="grid-after-tax-npv-currency-area text-center text-table-unit font-light pb-2 pt-1">
              {tableLabels.usdMm}
            </div>
            <div className="grid-after-tax-npv-first-price-area text-center font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvFirstPrice)}
            </div>
            <div className="grid-after-tax-npv-second-price-area text-center bg-gold border-nero border-l border-r font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvSecondPrice)}
            </div>
            <div className="grid-after-tax-npv-third-price-area text-center font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvThirdPrice)}
            </div>
            <div className="grid-after-tax-npv-fourth-price-area text-center font-light pb-2 pt-1">
              {currencyFormat.format(feasibilityItems.afterTaxNpvFourthPrice)}
            </div>
            <div className="grid-after-tax-irr-area font-light border-nero border-b py-1">
              {tableLabels.afterTaxIrr}
            </div>
            <div className="grid-after-tax-irr-percent-area text-center text-table-unit font-light border-nero border-b py-1">
              %
            </div>
            <div className="grid-after-tax-irr-first-percent-area text-center font-light border-nero border-b py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrFirstPercent)}
            </div>
            <div className="grid-after-tax-irr-second-percent-area text-center bg-gold font-light border-nero border-b border-l border-r py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrSecondPercent)}
            </div>
            <div className="grid-after-tax-irr-third-percent-area text-center font-light border-nero border-b py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrThirdPercent)}
            </div>
            <div className="grid-after-tax-irr-fourth-percent-area text-center font-light border-nero border-b py-1">
              {percentFormat.format(feasibilityItems.afterTaxIrrFourthPercent)}
            </div>
            <div className="grid-lom-free-cash-flow-area font-light pb-1 pt-2">{tableLabels.loMFreeCashFlow}</div>
            <div className="grid-lom-free-cash-flow-currency-area font-light text-table-unit text-center pb-1 pt-2">
              {tableLabels.usdMm}
            </div>
            <div className="grid-lom-free-cash-flow-first-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomFreeCashFlowFirstPrice)}
            </div>
            <div className="grid-lom-free-cash-flow-second-price-area font-light text-center bg-gold border-nero border-l border-r pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomFreeCashFlowSecondPrice)}
            </div>
            <div className="grid-lom-free-cash-flow-third-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomFreeCashFlowThirdPrice)}
            </div>
            <div className="grid-lom-free-cash-flow-fourth-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomFreeCashFlowFourthPrice)}
            </div>
            <div className="grid-lom-ebitda-area font-light pb-1 pt-2">{tableLabels.lomEbitda}</div>
            <div className="grid-lom-ebitda-currency-area font-light text-table-unit text-center pb-1 pt-2">
              {tableLabels.usdMm}
            </div>
            <div className="grid-lom-ebitda-first-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaFirstPrice)}
            </div>
            <div className="grid-lom-ebitda-second-price-area font-light text-center bg-gold border-nero border-l border-r pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaSecondPrice)}
            </div>
            <div className="grid-lom-ebitda-third-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaThirdPrice)}
            </div>
            <div className="grid-lom-ebitda-fourth-price-area font-light text-center pb-1 pt-2">
              {currencyFormat.format(feasibilityItems.lomEbitdaFourthPrice)}
            </div>
            <div className="grid-payback-period-area font-light border-nero border-b py-1">{tableLabels.payback}</div>
            <div className="grid-payback-period-unit-area font-light text-center text-table-unit uppercase border-nero border-b py-1">
              {tableLabels.years}
            </div>
            <div className="grid-payback-period-first-year-area font-light text-center border-nero border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodFirstYear)}
            </div>
            <div className="grid-payback-period-second-year-area font-light text-center bg-gold border-nero border-l border-r border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodSecondYear)}
            </div>
            <div className="grid-payback-period-third-year-area text-center font-light border-nero border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodThirdYear)}
            </div>
            <div className="grid-payback-period-fourth-year-area text-center font-light border-nero border-b py-1">
              {numberFormat.format(feasibilityItems.paybackPeriodFourthYear)}
            </div>
          </div>

          <div className="feasibility-wrapper feasibility-second-table-grid-area font-open-sans pt-10 mx-auto">
            <div className="grid-description-area text-dark-gold uppercase border-nero border-b border-t py-2">
              {tableLabels.description}
            </div>
            <div className="grid-description-units-area text-center text-dark-gold uppercase border-nero border-b border-t py-2">
              {tableLabels.units}
            </div>
            <div className="grid-description-empty-area border-nero border-b border-t py-2"></div>
            <div className="grid-description-value-area text-dark-gold uppercase border-nero border-b border-t py-2 text-center">
              {tableLabels.gminFs}
            </div>
            <div className="grid-production-data-area text-blue-stone font-bold uppercase pb-1 pt-2">
              {tableLabels.productionData}
            </div>
            <div className="grid-mine-life-area font-light py-1">{tableLabels.mineLife}</div>
            <div className="grid-mine-life-unit-area font-light text-center py-1">{tableLabels.years}</div>
            <div className="grid-mine-life-value-area font-light py-1 text-center">
              {feasibilityItems.mineLifeValue}
            </div>
            <div className="grid-mill-throughput-area font-light  pb-1 pt-2">
              {tableLabels.averageMillingThroughput}
            </div>
            <div className="grid-mill-throughput-unit-area text-center font-light  pb-1 pt-2">TPD</div>
            <div className="grid-mill-throughput-value-area font-light pb-1 pt-2 text-center">
              {numberFormat.format(feasibilityItems.millThroughputValue)}
            </div>
            <div className="grid-mill-throughput-second-area font-light pb-1 pt-2">
              {tableLabels.averageMillingThroughput}
            </div>
            <div className="grid-mill-throughput-second-unit-area text-center font-light pb-1 pt-2">
              Mt / {tableLabels.year}
            </div>
            <div className="grid-mill-throughput-second-value-area font-light pb-1 pt-2 text-center">
              {numberFormat.format(feasibilityItems.millThroughputSecondValue)}
            </div>
            <div className="grid-strip-ratio-area font-light py-1">{tableLabels.stripRatio}</div>
            <div className="grid-strip-ratio-unit-area text-center font-light py-1">{tableLabels.wasteOre}</div>
            <div className="grid-strip-ratio-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.stripRatioValue)}
            </div>
            <div className="grid-pre-strip-tonnage-area font-light py-1">{tableLabels.preStripTonnage}</div>
            <div className="grid-pre-strip-tonnage-unit-area text-center font-light py-1">Mt</div>
            <div className="grid-pre-strip-tonnage-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.preStripTonnageValue)}
            </div>
            <div className="grid-total-tonnage-area font-light py-1">{tableLabels.totalTonnage}</div>
            <div className="grid-total-tonnage-unit-area text-center font-light py-1">Mt</div>
            <div className="grid-total-tonnage-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.totalTonnageValue)}
            </div>
            <div className="grid-one-tonnage-milled-area font-light py-1">{tableLabels.oneTonnageMilled}</div>
            <div className="grid-one-tonnage-milled-unit-area text-center font-light py-1">Mt</div>
            <div className="grid-one-tonnage-milled-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.oneTonnageMilledValue)}
            </div>
            <div className="grid-gold-head-grade-area font-light py-1">{tableLabels.goldHeadGrade}</div>
            <div className="grid-gold-head-grade-unit-area text-center font-light py-1">G/t</div>
            <div className="grid-gold-head-grade-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.goldHeadGradeValue)}
            </div>
            <div className="grid-contained-gold-area font-light py-1">{tableLabels.containedGold}</div>
            <div className="grid-contained-gold-unit-area text-center font-light py-1">K Oz</div>
            <div className="grid-contained-gold-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.containedGoldValue)}
            </div>
            <div className="grid-recovery-area font-light py-1">{tableLabels.recovery}</div>
            <div className="grid-recovery-unit-area text-center font-light py-1">%</div>
            <div className="grid-recovery-value-area font-light py-1 text-center">
              {percentFormat.format(feasibilityItems.recoveryValue)}
            </div>
            <div className="grid-total-gold-production-area font-light py-1">{tableLabels.totalGoldProduction}</div>
            <div className="grid-total-gold-production-unit-area text-center font-light py-1">K Oz</div>
            <div className="grid-total-gold-production-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.totalGoldProductionValue)}
            </div>
            <div className="grid-average-annual-gold-area font-light py-1">
              {tableLabels.averageAnnualGoldProduction}
            </div>
            <div className="grid-average-annual-gold-unit-area text-center font-light py-1">K Oz</div>
            <div className="grid-average-annual-gold-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.averageAnnualGoldValue)}
            </div>
            <div className="grid-first-five-full-years-area font-light py-1 pl-4">{tableLabels.firstFiveFullYears}</div>
            <div className="grid-first-five-full-years-unit-area text-center font-light py-1">K Oz</div>
            <div className="grid-first-five-full-years-value-area font-light py-1 text-center">
              {numberFormat.format(feasibilityItems.firstFiveFullYearsValue)}
            </div>
            <div className="grid-operating-costs-area text-blue-stone uppercase font-bold border-nero border-t pb-1 pt-2">
              {tableLabels.operatingCosts}
            </div>
            <div className="grid-mining-costs-first-area font-light py-1">{tableLabels.miningCosts}</div>
            <div className="grid-mining-costs-first-unit-area text-center font-light py-1">
              USD/t {tableLabels.mined}
            </div>
            <div className="grid-mining-costs-first-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.miningCostsFirstValue)}
            </div>
            <div className="grid-mining-costs-second-area font-light py-1">{tableLabels.miningCosts}</div>
            <div className="grid-mining-costs-second-unit-area text-center font-light py-1">
              USD/t {tableLabels.milled}
            </div>
            <div className="grid-mining-costs-second-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.miningCostsSecondValue)}
            </div>
            <div className="grid-processing-cost-area font-light py-1">{tableLabels.processingCost}</div>
            <div className="grid-processing-cost-unit-area text-center font-light py-1">USD/t {tableLabels.milled}</div>
            <div className="grid-processing-cost-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.processingCostValue)}
            </div>
            <div className="grid-ga-cost-area font-light py-1">{tableLabels.gaCost}</div>
            <div className="grid-ga-cost-unit-area text-center font-light py-1">USD/t {tableLabels.milled}</div>
            <div className="grid-ga-cost-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.gACostValue)}
            </div>
            <div className="grid-total-site-costs-first-area font-light py-1">{tableLabels.totalSiteCosts}</div>
            <div className="grid-total-site-costs-first-unit-area text-center font-light py-1">
              USD/t {tableLabels.milled}
            </div>
            <div className="grid-total-site-costs-first-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.totalSiteCostsFirstValue)}
            </div>
            <div className="grid-total-site-costs-second-area font-light py-1">{tableLabels.totalSiteCosts}</div>
            <div className="grid-total-site-costs-second-unit-area text-center font-light py-1">USD/oz</div>
            <div className="grid-total-site-costs-second-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.totalSiteCostsSecondValue)}
            </div>
            <div className="grid-total-operating-costs-area font-light py-1">{tableLabels.totalOperatingCosts}</div>
            <div className="grid-total-operating-costs-unit-area text-center font-light py-1">USD/oz</div>
            <div className="grid-total-operating-costs-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.totalOperatingCostsValue)}
            </div>
            <div className="grid-aisc-area font-light pb-2 pt-1">{tableLabels.aisc}</div>
            <div className="grid-aisc-unit-area text-center font-light pb-2 pt-1">USD/oz</div>
            <div className="grid-aisc-value-area font-light pb-2 pt-1 text-center">
              {currencyFormat.format(feasibilityItems.aiscValue)}
            </div>
            <div className="grid-capital-costs-area text-blue-stone font-bold uppercase border-nero border-t pb-1 pt-2">
              {tableLabels.capitalCosts}
            </div>
            <div className="grid-initial-capital-area font-light py-1">{tableLabels.initialCapital}</div>
            <div className="grid-initial-capital-unit-area text-center font-light py-1">{tableLabels.usdMm}</div>
            <div className="grid-initial-capital-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.initialCapitalValue)}
            </div>
            <div className="grid-sustaining-capital-area font-light py-1">
              {tableLabels.lifeOfMineSustainingCapital}
            </div>
            <div className="grid-sustaining-capital-unit-area text-center font-light py-1">{tableLabels.usdMm}</div>
            <div className="grid-sustaining-capital-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.sustainingCapitalValue)}
            </div>
            <div className="grid-closure-costs-area font-light py-1">{tableLabels.closureCosts}</div>
            <div className="grid-closure-costs-unit-area text-center font-light py-1">{tableLabels.usdMm}</div>
            <div className="grid-closure-costs-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.closureCostsValue)}
            </div>
            <div className="grid-capital-costs-before-tax-area text-blue-stone py-1">
              {tableLabels.capitalCostsBeforeTax}
            </div>
            <div className="grid-capital-costs-before-tax-unit-area text-blue-stone text-center py-1">
              {tableLabels.usdMm}
            </div>
            <div className="grid-capital-costs-before-tax-value-area text-blue-stone py-1 text-center">
              {currencyFormat.format(feasibilityItems.capitalCostsBeforeTaxValue)}
            </div>
            <div className="grid-net-taxes-payable-area font-light py-1">{tableLabels.netTaxesPayable}</div>
            <div className="grid-net-taxes-payable-unit-area text-center font-light py-1">{tableLabels.usdMm}</div>
            <div className="grid-net-taxes-payable-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.netTaxesPayableValue)}
            </div>
            <div className="grid-total-capital-area text-blue-stone py-1">{tableLabels.totalCapitalCosts}</div>
            <div className="grid-total-capital-unit-area text-center text-blue-stone py-1">{tableLabels.usdMm}</div>
            <div className="grid-total-capital-value-area text-blue-stone py-1 text-center">
              {currencyFormat.format(feasibilityItems.totalCapitalValue)}
            </div>
            <div className="grid-financial-evaluation-area text-blue-stone uppercase font-bold border-nero border-t pb-1 pt-2">
              {tableLabels.financialEvaluation}
            </div>
            <div className="grid-gold-price-assumption-area font-light py-1">{tableLabels.goldPriceAssumption}</div>
            <div className="grid-gold-price-assumption-unit-area text-center font-light py-1">USD/oz</div>
            <div className="grid-gold-price-assumption-value-area font-light py-1 text-center">
              {currencyFormat.format(feasibilityItems.goldPriceAssumptionValue)}
            </div>
            <div className="grid-brl-fx-assumption-area font-light py-1">{tableLabels.brlFxAssumption}</div>
            <div className="grid-brl-fx-assumption-unit-area text-center font-light py-1">X</div>
            <div className="grid-brl-fx-assumption-value-area font-light py-1 text-center">
              {xUnitFormat.format(feasibilityItems.brlFxAssumptionValue)}
            </div>
            <div className="grid-after-tax-npv-second-area text-blue-stone py-1">{tableLabels.afterTaxNpv}</div>
            <div className="grid-after-tax-npv-second-unit-area text-blue-stone text-center py-1">
              {tableLabels.usdMm}
            </div>
            <div className="grid-after-tax-npv-second-value-area text-blue-stone py-1 text-center">
              {currencyFormat.format(feasibilityItems.afterTaxNpvSecondValue)}
            </div>
            <div className="grid-after-tax-irr-second-area text-blue-stone py-1">{tableLabels.afterTaxIrr}</div>
            <div className="grid-after-tax-irr-second-unit-area text-blue-stone text-center py-1">%</div>
            <div className="grid-after-tax-irr-second-value-area text-blue-stone py-1 text-center">
              {percentFormat.format(feasibilityItems.afterTaxIrrSecondValue)}
            </div>
            <div className="grid-payback-area text-blue-stone py-1">{tableLabels.payback}</div>
            <div className="grid-payback-unit-area text-blue-stone text-center py-1">{tableLabels.years}</div>
            <div className="grid-payback-value-area text-blue-stone py-1 text-center">
              {numberFormat.format(feasibilityItems.paybackValue)}
            </div>
          </div>
          <div className="feasibility-wrapper pt-6 md:pt-12 pb-9 mx-auto">
            <div className="grid justify-items-center">
              <button
                onClick={() => {
                  onDownloadClick(file || "/");
                }}
                className="feasibility-button font-xs uppercase"
              >
                {buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeasibilityTable;
