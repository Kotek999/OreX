import React from "react";
import Animated from "react-native-reanimated";
import { Div as View } from "react-native-magnus";
import { StyleSheet } from "react-native";
import { ItemAddButton } from "../../Atoms/ItemAddButton";
import { ItemMenuResultValues } from "../../Atoms/ItemMenuResultValues";
import { ItemMenuProfitValue } from "../../Atoms/ItemMenuProfitValue";
import { JSX, ItemAddMenuProps } from "../../../types";

export const ItemAddMenu = (props: ItemAddMenuProps): JSX => {
  const mainView = [
    {
      ...styles.animatedMainView,
    },
    props.animatedStyle,
  ];

  return (
    <>
      {props.editingId === null && (
        <Animated.View style={mainView}>
          <ItemAddButton addItemModal={props.addItemModal} />
          <View style={{ flex: 1 }}>
            <ItemMenuResultValues {...props} />
            <ItemMenuProfitValue calculatedItem={props.calculatedItem} />
          </View>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  animatedMainView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#155e75",
    paddingTop: 28,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    elevation: 10,
    alignItems: "center",
  },
});
