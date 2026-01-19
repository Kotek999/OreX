import React from "react";
import { Div as View } from "react-native-magnus";
import { useBottomModal } from "../../../hooks/useBottomModal";
import { RenderMetalScreen } from "../RenderMetalScreen";
import { RenderItemSheetScreen } from "../RenderItemSheetScreen";
import { JSX, FormContentProps, ModalProps } from "../../../types";

export const FormContentScreens = (props: FormContentProps): JSX => {
  const sheetModal: ModalProps = useBottomModal();

  return (
    <View alignItems="center" justifyContent="center">
      <RenderMetalScreen sheetModal={sheetModal} {...props} />
      <RenderItemSheetScreen
        sheetModal={sheetModal}
        metalType={props.metalType}
        rates={props.rates}
      />
    </View>
  );
};
