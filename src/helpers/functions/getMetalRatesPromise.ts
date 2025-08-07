import { currencySymbols } from "../data/currencyData";
import { createApiUrl } from "./createApiUrl";
import {
  OZ_TO_GRAM,
  GRAM_TO_KG,
  TOLA_TO_GRAM,
} from "../data/metalsStaticValuesData";
import {
  CurrencyRates,
  CurrencyItem,
  ApiResponse,
  MarketRateProp,
  MetalRatesPromiseProps,
} from "../../types";

export const getMetalRatesPromise = async (
  props: MetalRatesPromiseProps
): Promise<void> => {
  try {
    const apiUrl: string = createApiUrl(currencySymbols);

    props.setLoadingData(true);

    const response: Response = await fetch(apiUrl);
    const data: ApiResponse = await response.json();

    if (data.items.length === 0) {
      props.setErrorMessage("Nie znaleziono danych dla wybranych walut.");
      return;
    }

    props.setApiDate(data.date);

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
    props.setRates(filteredRates);
    props.setMarketRate(metalRates);
    props.setLoadingData(false);
    props.setErrorMessage(null);
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    props.setErrorMessage("Wystąpił błąd podczas pobierania danych.");
  }
};
