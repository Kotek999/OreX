import React from "react";
import { Icon, Text, Div as View } from "react-native-magnus";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { currencySymbolChecker } from "../../../helpers/functions/currencySymbolChecker";
import { formatToSpecialNumber } from "../../../helpers/functions/formatToSpecialNumber";
import {
  JSX,
  ItemMenuProfitValueProps,
  ResultIconName,
  ResultIconColor,
} from "../../../types";

export const ItemMenuProfitValue = (props: ItemMenuProfitValueProps): JSX => {
  const profitNum: number = formatToSpecialNumber(props.calculatedItem.profit);

  const iconName: ResultIconName =
    profitNum < 0
      ? "keyboard-double-arrow-down"
      : profitNum > 0
      ? "keyboard-double-arrow-up"
      : "block";
  const iconColor: ResultIconColor =
    profitNum < 0 ? "crimson" : profitNum > 0 ? "lime" : "white";

  return (
    <LinearGradient
      colors={["#075985", "#0e7490"]}
      start={{ x: 0.5, y: 1.2 }}
      end={{ x: 0.4, y: 0.2 }}
      style={styles.gradient}
    >
      <BlurView intensity={10} tint="light" style={styles.blurView}>
        <View alignItems="center">
          <View flexDir="row">
            <Icon
              fontSize="5xl"
              name={iconName}
              color={iconColor}
              fontFamily="MaterialIcons"
            />
            <Text style={styles.profitValue}>
              {props.calculatedItem.profitAbs}{" "}
              {currencySymbolChecker(props.calculatedItem.selectedCurrency)}
            </Text>
          </View>
        </View>
      </BlurView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#155e75",
    marginBottom: 10,
    elevation: 5,
    alignSelf: "center",
  },
  blurView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "#7dd3fc",
    justifyContent: "center",
  },
  profitValue: {
    marginLeft: 5,
    color: "white",
    fontSize: RFValue(15),
    letterSpacing: 0.6,
    fontWeight: "bold",
  },
});
