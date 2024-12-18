import React from "react";
import { Div as View, Icon } from "react-native-magnus";
import { CustomPicker } from "../CustomPicker";
import { JSX, CurrencyPickerProps } from "../../../types";

export const CurrencyPicker = (props: CurrencyPickerProps): JSX => {
  return (
    <View
      mt={15}
      mb={15}
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <CustomPicker
        alignItems="flex-end"
        selectedValue={props.selectedCurrencyFrom}
        setValue={props.setSelectedCurrencyFrom}
      />
      <View mx={20}>
        <Icon
          fontSize="6xl"
          name="exchange"
          color="#6ee7b7"
          fontFamily="FontAwesome"
        />
      </View>
      <CustomPicker
        alignItems="flex-start"
        selectedValue={props.selectedCurrencyTo}
        setValue={props.setSelectedCurrencyTo}
      />
    </View>
  );
};
