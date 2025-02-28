import React from "react";
import { Text } from "react-native-magnus";
import { JSX, TextMessageProps } from "../../../types";

export const TextMessage600 = (props: TextMessageProps): JSX => {
  return (
    <Text
      color={props.color}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      letterSpacing={0.8}
    >
      {props.children}
    </Text>
  );
};
