import React from "react";
import { Div as View, Input, Icon } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { ErrorMessage } from "../../../components/Atoms/ErrorMessage";
import { SubmitButton } from "../../Atoms/SubmitButton";
import { ExchangeValuesWithInputTitle } from "../ExchangeValuesWithInputTitle";
import { JSX, ConverterInputWithButtonProps } from "../../../types";

export const ConverterInputWithButton = (
  props: ConverterInputWithButtonProps
): JSX => {
  return (
    <View>
      <View mt={14} flexDir="column" alignSelf="center">
        <ExchangeValuesWithInputTitle
          targetCurrency={props.targetCurrency}
          ratesForBase={props.ratesForBase}
        />
        <View w={screenWidth / 1.5} flexDir="row">
          <Input
            flex={1}
            h={50}
            borderColor={props.emptyFieldError ? "#f87171" : "transparent"}
            borderWidth={props.emptyFieldError ? 2 : 0}
            bg="#cffafe"
            placeholder="0.00"
            focusBorderColor="blue700"
            keyboardType="numeric"
            suffix={
              <Icon name="money" color="gray700" fontFamily="FontAwesome" />
            }
            value={props.inputAmount}
            onChangeText={(text) => props.onChangeTextInputState(text)}
          />
        </View>
        <ErrorMessage emptyFieldError={props.emptyFieldError} />
      </View>
      <View mt={25} mb={25} alignSelf="center">
        <SubmitButton
          bg="#10b981"
          title="Przelicz"
          onPress={props.onPressConvert}
        />
      </View>
    </View>
  );
};
