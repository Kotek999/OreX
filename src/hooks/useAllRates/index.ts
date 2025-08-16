import { useEffect } from "react";
import { useFetchedMetalRates } from "../../hooks/useFetchedMetalRates";
import { useFetchedCurrencyRates } from "../../hooks/useFetchedCurrencyRates";
import { createMetalsPriceScreen } from "../../helpers/functions/createMetalsPriceScreen";
import { useMetalRates } from "../../hooks/useMetalsRates";
import { useCurrencyRates } from "../../hooks/useCurrencyRates";
import {
  ModalContentMapProp,
  UseFetchedMetalRatesProps,
  UseFetchedCurrencyRatesProps,
  UseAllRatesProps,
} from "../../types";

export const useAllRates = (props: UseAllRatesProps) => {
  const metalRates: UseFetchedMetalRatesProps = useFetchedMetalRates();
  const currencyRates: UseFetchedCurrencyRatesProps = useFetchedCurrencyRates();

  const { metalsRatesData } = useMetalRates({
    metalRates: metalRates,
    formModal: props.formModal,
  });

  const { item, currencyRatesData } = useCurrencyRates({
    currencyRates: currencyRates,
    formModal: props.formModal,
  });

  useEffect(() => {
    metalRates.getMetalRates();
    currencyRates.getExchangeRates();
    currencyRates.getHistoricalRates();
  }, []);

  const modalContentMap: ModalContentMapProp = {
    ...Object.fromEntries(
      metalsRatesData.map((metal) => [metal.id, createMetalsPriceScreen(metal)])
    ),
    ...Object.fromEntries(
      currencyRatesData.map((currency) => [
        currency.id,
        item.createCurrencyConverterScreen(currency),
      ])
    ),
  };

  return {
    metalRates,
    modalContentMap,
  };
};
