import { NullableCurrencySymbol } from "../../types";

export const currencySymbolChecker = (
  targetId: string
): NullableCurrencySymbol => {
  const currencySymbols: { [key: string]: NullableCurrencySymbol } = {
    EUR: "€",
    PLN: "ZŁ",
    USD: "$",
  };

  return currencySymbols[targetId] || undefined;
};
