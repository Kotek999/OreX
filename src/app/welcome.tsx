import React from "react";
import { Link } from "expo-router";
import { View, Text } from "react-native";
import { JSX } from "../types";

export default function Welcome(): JSX {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>WELCOME SCREEN</Text>
      <Link href="/home">Go to home</Link>
    </View>
  );
}
