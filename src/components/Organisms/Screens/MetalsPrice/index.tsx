import React from "react";
import { BottomModal } from "../../../Molecules/BottomModal";
import { FormContentScreens } from "../../FormContentScreens";
import { RenderMetalPriceScreen } from "../../RenderMetalPriceScreen";
import { JSX, MetalsPriceProps } from "../../../../types";

export const MetalsPrice = (props: MetalsPriceProps): JSX => {
  return (
    <>
      <FormContentScreens
        {...props}
        formModal={props.formModal}
        metalModal={props.metalModal}
        metalType={props.metalType}
      />
      <BottomModal
        ref={props.metalModal.bottomSheetModalRef}
        enableContentPanningGesture={false}
        snapPointsValue="100%"
        onPressCloseModal={props.metalModal.onPressCloseModal}
      >
        <RenderMetalPriceScreen {...props} metalModal={props.metalModal} />
      </BottomModal>
    </>
  );
};
