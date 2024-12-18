import React from "react";
import { Div as View } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { formatNumber } from "../../../helpers/functions/formatNumber";
import { formatSpecificWordWithValue } from "../../../helpers/functions/formatSpecificWordWithValue";
import { targetCurrencyNameChecker } from "../../../helpers/functions/targetCurrencyNameChecker";
import { currencySymbolChecker } from "../../../helpers/functions/currencySymbolChecker";
import { TextMessage600 } from "../TextMessage600";
import { JSX, InputsInformationValuesProps } from "../../../types";

export const InputsInformationValues = (
  props: InputsInformationValuesProps
): JSX => {
  const parsedInputOne = parseFloat(props.inputs.inputOne);
  const parsedInputTwo = parseFloat(props.inputs.inputTwo);

  const inputOneValue = formatSpecificWordWithValue(parsedInputOne, "gram");

  const inputTwoValue = targetCurrencyNameChecker(
    props.selectedCurrencyFrom,
    parsedInputTwo
  );

  const dividedValue = `${formatNumber(
    parsedInputTwo / parsedInputOne
  )} ${currencySymbolChecker(props.selectedCurrencyFrom)}`;

  return (
    <View w={screenWidth - 34}>
      <View>
        <TextMessage600 color="#e2e8f0" fontWeight="600">
          {inputOneValue}
        </TextMessage600>
        <TextMessage600 color="#e2e8f0" fontWeight="600">
          {inputTwoValue}
        </TextMessage600>
      </View>
      <View flexDir="row" mt={4}>
        <TextMessage600 color="#cbd5e1" fontWeight="600">
          Cena za jeden gram ~{" "}
        </TextMessage600>
        <TextMessage600 color="#e2e8f0" fontWeight="bold">
          {dividedValue}
        </TextMessage600>
      </View>
    </View>
  );
};
