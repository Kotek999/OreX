import React from "react";
import { Text } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { JSX, TextCurrencyProps } from "../../../types";

export const TextCurrency = (props: TextCurrencyProps): JSX => {
  return (
    <Text
      fontWeight={props.fontWeight}
      fontSize={RFValue(16)}
      textTransform="uppercase"
      color="#f8fafc"
      letterSpacing={0.5}
    >
      {props.children}
    </Text>
  );
};
