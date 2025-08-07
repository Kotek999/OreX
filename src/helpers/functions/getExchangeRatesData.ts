import {
  valueOfPLN,
  valueOfEUR,
  valueOfUSD,
} from "../../helpers/data/currencyData";
import { ExchangeRatesDataProp } from "../../types";

export const getExchangeRatesData = (props: ExchangeRatesDataProp) => {
  const PLN: number = props.data.rates.PLN;
  const EUR: number = props.data.rates.EUR;

  const eurToPln: number = PLN / EUR;
  const plnToEur: number = EUR / PLN;

  const eurToUsd: number = 1 / EUR;
  const plnToUsd: number = 1 / PLN;

  const date: string = props.data.date;

  const exchangeRates = {
    PLN: {
      USD: {
        base: valueOfPLN,
        date: date,
        rates: {
          targetCurrency: PLN,
        },
      },
      EUR: {
        base: valueOfPLN,
        date: date,
        rates: {
          targetCurrency: eurToPln,
        },
      },
    },
    EUR: {
      USD: {
        base: valueOfEUR,
        date: date,
        rates: {
          targetCurrency: EUR,
        },
      },
      PLN: {
        base: valueOfEUR,
        date: date,
        rates: {
          targetCurrency: plnToEur,
        },
      },
    },
    USD: {
      EUR: {
        base: valueOfUSD,
        date: date,
        rates: {
          targetCurrency: eurToUsd,
        },
      },
      PLN: {
        base: valueOfUSD,
        date: date,
        rates: {
          targetCurrency: plnToUsd,
        },
      },
    },
  };

  return { exchangeRates };
};
