import React from "react";
import { StyleSheet } from "react-native";
import { Div as View } from "react-native-magnus";
import { Picker } from "@react-native-picker/picker";
import { currencySymbols } from "../../../helpers/data/currencySymbols";
import { JSX, CustomPickerProps } from "../../../types";

export const CustomPicker = (props: CustomPickerProps): JSX => {
  return (
    <View flex={2} alignItems={props.alignItems}>
      <Picker
        selectedValue={props.selectedValue}
        onValueChange={(itemValue) => props.setValue(itemValue)}
        style={styles.pickerContainer}
      >
        {currencySymbols.map((currency) => (
          <Picker.Item label={currency} value={currency} key={currency} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: "#cffafe",
    color: "#030712",
    width: 120,
  },
});
