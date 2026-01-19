import React from "react";
import { Icon, Text, Div as View } from "react-native-magnus";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { itemMenuResultValuesData } from "../../../helpers/data/itemMenuResultValuesData";
import {
  JSX,
  ItemMenuResultValuesData,
  ItemMenuResultValuesProps,
} from "../../../types";

export const ItemMenuResultValues = (props: ItemMenuResultValuesProps): JSX => {
  const itemMenuResultValues: ItemMenuResultValuesData =
    itemMenuResultValuesData({ ...props });

  return (
    <View style={styles.container}>
      {itemMenuResultValues.map((result, i) => (
        <View key={i} style={styles.resultContainer}>
          <View flexDir="row">
            <Icon
              fontSize="xl"
              name={result.iconName}
              color={result.iconColor}
              fontFamily="MaterialCommunityIcons"
            />
            <Text style={styles.titleValue}>{result.title}</Text>
          </View>
          <Text style={styles.profitValue}>{result.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    gap: 14,
    justifyContent: "space-around",
    alignItems: "center",
  },
  resultContainer: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#083344",
    flexDirection: "column",
  },
  titleValue: {
    color: "#7dd3fc",
    marginLeft: 5,
    fontSize: RFValue(11),
    fontWeight: "500",
  },
  profitValue: {
    letterSpacing: 0.6,
    marginTop: 5,
    marginLeft: 5,
    color: "#fafafa",
    fontSize: RFValue(11.5),
    fontWeight: "500",
    textAlign: "center",
  },
});
