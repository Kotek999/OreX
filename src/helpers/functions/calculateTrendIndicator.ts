import { combinedCurrencies } from "../data/currencyData";
import {
  CombinedRates,
  CombinedRatesValues,
  Currency,
  Trend,
  TrendProp,
} from "../../types";

export const calculateTrendIndicator = (
  combinedRates: CombinedRates,
  baseCurrencies: Currency[]
): TrendProp => {
  const trendsByBase: TrendProp = {} as TrendProp;

  const dates: string[] = Object.keys(combinedRates).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  if (dates.length < 2) return trendsByBase;

  const latestDate: string = dates[dates.length - 1];
  const previousDate: string = dates[dates.length - 2];

  baseCurrencies.forEach((base) => {
    const latest: CombinedRatesValues = combinedRates[latestDate]?.[base];
    const previous: CombinedRatesValues = combinedRates[previousDate]?.[base];

    const trend: Trend = {};

    combinedCurrencies.forEach((currency) => {
      const latestValue: number = (latest as Record<Currency, number>)?.[
        currency
      ];
      const previousValue: number = (previous as Record<Currency, number>)?.[
        currency
      ];

      if (!latestValue || !previousValue) return;

      if (latestValue > previousValue) {
        trend[currency] = { symbol: "▲", color: "#4ade80" };
      } else if (latestValue < previousValue) {
        trend[currency] = { symbol: "▼", color: "#fb7185" };
      } else {
        trend[currency] = { symbol: "•", color: "gray" };
      }
    });

    trendsByBase[base] = trend;
  });

  return trendsByBase;
};
