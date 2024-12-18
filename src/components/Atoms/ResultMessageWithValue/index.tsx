import { Div as View, Text } from "react-native-magnus";
import { formatNumber } from "../../../helpers/functions/formatNumber";
import { currencySymbolChecker } from "../../../helpers/functions/currencySymbolChecker";
import { JSX, ResultMessageWithValueProps } from "../../../types";

export const ResultMessageWithValue = (
  props: ResultMessageWithValueProps
): JSX => {
  return (
    <View flexDir="column">
      <Text mt={10} color="#f8fafc" fontSize={14} letterSpacing={0.5}>
        {`Możesz ${props.profitOrLossValue}`}
      </Text>
      <Text color="#f8fafc" fontSize={26} fontWeight="900" letterSpacing={0.5}>
        {formatNumber(props.valueToFormat)}{" "}
        {currencySymbolChecker(props.selectedCurrencyTo)}
      </Text>
    </View>
  );
};
