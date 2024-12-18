import { apiKey } from "../../../apiKeys.json";

export const createApiUrl = (currencies: string[]): string => {
  const currencyString: string = currencies.join(",");
  return `${apiKey}${currencyString}`;
};
