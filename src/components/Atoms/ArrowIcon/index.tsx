import React from "react";
import { Icon } from "react-native-magnus";
import { JSX, ArrowIconProp } from "../../../types";

export const ArrowIcon = (props: ArrowIconProp): JSX => {
  return (
    <Icon
      fontSize={20}
      name={props.name}
      color="#6ee7b7"
      fontFamily="MaterialCommunityIcons"
    />
  );
};
