import React from "react";
import { Div as View } from "react-native-magnus";
import { formatDateWithDay } from "../../../helpers/functions/formatDateWithDay";
import { screenWidth } from "../../../helpers/dimensions";
import { ChartHeader } from "../ChartHeader";
import { JSX, ConverterChartsHeaderProp, Optional } from "../../../types";

export const ConverterChartsHeader = (
  props: ConverterChartsHeaderProp
): JSX => {
  const date: Optional<string> = props.exchangeRates?.EUR?.PLN?.date;
  return (
    <View flexDir="row" justifyContent="space-evenly">
      <ChartHeader
        w={screenWidth / 1.8}
        title="Wykresy zmian"
        subtitle="(rok, miesiąc, tydzień, dzień)"
      />
      <ChartHeader
        title="Odświeżane"
        subtitle={`(${formatDateWithDay(String(date), true)})`}
      />
    </View>
  );
};
