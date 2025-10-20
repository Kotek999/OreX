import { useState } from "react";
import { buildResponseParameters } from "../../helpers/functions/buildResponseParameters";
import { formatDateLabel } from "../../helpers/functions/formatDateLabel";
import { calculateAverage } from "../../helpers/functions/calculateAverage";
import { calculateTrendIndicator } from "../../helpers/functions/calculateTrendIndicator";
import {
  valueOfPLN,
  valueOfEUR,
  valueOfUSD,
  basesCurrencies,
} from "../../helpers/data/currencyData";
import { getExchangeRatesData } from "../../helpers/functions/getExchangeRatesData";
import {
  Trends,
  TrendsResult,
  ExchangeRates,
  CombinedExchangeRates,
  HistoricalRates,
  HistoricalDataResponse,
  CombinedRates,
  NullableString,
  UseFetchedCurrencyRatesProps,
} from "../../types";
import apiKeys from "../../../apiKeys.json";

export const useFetchedCurrencyRates = (): UseFetchedCurrencyRatesProps => {
  const [loadingScreenData, setLoadingScreenData] = useState<boolean>(true);

  const [error, setError] = useState<NullableString>(null);

  const [exchangeRates, setExchangeRates] =
    useState<CombinedExchangeRates | null>(null);

  const [historicalRates, setHistoricalRates] = useState<HistoricalRates>({});

  const [trends, setTrends] = useState<Trends>(null);

  const getExchangeRates = async () => {
    try {
      setLoadingScreenData(true);
      const data: ExchangeRates = await buildResponseParameters<ExchangeRates>(
        apiKeys.exchangeRates.apiKey,
        {
          symbols: `${valueOfPLN},${valueOfEUR}`,
          base: valueOfUSD,
        }
      );

      const { exchangeRates } = getExchangeRatesData({ data: data });

      setExchangeRates(exchangeRates);
      setError(null);
    } catch (err) {
      setError(
        `Wystąpił błąd podczas pobierania danych: ${
          err instanceof Error ? err.message : "Wystąpił nieznany błąd"
        }`
      );
    } finally {
      setLoadingScreenData(false);
    }
  };

  const getHistoricalRates = async () => {
    try {
      setLoadingScreenData(true);
      const currentDate: Date = new Date();
      const oneYearAgo: Date = new Date(currentDate);
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

      const startDate: string = oneYearAgo.toISOString().split("T")[0];

      const historicalData: HistoricalDataResponse =
        await buildResponseParameters<HistoricalDataResponse>(
          `${apiKeys.historicalData.apiKey}${startDate}..?base=${valueOfEUR}&symbols=${valueOfUSD},${valueOfPLN}`,
          {
            symbols: `${valueOfUSD},${valueOfPLN}`,
            base: valueOfEUR,
          }
        );

      const allCombinedRates: CombinedRates = {};

      Object.entries(historicalData.rates).forEach(([date, rate]) => {
        const eurToUsd: number = rate.USD;
        const eurToPln: number = rate.PLN;

        const usdToPln: number = eurToPln / eurToUsd;
        const plnToUsd: number = eurToUsd / eurToPln;

        allCombinedRates[date] = {
          EUR: {
            USD: eurToUsd,
            PLN: eurToPln,
          },
          USD: {
            EUR: 1 / eurToUsd,
            PLN: usdToPln,
          },
          PLN: {
            EUR: 1 / eurToPln,
            USD: plnToUsd,
          },
        };
      });

      const result: TrendsResult = calculateTrendIndicator(
        allCombinedRates,
        basesCurrencies
      );
      setTrends(result);

      const allHistoricalRates: HistoricalRates = {};

      basesCurrencies.forEach((base) => {
        allHistoricalRates[base] = {
          [formatDateLabel(365, true)]: calculateAverage(
            allCombinedRates,
            base,
            365
          ),
          [formatDateLabel(30, true)]: calculateAverage(
            allCombinedRates,
            base,
            30
          ),
          [formatDateLabel(7, true)]: calculateAverage(
            allCombinedRates,
            base,
            7
          ),
          [formatDateLabel(1, true)]: calculateAverage(
            allCombinedRates,
            base,
            1
          ),
        };
      });

      setHistoricalRates(allHistoricalRates);
      setError(null);
    } catch (err) {
      setError(
        `Wystąpił błąd podczas pobierania danych: ${
          err instanceof Error ? err.message : "Wystąpił nieznany błąd"
        }`
      );
    } finally {
      setLoadingScreenData(false);
    }
  };

  return {
    loadingScreenData,
    error,
    exchangeRates,
    historicalRates,
    trends,
    getExchangeRates,
    getHistoricalRates,
  };
};
