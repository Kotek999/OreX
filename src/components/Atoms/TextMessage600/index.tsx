import React from "react";
import { Text } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { JSX, TextMessageProps } from "../../../types";

export const TextMessage600 = (props: TextMessageProps): JSX => {
  return (
    <Text
      color={props.color}
      fontSize={RFValue(11)}
      fontWeight={props.fontWeight}
      letterSpacing={0.8}
    >
      {props.children}
    </Text>
  );
};
