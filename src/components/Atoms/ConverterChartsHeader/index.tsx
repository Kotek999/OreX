import React from "react";
import { Div as View, Text } from "react-native-magnus";
import { TextMessage600 } from "../../../components/Atoms/TextMessage600";
import { formatDateWithDay } from "../../../helpers/functions/formatDateWithDay";
import { JSX, ConverterChartsHeaderProp } from "../../../types";
import { screenWidth } from "../../../helpers/dimensions";

export const ConverterChartsHeader = (
  props: ConverterChartsHeaderProp
): JSX => {
  return (
    <View flexDir="row" justifyContent="space-evenly">
      <View w={screenWidth / 1.8}>
        <Text
          color="#e2e8f0"
          fontSize={18}
          fontWeight="600"
          letterSpacing={0.8}
        >
          Wykresy zmian
        </Text>
        <Text
          color="#cbd5e1"
          fontSize={12}
          fontWeight="600"
          letterSpacing={0.8}
        >
          (rok, miesiąc, tydzień, dzień)
        </Text>
      </View>
      <TextMessage600 fontSize={12} color="#cbd5e1" fontWeight="600">
        Odświeżane:{" "}
        {formatDateWithDay(props.exchangeRates?.EUR?.PLN?.date as string)}
      </TextMessage600>
    </View>
  );
};
