import { combinedCurrencies } from "../data/currencyData";
import { CombinedRates, Averages } from "../../types";

export const calculateAverage = (
  combinedRates: CombinedRates,
  base: keyof CombinedRates[string],
  days: number
): Averages => {
  const today: Date = new Date();
  const allDatesSorted: string[] = Object.keys(combinedRates).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  const latestAvailableDateStr: string | undefined = allDatesSorted.find(
    (date) => new Date(date) <= today
  );
  if (!latestAvailableDateStr) return { USD: NaN, EUR: NaN, PLN: NaN };

  const latestDate: Date = new Date(latestAvailableDateStr);

  const validDates: string[] = allDatesSorted.filter((date) => {
    const d: Date = new Date(date);
    return (
      d >= new Date(latestDate.getTime() - days * 24 * 60 * 60 * 1000) &&
      d <= latestDate
    );
  });

  const averages: Averages = {};
  combinedCurrencies.forEach((currency) => {
    const sum: number = validDates.reduce((acc, date) => {
      const rate: never =
        combinedRates[date]?.[base]?.[
          currency as keyof (typeof combinedRates)[string][keyof CombinedRates[string]]
        ];
      return acc + (rate ?? 0);
    }, 0);

    averages[currency] = validDates.length
      ? +(sum / validDates.length).toFixed(6)
      : NaN;
  });

  return averages;
};
