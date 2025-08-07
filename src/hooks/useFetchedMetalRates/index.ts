import { useState } from "react";
import { metalMarketData } from "../../helpers/data/metalsStateData";
import { getMetalRatesPromise } from "../../helpers/functions/getMetalRatesPromise";
import {
  NullableString,
  MarketRateProp,
  RatesProp,
  UseFetchedMetalRatesProps,
} from "../../types";

export const useFetchedMetalRates = (): UseFetchedMetalRatesProps => {
  const [rates, setRates] = useState<RatesProp>(null);

  const [errorMessage, setErrorMessage] = useState<NullableString>(null);

  const [apiDate, setApiDate] = useState<NullableString>(null);

  const [marketRate, setMarketRate] = useState<MarketRateProp>(metalMarketData);

  const [loadingData, setLoadingData] = useState<boolean>(false);

  const getMetalRates = async (): Promise<void> =>
    getMetalRatesPromise({
      setErrorMessage: setErrorMessage,
      setApiDate: setApiDate,
      setMarketRate: setMarketRate,
      setLoadingData: setLoadingData,
      setRates: setRates,
    });

  return {
    rates,
    errorMessage,
    apiDate,
    marketRate,
    loadingData,
    getMetalRates,
  };
};
