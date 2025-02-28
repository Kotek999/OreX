import { ChangeTextInputProps, TextInputOptionsProps } from "../../types";

export const changeTextInput: ChangeTextInputProps = (
  text,
  options?: TextInputOptionsProps
) => {
  const sanitizedText = text
    .replace(",", ".")
    .replace(/[^0-9.]/g, "")
    .replace(/^(\d*\.\d*)\.*$/, "$1");

  if (
    options?.name &&
    options.onChangeText &&
    options.inputs &&
    options.setInputs
  ) {
    options.onChangeText(options.name, sanitizedText, options.setInputs);
    options.setInputs({ ...options.inputs, [options.name]: sanitizedText });
  } else if (options?.setSingleInput) {
    options.setSingleInput(sanitizedText);
  }
};
