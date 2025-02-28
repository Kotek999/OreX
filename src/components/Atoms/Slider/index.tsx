import React from "react";
import { Div as View } from "react-native-magnus";
import Animated from "react-native-reanimated";
import { PaginationItem } from "../../../components/Atoms/PaginationItem";
import { useFlatlistItemsConfig } from "../../../hooks/useFlatlistItemsConfig";
import { JSX, SliderProps } from "../../../types";

export const Slider = (props: SliderProps): JSX => {
  const {
    data,
    renderItem,
    onScroll,
    currentViewabilityConfigCallbackPairs,
    onEndReached,
    paginationIndex,
  } = useFlatlistItemsConfig({ ...props });

  return (
    <View>
      <Animated.FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={currentViewabilityConfigCallbackPairs}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
      <PaginationItem
        items={props.itemList}
        paginationIndex={paginationIndex}
      />
    </View>
  );
};
