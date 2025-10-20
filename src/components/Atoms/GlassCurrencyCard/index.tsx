import React from "react";
import { StyleSheet } from "react-native";
import { Div as View } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { BlurView } from "expo-blur";
import { TextCurrency } from "../TextCurrency";
import { ArrowIcon } from "../ArrowIcon";
import { JSX, GlassCurrencyCardProps } from "../../../types";

export const GlassCurrencyCard = (props: GlassCurrencyCardProps): JSX => {
  return (
    <View flex={1} w={screenWidth - 20} justifyContent="center">
      <BlurView intensity={10} tint="light" style={styles.container}>
        <View
          w={"100%"}
          flexDir="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <TextCurrency>
            {props.convertedAmount}{" "}
            <TextCurrency fontWeight="600">{props.targetCurrency}</TextCurrency>
          </TextCurrency>
          <View flexDir="column">
            <ArrowIcon name="arrow-top-right" />
            <View style={{ paddingVertical: 1 }} />
            <ArrowIcon name="arrow-bottom-right" />
          </View>
          <View flexDir="column">{props.children}</View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    overflow: "hidden",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
});
