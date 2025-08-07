import React from "react";
import { ActivityIndicator } from "react-native";
import { Div as View } from "react-native-magnus";
import { InfoMessage } from "../InfoMessage";
import { JSX } from "../../../types";

export const GetDataMessage = (): JSX => {
  return (
    <View flex={1} flexDir="column" justifyContent="center" alignItems="center">
      <ActivityIndicator size="large" color="#10b981" />
      <InfoMessage>Pobieranie danych...</InfoMessage>
    </View>
  );
};
