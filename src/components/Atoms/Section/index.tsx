import React from "react";
import { Div as View } from "react-native-magnus";
import { OptionStyledText } from "../OptionStyledText";
import { OptionBoldText } from "../OptionBoldText";
import { SectionProps, JSX } from "../../../types";

export const Section = (props: SectionProps): JSX => (
  <View {...props}>
    <OptionBoldText color={props.color}>{props.title}</OptionBoldText>
    <OptionStyledText color="#f8fafc" mt="xs">
      {props.children}
    </OptionStyledText>
  </View>
);
