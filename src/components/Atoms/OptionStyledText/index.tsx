import React from "react";
import { Text } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { TextProps, JSX } from "../../../types";

export const OptionStyledText = (props: TextProps): JSX => (
  <Text
    fontSize={RFValue(10)}
    color={props.color}
    lineHeight={22}
    letterSpacing={0.5}
    {...props}
  >
    {props.children}
  </Text>
);
