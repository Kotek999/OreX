import React from "react";
import { Text, Div as View } from "react-native-magnus";
import { TouchableOpacity, StyleSheet } from "react-native";
import { currenciesForItem } from "../../../helpers/data/currencyData";
import { JSX, Currency, ItemCurrencyPickerProps } from "../../../types";

export const ItemCurrencyPicker = (props: ItemCurrencyPickerProps): JSX => {
  const selectedCurrency: Currency = props.calculatedItem.selectedCurrency;
  return (
    <View w="80%" flexDir="row" justifyContent="space-evenly">
      {currenciesForItem.map((c) => {
        const isSelectedCurrency: boolean = selectedCurrency === c;
        return (
          <TouchableOpacity
            key={c}
            onPress={() => props.calculatedItem.setSelectedCurrency(c)}
            style={{
              ...styles.picker,
              shadowColor: `${isSelectedCurrency ? "white" : "black"}`,
            }}
          >
            <Text
              fontSize={13}
              textAlign="center"
              fontWeight={isSelectedCurrency ? "bold" : "normal"}
              color={isSelectedCurrency ? "#7dd3fc" : "gray600"}
            >
              {c}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    borderRadius: 12,
    width: 70,
    height: 30,
    backgroundColor: "#083344",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
});
