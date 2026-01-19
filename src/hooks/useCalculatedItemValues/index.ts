import { useMemo, useState } from "react";
import { formatNumber } from "../../helpers/functions/formatNumber";
import { formatToSpecialNumber } from "../../helpers/functions/formatToSpecialNumber";
import { currenciesForItem } from "../../helpers/data/currencyData";
import { CalculatedItemValuesProps } from "../../types";

export const useCalculatedItemValues = (props: CalculatedItemValuesProps) => {
  const [selectedCurrency, setSelectedCurrency] =
    useState<(typeof currenciesForItem)[number]>("PLN");

  const { totalWeight, totalPrice, realPrice, profit, profitAbs } =
    useMemo(() => {
      const totalWeightNum: number = props.items.reduce(
        (sum, item) => sum + formatToSpecialNumber(item.weight),
        0
      );

      const totalWeight: string = formatNumber(
        Number(totalWeightNum.toFixed(2))
      );

      const totalPriceNum: number = props.items.reduce(
        (sum, item) => sum + formatToSpecialNumber(item.price),
        0
      );

      const totalPrice: string = formatNumber(Number(totalPriceNum.toFixed(2)));

      const rate: number =
        props.rates?.[selectedCurrency]?.[`${props.metalType}_rates`]
          ?.Price_G ?? 1;

      const realPriceNum: number = totalWeightNum * rate;
      const realPrice: string = formatNumber(Number(realPriceNum.toFixed(2)));

      const profitNum: number = realPriceNum - totalPriceNum;
      const profit: string = formatNumber(Number(profitNum.toFixed(2)));

      const profitAbs: string = formatNumber(
        Number(Math.abs(profitNum).toFixed(2))
      );

      return {
        totalWeight,
        totalPrice,
        realPrice,
        profit,
        profitAbs,
      };
    }, [props.items, props.rates, selectedCurrency]);

  return {
    selectedCurrency,
    setSelectedCurrency,
    totalWeight,
    totalPrice,
    realPrice,
    profit,
    profitAbs,
  };
};
