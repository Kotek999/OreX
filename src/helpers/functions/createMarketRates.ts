import { MetalMarketRate, MarketRates } from "../../types";

export const createMarketRates = (
  marketRate: MetalMarketRate,
  currencies: string[]
): MarketRates =>
  currencies.reduce((acc, currency) => {
    acc[currency] = marketRate && marketRate[currency];
    return acc;
  }, {} as MarketRates);
