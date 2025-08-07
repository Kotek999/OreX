import React from "react";
import { formatNumber } from "../../../helpers/functions/formatNumber";
import { TextCurrency } from "../TextCurrency";
import { JSX, CurrencyValueWithSymbolProps } from "../../../types";

export const CurrencyValueWithSymbol = (
  props: CurrencyValueWithSymbolProps
): JSX => {
  return (
    <TextCurrency>
      {formatNumber(props.value)}{" "}
      <TextCurrency fontWeight="600">{props.currency}</TextCurrency>
      {props.children}
    </TextCurrency>
  );
};
