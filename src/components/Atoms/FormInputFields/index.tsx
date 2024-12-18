import React from "react";
import { Div as View } from "react-native-magnus";
import { InputField } from "../../Atoms/InputField";
import { ErrorMessage } from "../../Atoms/ErrorMessage";
import { inputsData } from "../../../helpers/data/inputsData";
import {
  JSX,
  FormInputFieldsProps,
  NullableString,
  InputsType,
  InputDataWithTextValuesProps,
} from "../../../types";
import { iconFontFamilyType } from "react-native-magnus/lib/typescript/src/ui/icon/icon.type";

export const FormInputFields = (props: FormInputFieldsProps): JSX => {
  const inputs: InputDataWithTextValuesProps = inputsData(props);

  return (
    <View>
      {inputs.map((input, i) => (
        <View key={i}>
          <InputField
            inputTitle={input.inputTitle}
            inputType={input.inputType as keyof InputsType}
            iconName={input.iconName}
            iconType={input.iconType as iconFontFamilyType | undefined}
            value={input.value}
            inputs={input.inputs}
            setInputs={input.setInputs}
            onChangeText={input.onChangeText}
            emptyGoldFieldError={input.emptyGoldFieldError as NullableString}
          />
          <ErrorMessage
            emptyFieldError={input.emptyFieldError as NullableString}
          />
        </View>
      ))}
    </View>
  );
};
