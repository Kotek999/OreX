import React from "react";
import { View } from "react-native";
import { Text } from "react-native-magnus";
import { JSX } from "../types";

export default function Welcome(): JSX {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text fontSize="xl">HOME SCREEN</Text>
    </View>
  );
}
