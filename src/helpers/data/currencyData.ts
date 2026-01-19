import { Currency } from "../../types";

const valueOfPLN: string = "PLN";
const currencyPLN: Currency = valueOfPLN as Currency;

const valueOfUSD: string = "USD";
const currencyUSD: Currency = valueOfUSD as Currency;

const valueOfEUR: string = "EUR";
const currencyEUR: Currency = valueOfEUR as Currency;

const currencySymbols: string[] = [valueOfEUR, valueOfPLN, valueOfUSD];
const basesCurrencies: Currency[] = [currencyPLN, currencyUSD, currencyEUR];
const combinedCurrencies: Currency[] = [currencyUSD, currencyEUR, currencyPLN];

const currenciesForItem: readonly ["EUR", "USD", "PLN"] = [
  "EUR",
  "USD",
  "PLN",
] as const;

export {
  valueOfPLN,
  currencyPLN,
  valueOfUSD,
  currencyUSD,
  valueOfEUR,
  currencyEUR,
  basesCurrencies,
  combinedCurrencies,
  currencySymbols,
  currenciesForItem,
};
