import React from "react";
import { Text } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { ChildProps, JSX } from "../../../types";

export const InfoMessage = (props: ChildProps): JSX => {
  return (
    <Text
      p={5}
      color="#f8fafc"
      fontSize={RFValue(14)}
      letterSpacing={0.5}
      fontWeight="500"
    >
      {props.children}
    </Text>
  );
};
