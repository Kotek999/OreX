import {
  currencyPLN,
  currencyUSD,
  currencyEUR,
} from "../../helpers/data/currencyData";
import { getChartsData } from "../../helpers/functions/getChartsData";
import { renderCurrencyConverterModal } from "../../helpers/functions/createCurrencyConverterScreen";
import {
  UseCurrencyRatesProps,
  ItemProp,
  CurrencyRatesData,
  Chart,
} from "../../types";

export const useCurrencyRates = (props: UseCurrencyRatesProps) => {
  const chart: Chart = getChartsData({
    historicalRates: props.currencyRates.historicalRates,
  });

  const item: ItemProp = renderCurrencyConverterModal({
    formModal: props.formModal,
    exchangeRates: props.currencyRates.exchangeRates,
    loadingScreenData: props.currencyRates.loadingScreenData,
    error: props.currencyRates.error,
    trends: props.currencyRates.trends,
  });

  const currencyRatesData: CurrencyRatesData = [
    {
      id: 3,
      headerTitle: "Złoty",
      chartData1: chart.chartDataUSDforPLN,
      chartData2: chart.chartDataEUR,
      firstCurrency: currencyUSD,
      secondCurrency: currencyEUR,
      thirdCurrency: currencyPLN,
      targetCurrency: currencyPLN,
      firstCurrencyName: "Dolar amerykański",
      secondCurrencyName: "Euro",
    },
    {
      id: 4,
      headerTitle: "Euro",
      chartData1: chart.chartDataUSDforEUR,
      chartData2: chart.chartDataPLN,
      firstCurrency: currencyUSD,
      secondCurrency: currencyPLN,
      thirdCurrency: currencyPLN,
      targetCurrency: currencyEUR,
      firstCurrencyName: "Dolar amerykański",
      secondCurrencyName: "Złoty",
    },
    {
      id: 5,
      headerTitle: "Dolar amerykański",
      chartData1: chart.chartDataEURforUSD,
      chartData2: chart.chartDataPLNforUSD,
      firstCurrency: currencyEUR,
      secondCurrency: currencyPLN,
      thirdCurrency: currencyPLN,
      targetCurrency: currencyUSD,
      firstCurrencyName: "Euro",
      secondCurrencyName: "Złoty",
    },
  ];
  return {
    item,
    currencyRatesData,
  };
};
