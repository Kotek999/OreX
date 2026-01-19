import React from "react";
import { FormHeader } from "../../Atoms/FormHeader";
import { screenWidth } from "../../../helpers/dimensions";
import { BottomModal } from "../../Molecules/BottomModal";
import { useBottomModal } from "../../../hooks/useBottomModal";
import { Platform, UIManager } from "react-native";
import { useItemBottomCardAnimation } from "../../../hooks/useItemBottomCardAnimation";
import { useItemActions } from "../../../hooks/useItemActions";
import { useCalculatedItemValues } from "../../../hooks/useCalculatedItemValues";
import { useLocalStorageItems } from "../../../hooks/useLocalStorageItems";
import { ItemCurrencyPicker } from "../../Atoms/ItemCurrencyPicker";
import { ItemPickedCurrencyWithRate } from "../../Atoms/ItemPickedCurrencyWithRate";
import { ItemCurrencyHeaderWithAddedItems } from "../../Atoms/ItemCurrencyHeaderWithAddedItems";
import { ItemAddMenu } from "../../Molecules/ItemAddMenu";
import { ItemAddForm } from "../../Molecules/ItemAddForm";
import { AnimatedElement } from "../../Atoms/AnimatedElement";
import { JSX, ModalProps, ItemSheetScreenProps } from "../../../types";

export const RenderItemSheetScreen = (props: ItemSheetScreenProps): JSX => {
  const addItemModal: ModalProps = useBottomModal();

  const headerTitle: string = `Arkusz - ${
    props.metalType === "gold" ? "Złoto" : "Srebro"
  }`;

  const {
    items,
    setItems,
    editingId,
    addItem,
    saveItem,
    editStartItem,
    deleteItem,
  } = useItemActions();

  useLocalStorageItems({
    metalType: props.metalType,
    setItems: setItems,
    items: items,
  });

  const { scrollHandler, animatedStyle } = useItemBottomCardAnimation();

  const calculatedItem = useCalculatedItemValues({
    items: items,
    rates: props.rates,
    metalType: props.metalType,
  });

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <BottomModal
      styles={{ flex: 3, position: "absolute" }}
      ref={props.sheetModal.bottomSheetModalRef}
      enableContentPanningGesture={false}
      snapPointsValue="100%"
      onPressCloseModal={props.sheetModal.onPressCloseModal}
    >
      <AnimatedElement as="View" animation="slideUp" duration={2000}>
        <FormHeader
          w={screenWidth - 50}
          headerTitle={headerTitle}
          formModal={props.sheetModal}
        />
      </AnimatedElement>
      <AnimatedElement alignItems="center" as="View" animation="fadeIn">
        <ItemCurrencyPicker calculatedItem={calculatedItem} />
        <ItemPickedCurrencyWithRate
          calculatedItem={calculatedItem}
          metalType={props.metalType}
          rates={props.rates}
        />
      </AnimatedElement>

      <ItemCurrencyHeaderWithAddedItems
        scrollHandler={scrollHandler}
        items={items}
        editingId={editingId}
        saveItem={saveItem}
        editStartItem={editStartItem}
        deleteItem={deleteItem}
      />

      <ItemAddMenu
        editingId={editingId}
        animatedStyle={animatedStyle}
        addItemModal={addItemModal}
        calculatedItem={calculatedItem}
        metalType={props.metalType}
      />

      <BottomModal
        styles={{ flex: 3, position: "absolute" }}
        ref={addItemModal.bottomSheetModalRef}
        enableContentPanningGesture={false}
        snapPointsValue="100%"
        onPressCloseModal={addItemModal.onPressCloseModal}
      >
        <ItemAddForm
          addItemModal={addItemModal}
          items={items}
          addItem={addItem}
        />
      </BottomModal>
    </BottomModal>
  );
};
