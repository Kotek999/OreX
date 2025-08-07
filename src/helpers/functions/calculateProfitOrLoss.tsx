import { Div as View, Text } from "react-native-magnus";
import { convertCurrencyValues } from "./convertCurrencyValues";
import { TextResult } from "../../components/Atoms/TextResult";
import { ResultMessageWithValue } from "../../components/Atoms/ResultMessageWithValue";
import {
  JSX,
  CalculateProfitOrLossProps,
  Color,
  Message,
  Result,
} from "../../types";

export const calculateProfitOrLoss = (
  props: CalculateProfitOrLossProps
): JSX => {
  const userPriceInSelectedCurrency: number = convertCurrencyValues({
    grams: props.userPrice,
    fromCurrency: props.selectedCurrencyFrom,
    toCurrency: props.selectedCurrencyTo,
    metalType: props.metalType,
    marketRates: props.marketRates,
  });

  const marketRate: number =
    props.metalType === "gold"
      ? props.marketRates[props.selectedCurrencyTo].gold.pricePerGram
      : props.marketRates[props.selectedCurrencyTo].silver.pricePerGram;

  const marketValue: number = props.grams * marketRate;
  const userValue: number = props.grams * userPriceInSelectedCurrency;

  const difference: number = marketValue - userValue;

  const moreThanZero: boolean = difference > 0;
  const lessThanZero: boolean = difference < 0;
  const isConditionZero: boolean = difference === 0;

  const color: Color = moreThanZero
    ? "#4ade80"
    : lessThanZero
    ? "#fb7185"
    : "#f8fafc";
  const lossOrProfitMessage: Message = moreThanZero
    ? "plus"
    : lessThanZero
    ? "minus"
    : "N/A";
  const resultMessage: Result = moreThanZero ? "zyskać" : "stracić";

  return (
    <View alignItems="center" p={0} flexDir="row" justifyContent="space-around">
      <View flexDir="column">
        <TextResult color="#f8fafc">
          Jesteś na <TextResult color={color}>{lossOrProfitMessage}</TextResult>
        </TextResult>
        <View flexDir="row" pt={12} justifyContent="space-between">
          {!isConditionZero ? (
            <ResultMessageWithValue
              valueToFormat={Math.abs(difference)}
              profitOrLossValue={resultMessage}
              selectedCurrencyTo={props.selectedCurrencyTo}
            />
          ) : (
            <Text
              color="#f8fafc"
              fontSize={26}
              fontWeight="900"
              letterSpacing={0.5}
            >
              Cena wyjściowa i cena rynkowa są takie same.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};
