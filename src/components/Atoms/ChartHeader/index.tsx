import React from "react";
import { Div as View } from "react-native-magnus";
import { TextMessage600 } from "../../../components/Atoms/TextMessage600";
import { ChartHeaderProps } from "../../../types";

export const ChartHeader = (props: ChartHeaderProps) => {
  return (
    <View w={props.w}>
      <TextMessage600 color="#e2e8f0" fontWeight="600">
        {props.title}
      </TextMessage600>
      <TextMessage600 color="#cbd5e1" fontWeight="600">
        {props.subtitle}
      </TextMessage600>
    </View>
  );
};
