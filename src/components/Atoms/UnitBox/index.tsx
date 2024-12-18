import React from "react";
import { StyleSheet } from "react-native";
import { Div as View, Text, Icon } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { getMetalPrice } from "../../../helpers/functions/getMetalPrice";
import { JSX, MetalRates, UnitBoxProps } from "../../../types";

export const UnitBox = (props: UnitBoxProps): JSX => {
  return (
    <LinearGradient
      colors={["#0891b2", "#0c4a6e"]}
      start={{ x: 0.5, y: 1.2 }}
      end={{ x: 0.4, y: 0.2 }}
      style={{
        width: screenWidth / props.screenWidthDividedValue,
        ...styles.gradientContainer,
      }}
    >
      <BlurView intensity={10} tint="light" style={styles.blurContainer}>
        <View flex={1} p={20} alignItems="flex-start" justifyContent="center">
          <View flexDir="row" mb={10}>
            <Text fontSize={18} fontWeight="bold" color="#7dd3fc">
              {props.title}
            </Text>
            <Icon
              style={{ marginLeft: 5 }}
              fontSize="4xl"
              name="weight"
              color="#7dd3fc"
              fontFamily="MaterialCommunityIcons"
            />
          </View>
          <Text
            fontSize={14}
            fontWeight="700"
            letterSpacing={0.5}
            color="#f8fafc"
          >
            {props.marketRate ? (
              <>
                {getMetalPrice({
                  inputs: props.inputs,
                  output: props.output,
                  selectedCurrencyTo: props.selectedCurrencyTo,
                  metalType: props.metalType,
                  priceType: props.priceType as keyof MetalRates,
                })}
              </>
            ) : (
              <Text fontSize={18} color="#f8fafc">
                N/A
              </Text>
            )}
          </Text>
        </View>
      </BlurView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    borderRadius: 15,
    overflow: "hidden",
    height: 80,
    backgroundColor: "#155e75",
    marginHorizontal: 20,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  blurContainer: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "#7dd3fc",
    borderWidth: 0.8,
  },
});
