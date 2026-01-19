import React, { useCallback } from "react";
import { Div as View } from "react-native-magnus";
import { calculateMetalPrices } from "../../../helpers/functions/calculateMetalPrices";
import { useInputValidation } from "../../../hooks/useInputValidation";
import { SubmitButton } from "../SubmitButton";
import { JSX, CalculatedMetalPriceProps, OnPress } from "../../../types";

export const CalculatedMetalPrice = <
  InputsType extends { inputOne: string; inputTwo: string }
>(
  props: CalculatedMetalPriceProps<InputsType>
): JSX => {
  const metalPriceValues: CalculatedMetalPriceProps<InputsType> = { ...props };

  const onPressCalculatePrices: OnPress = useCallback(() => {
    calculateMetalPrices(metalPriceValues);
  }, [metalPriceValues]);

  useInputValidation(metalPriceValues);

  return (
    <View mt={-4} mb={10} alignSelf="center">
      <SubmitButton
        bg="#10b981"
        title="Przelicz"
        onPress={onPressCalculatePrices}
      />
    </View>
  );
};
