import React, { useCallback } from "react";
import { Div as View, Button } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { calculateMetalPrices } from "../../../helpers/functions/calculateMetalPrices";
import { useInputValidation } from "../../../hooks/useInputValidation";
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
    <View mt={-4} alignSelf="center">
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
        onPress={onPressCalculatePrices}
      >
        Przelicz
      </Button>
    </View>
  );
};
