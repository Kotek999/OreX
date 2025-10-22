import { apiConfig } from "../../config/apiConfig";

export const createApiUrl = (currencies: string[]): string => {
  const currencyString: string = currencies.join(",");
  return `${apiConfig.apiKey}${currencyString}`;
};
