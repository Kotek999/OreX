import React from "react";
import { Div as View } from "react-native-magnus";
import { MetalPriceHeader } from "../../Atoms/MetalPriceHeader";
import { NotAvailableData } from "../../Atoms/NotAvailableData";
import { MetalPriceContent } from "../../Molecules/MetalPriceContent";
import { JSX, RenderMetalPriceScreenProps } from "../../../types";

export const RenderMetalPriceScreen = (
  props: RenderMetalPriceScreenProps
): JSX => {
  return (
    <View alignItems="center">
      <MetalPriceHeader
        headerTitle={props.headerTitle}
        metalModal={props.metalModal}
      />
      <View flex={1} alignItems="center">
        {props.output ? <MetalPriceContent {...props} /> : <NotAvailableData />}
      </View>
    </View>
  );
};
