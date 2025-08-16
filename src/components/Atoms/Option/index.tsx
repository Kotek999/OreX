import React from "react";
import { Div as View, Icon, Collapse } from "react-native-magnus";
import { screenHeight, screenWidth } from "../../../helpers/dimensions";
import { OptionProps, JSX } from "../../../types";

export const Option = (props: OptionProps): JSX => {
  const minHeight: number = screenHeight * 0.13;

  return (
    <Collapse
      mt={10}
      mb={15}
      w={screenWidth - 50}
      overflow="hidden"
      borderWidth={2}
      rounded="lg"
      borderColor="#475569"
    >
      <Collapse.Header
        active
        color="#f8fafc"
        fontSize="lg"
        fontWeight="bold"
        px="lg"
        py="lg"
        bg="#334155"
        prefix={
          <Icon
            fontFamily={props.fontFamily}
            name={props.iconName}
            mr="md"
            color={props.iconColor}
          />
        }
      >
        {props.headerTitle}
      </Collapse.Header>
      <Collapse.Body p="lg" bg="#111827">
        <View style={{ minHeight: minHeight }}>{props.children}</View>
      </Collapse.Body>
    </Collapse>
  );
};
