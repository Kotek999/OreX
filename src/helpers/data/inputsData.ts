import { InputDataProps, InputDataWithTextValuesProps } from "../../types";

export const inputsData = (
  props: InputDataProps
): InputDataWithTextValuesProps => [
  {
    inputTitle: "Ilość (gramy)",
    inputType: "inputOne",
    iconName: "gold",
    iconType: "MaterialCommunityIcons",
    value: props.valueOne,
    inputs: props.inputs,
    setInputs: props.setInputs,
    onChangeText: props.onChangeText,
    emptyMetalFieldError: props.emptyMetalFieldError,
    emptyFieldError: props.emptyMetalFieldError,
  },
  {
    inputTitle: "Cena zakupu",
    inputType: "inputTwo",
    iconName: "price-tag",
    iconType: "Entypo",
    value: props.valueTwo,
    inputs: props.inputs,
    setInputs: props.setInputs,
    onChangeText: props.onChangeText,
    emptyMetalFieldError: props.emptyPriceMetalFieldError,
    emptyFieldError: props.emptyPriceMetalFieldError,
  },
];
