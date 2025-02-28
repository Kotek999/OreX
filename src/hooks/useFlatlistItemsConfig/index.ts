import { useState, useRef } from "react";
import { ViewToken } from "react-native";
import { onScrollHandler } from "../../helpers/functions/onScrollHandler";
import { useEndReachedData } from "../../hooks/useEndReachedData";
import { useRenderItem } from "../../hooks/useRenderItem";
import {
  SliderProps as UseFlatlistItemsConfigProps,
  ViewableItemsChangedProps,
  ItemVisiblePercentThresholdProp,
  ViewabilityConfigCallbackPairsProps,
  RenderItemProp,
  CurrentViewabilityConfigCallbackPairsProps,
  ScrollHandlerProp,
  FlatlistItemsConfigProps,
} from "../../types";

export const useFlatlistItemsConfig = (
  props: UseFlatlistItemsConfigProps
): FlatlistItemsConfigProps => {
  const [paginationIndex, setPaginationIndex] = useState<number>(0);

  const { data, onEndReached } = useEndReachedData({
    itemList: props.itemList,
  });

  const renderItem: RenderItemProp = useRenderItem({
    itemList: props.itemList,
    setSelectedIndex: props.setSelectedIndex,
    paginationIndex: paginationIndex,
    formModal: props.formModal,
  });

  const onScroll: ScrollHandlerProp = onScrollHandler();

  const onViewableItemsChanged: ViewableItemsChangedProps = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }): void => {
    if (
      viewableItems.length > 0 &&
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index % props.itemList.length);
    }
  };

  const viewabilityConfig: ItemVisiblePercentThresholdProp = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs: ViewabilityConfigCallbackPairsProps =
    useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  const currentViewabilityConfigCallbackPairs: CurrentViewabilityConfigCallbackPairsProps =
    viewabilityConfigCallbackPairs.current;

  return {
    paginationIndex,
    data,
    onEndReached,
    renderItem,
    onScroll,
    currentViewabilityConfigCallbackPairs,
  };
};
