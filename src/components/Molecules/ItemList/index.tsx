import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Text, Div as View } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { EditableItemRows } from "../EditableItemRows";
import { itemRowsData } from "../../../helpers/data/itemRowsData";
import { itemRowTextStyle } from "../../../helpers/functions/itemRowTextStyle";
import { JSX, ItemsListProps } from "../../../types";

export const ItemList = memo((props: ItemsListProps): JSX => {
  return (
    <View mt={10}>
      {props.items.map((item) => (
        <LinearGradient
          key={item.id}
          colors={["#075985", "#0e7490"]}
          start={{ x: 0.5, y: 1.2 }}
          end={{ x: 0.4, y: 0.2 }}
          style={styles.gradient}
        >
          <BlurView intensity={10} tint="light" style={styles.blurView}>
            {props.editingId === item.id ? (
              <EditableItemRows
                item={item}
                editingId={props.editingId}
                onSave={(updated) => props.saveItem(item.id, updated)}
                onDelete={() => props.deleteItem(item.id)}
              />
            ) : (
              <TouchableOpacity onPress={() => props.editStartItem(item)}>
                <View flexDir="row" alignItems="center">
                  {itemRowsData.map((row, i) => (
                    <Text
                      key={i}
                      style={itemRowTextStyle(row.flex, row.textAlign)}
                    >
                      {row.render(item)}
                    </Text>
                  ))}
                </View>
              </TouchableOpacity>
            )}
          </BlurView>
        </LinearGradient>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  gradient: {
    width: screenWidth - 30,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#155e75",
    marginBottom: 10,
    elevation: 5,
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
});
