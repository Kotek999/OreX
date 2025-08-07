import React from "react";
import { Text } from "react-native-magnus";
import { formatNumber } from "./formatNumber";
import { JSX, CurrenciesMap } from "../../types";

export const formatSpecificWordWithValue = (
  value: number,
  word: string
): JSX | string => {
  const words: CurrenciesMap = {
    gram: ["gram", "gramy", "gramów"],
    euro: ["euro", "euro", "euro"],
    złoty: ["złoty", "złote", "złotych"],
    dolary: ["dolar", "dolary", "dolarów"],
  };

  const forms: [string, string, string] = words[
    word as keyof CurrenciesMap
  ] || [word, word, word];

  const unit: string =
    value === 1
      ? forms[0]
      : value % 10 >= 2 &&
        value % 10 <= 4 &&
        (value % 100 < 10 || value % 100 >= 20)
      ? forms[1]
      : forms[2];

  return (
    <>
      <Text color="#e2e8f0" fontSize={14} fontWeight="bold" letterSpacing={0.8}>
        {formatNumber(value)}{" "}
      </Text>
      <Text color="#cbd5e1" fontSize={14} fontWeight="600" letterSpacing={0.8}>
        {unit}
      </Text>
    </>
  );
};
