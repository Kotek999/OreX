import React from "react";
import { StyleSheet } from "react-native";
import { Div as View, Text } from "react-native-magnus";
import { Pointer } from "react-native-gifted-charts";
import { LinearGradient } from "expo-linear-gradient";
import { JSX, ItemType } from "../../types";

export const pointerConfig: Pointer = {
  pointerStripUptoDataPoint: true,
  pointerStripColor: "#94a3b8",
  pointerStripWidth: 1.5,
  strokeDashArray: [2, 4],
  pointerColor: "#6ee7b7",
  radius: 4,
  pointerLabelWidth: 60,
  pointerLabelHeight: 100,
  pointerLabelComponent: (items: ItemType[]): JSX => {
    return (
      <>
        <View w={80} justifyContent="center" ml={-30}>
          <LinearGradient
            start={{ x: 1.2, y: 1.5 }}
            end={{ x: 0.4, y: 0.2 }}
            colors={["#0c4a6e", "#10b981"]}
            style={styles.gradientContainer}
          >
            <Text color="white" fontWeight="bold" textAlign="center">
              {items[0].value?.toFixed(3)}
            </Text>
          </LinearGradient>
        </View>
      </>
    );
  },
};

const styles = StyleSheet.create({
  gradientContainer: {
    overflow: "hidden",
    width: 50,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: "red",
  },
});
