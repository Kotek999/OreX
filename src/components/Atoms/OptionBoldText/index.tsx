import React from "react";
import { Text } from "react-native-magnus";
import { TextProps, JSX } from "../../../types";

export const OptionBoldText = (props: TextProps): JSX => (
  <Text color={props.color} fontSize="sm" fontWeight="bold" {...props}>
    {props.children}
  </Text>
);
