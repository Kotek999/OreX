import { useState } from "react";
import {
  CurrencyRates,
  CurrencyItem,
  ApiResponse,
  NullableString,
  MarketRateProp,
  RatesProp,
} from "../../types";
import { currencySymbols } from "../../helpers/data/currencySymbols";
import { metalMarketData } from "../../helpers/data/metalsStateData";
import { createApiUrl } from "../../helpers/functions/createApiUrl";

type UseFetchedMetalRatesProps = {
  rates: RatesProp;
  errorMessage: NullableString;
  apiDate: NullableString;
  marketRate: MarketRateProp;
  loadingData: boolean;
  getMetalRates: () => Promise<void>;
};

export const useFetchedMetalRates = (): UseFetchedMetalRatesProps => {
  const [rates, setRates] = useState<RatesProp>(null);

  const OZ_TO_GRAM: number = 31.1035;
  const GRAM_TO_KG: number = 1000;
  const TOLA_TO_GRAM: number = 11.66;

  const [errorMessage, setErrorMessage] = useState<NullableString>(null);

  const [apiDate, setApiDate] = useState<NullableString>(null);

  const [marketRate, setMarketRate] = useState<MarketRateProp>(metalMarketData);

  const [loadingData, setLoadingData] = useState<boolean>(false);

  const getMetalRates = async (): Promise<void> => {
    try {
      const apiUrl: string = createApiUrl(currencySymbols);

      setLoadingData(true);

      const response: Response = await fetch(apiUrl);
      const data: ApiResponse = await response.json();

      if (data.items.length === 0) {
        setErrorMessage("Nie znaleziono danych dla wybranych walut.");
        return;
      }

      setApiDate(data.date);

      const filteredRates: Record<string, CurrencyRates> = {};
      const metalRates: MarketRateProp = {};

      data.items.forEach((item: CurrencyItem) => {
        const currency: string = item.curr;
        if (currencySymbols.includes(currency)) {
          filteredRates[currency] = {
            gold_rates: {
              Price_OZ: Number(item.xauPrice.toFixed(2)),
              Price_G: Number((item.xauPrice / OZ_TO_GRAM).toFixed(2)),
              Price_KG: Number(
                ((item.xauPrice / OZ_TO_GRAM) * GRAM_TO_KG).toFixed(2)
              ),
              Price_Tola: Number(
                ((item.xauPrice / OZ_TO_GRAM) * TOLA_TO_GRAM).toFixed(2)
              ),
            },
            silver_rates: {
              Price_OZ: Number(item.xagPrice.toFixed(2)),
              Price_G: Number((item.xagPrice / OZ_TO_GRAM).toFixed(2)),
              Price_KG: Number(
                ((item.xagPrice / OZ_TO_GRAM) * GRAM_TO_KG).toFixed(2)
              ),
              Price_Tola: Number(
                ((item.xagPrice / OZ_TO_GRAM) * TOLA_TO_GRAM).toFixed(2)
              ),
            },
          };
          metalRates[currency] = {
            gold: {
              pricePerGram: Number(item.xauPrice.toFixed(2)) / OZ_TO_GRAM,
              pricePerOunce: Number(item.xauPrice.toFixed(2)),
            },
            silver: {
              pricePerGram: Number(item.xagPrice.toFixed(2)) / OZ_TO_GRAM,
              pricePerOunce: Number(item.xagPrice.toFixed(2)),
            },
          };
        }
      });

      setRates(filteredRates);
      setMarketRate(metalRates);

      setLoadingData(false);
      setErrorMessage(null);
      // console.log("Rates:", JSON.stringify(filteredRates, null, 2));
      // console.log("Market Rates:", JSON.stringify(metalRates, null, 2));
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorMessage("Wystąpił błąd podczas pobierania danych.");
    }
  };

  return {
    rates,
    errorMessage,
    apiDate,
    marketRate,
    loadingData,
    getMetalRates,
  };
};
