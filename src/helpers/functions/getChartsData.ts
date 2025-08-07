import {
  currencyPLN,
  currencyUSD,
  currencyEUR,
} from "../../helpers/data/currencyData";
import { Currency, ChartsDataProp, Chart } from "../../types";

export const getChartsData = (props: ChartsDataProp): Chart => {
  const getChartDataFromHistoricalRates = (
    targetCurrency: Currency,
    baseCurrency: Currency = currencyPLN
  ) =>
    Object.entries(props.historicalRates?.[baseCurrency] || {}).map(
      ([date, rates]) => ({
        label: date,
        value: rates[targetCurrency] ?? 0,
      })
    );

  const getAllChartData = () => ({
    EURforUSD: getChartDataFromHistoricalRates(currencyEUR, currencyUSD),
    PLNforUSD: getChartDataFromHistoricalRates(currencyPLN, currencyUSD),
    USDforPLN: getChartDataFromHistoricalRates(currencyUSD, currencyPLN),
    USDforEUR: getChartDataFromHistoricalRates(currencyUSD, currencyEUR),
    EUR: getChartDataFromHistoricalRates(currencyEUR, currencyPLN),
    PLN: getChartDataFromHistoricalRates(currencyPLN, currencyEUR),
  });

  const {
    EURforUSD: chartDataEURforUSD,
    PLNforUSD: chartDataPLNforUSD,
    USDforPLN: chartDataUSDforPLN,
    USDforEUR: chartDataUSDforEUR,
    EUR: chartDataEUR,
    PLN: chartDataPLN,
  } = getAllChartData();

  return {
    chartDataEURforUSD,
    chartDataPLNforUSD,
    chartDataUSDforPLN,
    chartDataUSDforEUR,
    chartDataEUR,
    chartDataPLN,
  };
};
