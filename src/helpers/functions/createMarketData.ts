import { currencySymbols } from "../data/currencyData";

export const createMarketData = <T extends unknown>(
  defaultValues: T
): Record<string, T> => {
  return currencySymbols.reduce((acc, currency) => {
    acc[currency] = JSON.parse(JSON.stringify(defaultValues));
    return acc;
  }, {} as Record<string, T>);
};
