import React from "react";
import { Div as View, Text, Input, Icon } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { changeTextInput } from "../../../helpers/functions/changeTextInput";
import { JSX, InputFieldProps, NullableString } from "../../../types";

export const InputField = (props: InputFieldProps): JSX => {
  const onChangeTextInputState = (text: string) => {
    const inputState = changeTextInput(text, {
      name: props.inputType,
      onChangeText: props.onChangeText,
      inputs: props.inputs,
      setInputs: props.setInputs,
    });
    return inputState;
  };

  const emptyFieldError: NullableString = props.emptyGoldFieldError;

  return (
    <View mt={14} flexDir="column" alignSelf="center">
      <Text
        mb={14}
        letterSpacing={0.8}
        fontSize={16}
        fontWeight="bold"
        color="#f8fafc"
      >
        {props.inputTitle}
      </Text>
      <View w={screenWidth / 1.5} flexDir="row">
        <Input
          flex={6}
          h={50}
          borderColor={emptyFieldError ? "#f87171" : "transparent"}
          borderWidth={emptyFieldError ? 2 : 0}
          bg="#cffafe"
          placeholder="0.00"
          focusBorderColor="blue700"
          keyboardType="numeric"
          suffix={
            <Icon
              name={props.iconName}
              color="gray700"
              fontFamily={props.iconType}
            />
          }
          value={props.value}
          onChangeText={(text) => onChangeTextInputState(text)}
        />
      </View>
    </View>
  );
};
