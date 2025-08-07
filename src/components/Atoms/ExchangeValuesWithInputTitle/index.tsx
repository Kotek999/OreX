import React from "react";
import { Div as View, Text } from "react-native-magnus";
import { formatNumber } from "../../../helpers/functions/formatNumber";
import { JSX, ExchangeValuesWithInputTitleProps } from "../../../types";

export const ExchangeValuesWithInputTitle = (
  props: ExchangeValuesWithInputTitleProps
): JSX => {
  const renderExchangeValues: JSX[] | null =
    props.ratesForBase &&
    Object.entries(props.ratesForBase).map(([targetCurrency, rate]) => (
      <Text
        key={targetCurrency}
        color="#cbd5e1"
        fontSize={14}
        letterSpacing={0.8}
        fontWeight="600"
      >
        {`1 ${targetCurrency} = ${formatNumber(rate.rates.targetCurrency)} ${
          props.targetCurrency
        }`}
      </Text>
    ));

  return (
    <View flexDir="row" justifyContent="space-between">
      <View mb={10} justifyContent="flex-end">
        <Text
          letterSpacing={0.8}
          fontSize={16}
          fontWeight="bold"
          color="#f8fafc"
        >
          Ilość {props.targetCurrency}
        </Text>
      </View>
      <View
        bg="#0e7490"
        mb={10}
        flexDir="column"
        p={10}
        rounded={10}
        overflow="hidden"
        alignSelf="center"
      >
        <View mb={5} alignItems="center">
          <Text
            color="#e2e8f0"
            fontSize={15}
            letterSpacing={0.8}
            fontWeight="bold"
          >
            Kursy
          </Text>
        </View>
        {renderExchangeValues}
      </View>
    </View>
  );
};
