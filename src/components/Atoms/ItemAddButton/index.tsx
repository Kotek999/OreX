import React from "react";
import { Icon } from "react-native-magnus";
import { StyleSheet, TouchableOpacity } from "react-native";
import { JSX, ItemAddButtonProps } from "../../../types";

export const ItemAddButton = (props: ItemAddButtonProps): JSX => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.addItemModal.onPressOpenModal();
      }}
      style={styles.addButton}
    >
      <Icon name="plus" fontFamily="Entypo" color="#f8fafc" fontSize={26} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    position: "absolute",
    top: -24,
    backgroundColor: "#10b981",
    width: 44,
    height: 44,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
