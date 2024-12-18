import React from "react";
import { Div as View, Text } from "react-native-magnus";
import { JSX } from "../../../types";

export const NotAvailableData = (): JSX => {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text
        p={5}
        color="#f8fafc"
        fontSize={18}
        letterSpacing={0.5}
        fontWeight="500"
      >
        Brak aktualnych danych
      </Text>
      <Text color="#f8fafc" fontSize={18} letterSpacing={0.5} fontWeight="500">
        Spróbuj ponownie później
      </Text>
    </View>
  );
};
