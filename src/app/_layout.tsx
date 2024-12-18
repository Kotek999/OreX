import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "react-native-magnus";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { JSX } from "../types";

export default function Layout(): JSX {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
