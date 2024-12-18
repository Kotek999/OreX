import { ChangeTextInputProps } from "../../types";

export const changeTextInput: ChangeTextInputProps = (
  val,
  name,
  onChangeText,
  inputs,
  setInputs
) => {
  const filteredText = val.replace(/[^0-9.,]/g, "");
  onChangeText(name, filteredText, setInputs);
  setInputs({ ...inputs, [name]: filteredText });
};
