import React from "react";
import { Div as View, Text } from "react-native-magnus";
import { StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { BlurView } from "expo-blur";
import { calculateProfitOrLoss } from "../../../helpers/functions/calculateProfitOrLoss";
import { createMarketRates } from "../../../helpers/functions/createMarketRates";
import { JSX, MarketRates, ProfitOrLossResultProps } from "../../../types";

export const ProfitOrLossResult = (props: ProfitOrLossResultProps): JSX => {
  const marketRates: MarketRates = createMarketRates(props.marketRate, [
    props.selectedCurrencyFrom,
    props.selectedCurrencyTo,
  ]);

  const profitOrLossResult: JSX = calculateProfitOrLoss({
    grams: parseFloat(props.inputs.inputOne.replace(",", ".")),
    userPrice: parseFloat(props.inputs.inputTwo.replace(",", ".")),
    metalType: props.metalType,
    marketRates: marketRates,
    selectedCurrencyFrom: props.selectedCurrencyFrom,
    selectedCurrencyTo: props.selectedCurrencyTo,
  });

  return (
    <View flex={8} w={screenWidth / 1.5} justifyContent="center">
      <BlurView intensity={10} tint="light" style={styles.blurContainer}>
        {props.marketRate ? (
          <>{profitOrLossResult}</>
        ) : (
          <Text textAlign="center" color="#f8fafc" fontSize={36}>
            N/A
          </Text>
        )}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    overflow: "hidden",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
