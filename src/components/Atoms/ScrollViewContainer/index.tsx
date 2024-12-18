import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { screenWidth } from "../../../helpers/dimensions";
import { JSX, ChildProps } from "../../../types";

export const ScrollViewContainer = (props: ChildProps): JSX => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flexGrow: 1,
    justifyContent: "space-around",
    width: screenWidth,
    alignItems: "center",
    alignContent: "center",
  },
});
