import React from "react";
import Animated from "react-native-reanimated";
import { StyleSheet } from "react-native";
import { Text, Div as View } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { ItemList } from "../../components/Molecules/ItemList";
import { JSX, ItemsListProps } from "../../types";

export const renderItemsList = (props: ItemsListProps): JSX => {
  if (props.items.length === 0) {
    return (
      <View alignItems="center" justifyContent="flex-end" mt={80}>
        <Text
          color="#f8fafc"
          fontSize={RFValue(15)}
          textAlign="center"
          letterSpacing={0.5}
          fontWeight="500"
        >
          Brak dodanych pozycji.
        </Text>
      </View>
    );
  }

  return (
    <Animated.ScrollView
      onScroll={props.scrollHandler}
      scrollEventThrottle={16}
      contentContainerStyle={styles.scrollView}
      showsVerticalScrollIndicator={false}
    >
      <ItemList
        scrollHandler={props.scrollHandler}
        items={props.items}
        editingId={props.editingId}
        saveItem={props.saveItem}
        deleteItem={props.deleteItem}
        editStartItem={props.editStartItem}
      />
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 0,
    paddingBottom: 80,
  },
});
