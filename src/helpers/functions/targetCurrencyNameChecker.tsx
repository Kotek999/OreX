import { formatSpecificWordWithValue } from "./formatSpecificWordWithValue";
import { JSX } from "../../types";

export const targetCurrencyNameChecker = (
  targetCurrency: string,
  targetNumber: number
): string | JSX | undefined => {
  const actions: { [key: string]: string } = {
    EUR: "euro",
    PLN: "złoty",
    USD: "dolary",
  };

  const action = actions[targetCurrency];
  return action
    ? formatSpecificWordWithValue(targetNumber, action)
    : "Brak dostępnych danych";
};
