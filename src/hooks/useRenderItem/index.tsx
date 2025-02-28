import React from "react";
import { SliderItem } from "../../components/Atoms/SliderItem";
import { JSX, ImageSliderData, UseRenderItemProps } from "../../types";

export const useRenderItem = (props: UseRenderItemProps) => {
  const onPressSelectIndex = (buttonId: number): void => {
    props.setSelectedIndex(buttonId);
    props.formModal.onPressOpenModal(buttonId);
  };

  const renderItem = ({ item }: { item: ImageSliderData }): JSX => {
    return (
      <SliderItem
        onPressSelectIndex={onPressSelectIndex}
        item={item}
        paginationIndex={props.paginationIndex}
      />
    );
  };

  return renderItem;
};
