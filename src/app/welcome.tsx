import React from "react";
import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "react-native-magnus";
import { JSX } from "../types";

export default function Welcome(): JSX {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text fontSize="xl">WELCOME SCREEN</Text>
      <Link href="/home">Go to home</Link>
    </View>
  );
}
