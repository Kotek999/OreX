import React from "react";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Div as View } from "react-native-magnus";
import { RenderHomeScreen } from "../components/Organisms/RenderHomeScreen";
import { JSX } from "../types";

export default function Home(): JSX {
  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <View flex={1} mt={insets.top} bg="#111827">
      <StatusBar style="light" backgroundColor="#111827" />
      <RenderHomeScreen />
    </View>
  );
}
