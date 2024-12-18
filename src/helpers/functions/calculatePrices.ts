import { MetalRates } from "../../types";

export const calculatePrices = (
  rate: MetalRates,
  amount: number
): MetalRates => {
  return {
    Price_OZ: Number((amount * rate.Price_OZ).toFixed(2)),
    Price_G: Number((amount * rate.Price_G).toFixed(2)),
    Price_KG: Number((amount * rate.Price_KG).toFixed(2)),
    Price_Tola: Number((amount * rate.Price_Tola).toFixed(2)),
  };
};
