import React from "react";
import { Div as View, Text, Icon } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { JSX, ErrorMessageProps } from "../../../types";

export const ErrorMessage = (props: ErrorMessageProps): JSX => {
  return (
    <>
      {props.emptyFieldError && (
        <View mt={10} mb={10} flexDir="row" alignItems="center">
          <Icon
            fontSize="sm"
            name="exclamation-circle"
            color="#f87171"
            fontFamily="FontAwesome5"
          />
          <Text
            color="#f87171"
            ml={8}
            textAlign="left"
            fontSize={RFValue(10)}
            letterSpacing={0.5}
            fontWeight="bold"
          >
            {props.emptyFieldError}
          </Text>
        </View>
      )}
    </>
  );
};
