import React from "react";
import { Button } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { JSX, SubmitButtonProps } from "../../../types";

export const SubmitButton = (props: SubmitButtonProps): JSX => {
  return (
    <Button
      w={screenWidth / 2}
      alignSelf="center"
      bg="#10b981"
      textTransform="uppercase"
      fontWeight="700"
      color="#f8fafc"
      underlayColor="#6ee7b7"
      shadow="md"
      shadowColor="#6ee7b7"
      borderless
      rounded={20}
      onPress={props.onPress}
    >
      {props.title}
    </Button>
  );
};
