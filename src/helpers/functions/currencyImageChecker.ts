import { euro, zloty, dolar } from "../imageRequirements";
import { NullableImageSource } from "../../types";

export const currencyImageChecker = (targetId: string): NullableImageSource => {
  const currencyImages: { [key: string]: NullableImageSource } = {
    EUR: euro,
    PLN: zloty,
    USD: dolar,
  };

  return currencyImages[targetId] || undefined;
};
