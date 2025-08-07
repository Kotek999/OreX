import { ConverterRenderChartsProps, ChartsData } from "../../types";

export const chartsData = (props: ConverterRenderChartsProps): ChartsData => [
  {
    currencyName: props.firstCurrencyName,
    currency: props.firstCurrency,
    color: "#6366f1",
    isOtherChart: true,
  },
  {
    currencyName: props.secondCurrencyName,
    currency: props.secondCurrency,
    color: "#0ea5e9",
    isOtherChart: false,
  },
];
