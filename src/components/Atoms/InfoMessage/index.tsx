import React from "react";
import { Text } from "react-native-magnus";
import { ChildProps, JSX } from "../../../types";

export const InfoMessage = (props: ChildProps): JSX => {
  return (
    <Text
      p={5}
      color="#f8fafc"
      fontSize={18}
      letterSpacing={0.5}
      fontWeight="500"
    >
      {props.children}
    </Text>
  );
};
