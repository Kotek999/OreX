import { ConvertCurrencyProps } from "../../types";

export const convertCurrencyValues = (props: ConvertCurrencyProps): number => {
  if (props.fromCurrency === props.toCurrency) {
    return props.grams;
  }

  const fromRate = props.marketRates[props.fromCurrency]?.[props.metalType];
  const toRate = props.marketRates[props.toCurrency]?.[props.metalType];

  if (!fromRate || !toRate) {
    throw new Error("Invalid currency or missing rate data");
  }

  const amountInTargetCurrency: number =
    (props.grams * fromRate.pricePerGram) / toRate.pricePerGram;

  return amountInTargetCurrency;
};
