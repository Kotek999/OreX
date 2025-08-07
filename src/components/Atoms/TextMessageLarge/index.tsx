import React from "react";
import { Text } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { TextMessageProps, JSX } from "../../../types";

export const TextMessageLarge = (props: TextMessageProps): JSX => {
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
