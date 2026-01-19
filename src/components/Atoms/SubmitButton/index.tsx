import React from "react";
import { Button } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { screenWidth } from "../../../helpers/dimensions";
import { JSX, SubmitButtonProps } from "../../../types";

export const SubmitButton = (props: SubmitButtonProps): JSX => {
  return (
    <Button
      w={screenWidth / 2}
      alignSelf="center"
      textAlign="center"
      bg={props.bg}
      textTransform="uppercase"
      fontWeight="700"
      fontSize={RFValue(13)}
      color="#f8fafc"
      underlayColor="#6ee7b7"
      shadow="md"
      shadowColor="#6ee7b7"
      borderless
      rounded={20}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      {props.title}
    </Button>
  );
};
