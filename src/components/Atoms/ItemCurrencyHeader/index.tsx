import React from "react";
import { StyleSheet } from "react-native";
import { Text, Div as View } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { itemRowsData } from "../../../helpers/data/itemRowsData";
import { JSX } from "../../../types";

export const ItemCurrencyHeader = (): JSX => {
  return (
    <View mb={10}>
      <View
        w={screenWidth - 30}
        bg="#083344"
        rounded={12}
        mt={15}
        shadowColor="white"
        style={styles.header}
      >
        <View flexDir="row" alignItems="center">
          {itemRowsData.map((header, i) => (
            <Text
              key={i}
              style={{
                ...styles.value,
                flex: header.flex,
                textAlign: header.textAlign,
              }}
            >
              {header.name}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 15,
    elevation: 10,
    shadowColor: "white",
  },
  value: {
    fontSize: RFValue(12.5),
    color: "#7dd3fc",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
