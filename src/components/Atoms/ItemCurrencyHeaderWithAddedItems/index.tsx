import React from "react";
import Animated from "react-native-reanimated";
import { Div as View } from "react-native-magnus";
import { renderItemsList } from "../../../helpers/functions/renderItemsList";
import { ItemCurrencyHeader } from "../../Atoms/ItemCurrencyHeader";
import { AnimatedElement } from "../AnimatedElement";
import { JSX, ItemCurrencyHeaderWithAddedItemsProps } from "../../../types";

export const ItemCurrencyHeaderWithAddedItems = (
  props: ItemCurrencyHeaderWithAddedItemsProps
) => {
  const AddedItems = (): JSX =>
    renderItemsList({
      scrollHandler: props.scrollHandler,
      items: props.items,
      editingId: props.editingId,
      saveItem: props.saveItem,
      editStartItem: props.editStartItem,
      deleteItem: props.deleteItem,
    });

  return (
    <View flex={1} alignItems="center" justifyContent="flex-start">
      <AnimatedElement alignItems="center" as="View" animation="fadeInUp">
        <ItemCurrencyHeader />
        <Animated.ScrollView
          onScroll={props.scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{
            padding: 0,
            paddingBottom: 80,
          }}
          showsVerticalScrollIndicator={false}
        >
          <AddedItems />
        </Animated.ScrollView>
      </AnimatedElement>
    </View>
  );
};
