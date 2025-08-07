import { ConvertCurrencyProps, MetalRate } from "../../types";

export const convertCurrencyValues = (props: ConvertCurrencyProps): number => {
  if (props.fromCurrency === props.toCurrency) {
    return props.grams;
  }

  const fromRate: MetalRate =
    props.marketRates[props.fromCurrency]?.[props.metalType];
  const toRate: MetalRate =
    props.marketRates[props.toCurrency]?.[props.metalType];

  if (!fromRate || !toRate) {
    throw new Error("Nieprawidłowa waluta lub brak danych o kursie");
  }

  const amountInTargetCurrency: number =
    (props.grams * fromRate.pricePerGram) / toRate.pricePerGram;

  return amountInTargetCurrency;
};
