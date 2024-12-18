import React from "react";
import { Text } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { TextMessageLargeProps, JSX } from "../../../types";

export const TextMessageLarge = (props: TextMessageLargeProps): JSX => {
  return (
    <Text
      w={screenWidth}
      lineHeight={34}
      letterSpacing={0.8}
      textAlign="center"
      fontSize="3xl"
      fontWeight="500"
      color={props.color}
    >
      {props.children}
    </Text>
  );
};
