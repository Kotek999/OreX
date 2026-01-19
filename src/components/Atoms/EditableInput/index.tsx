import React, { memo } from "react";
import { Icon, Input, Div as View } from "react-native-magnus";
import { screenHeight } from "../../../helpers/dimensions";
import { EditableInputProps, JSX } from "../../../types";

export const EditableInput = memo((props: EditableInputProps): JSX => {
  const minWidth: number = 80;
  const maxWidth: number = 160;
  const charWidth: number = 10;

  const inputWidth: number = Math.min(
    maxWidth,
    Math.max(minWidth, (props.value?.length || 0) * charWidth + 40)
  );
  return (
    <View style={{ width: inputWidth, flexDirection: "row" }}>
      <Input
        flex={6}
        h={screenHeight / 18}
        bg="#cffafe"
        placeholder="..."
        focusBorderColor="blue700"
        value={props.value}
        onChangeText={props.onChange}
        onBlur={props.onBlur}
        multiline={false}
        suffix={<Icon name="pencil" fontFamily="Entypo" color="gray500" />}
        style={{ textAlignVertical: "center" }}
      />
    </View>
  );
});
