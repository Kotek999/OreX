import React from "react";
import { Text } from "react-native-magnus";
import { TextProps, JSX } from "../../../types";

export const OptionStyledText = (props: TextProps): JSX => (
  <Text
    fontSize={13}
    color={props.color}
    lineHeight={22}
    letterSpacing={0.5}
    {...props}
  >
    {props.children}
  </Text>
);
