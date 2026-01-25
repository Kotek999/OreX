import React from "react";
import { Icon } from "react-native-magnus";
import { ItemAddInputsData, ItemAddInputsProps } from "../../types";

export const itemAddInputsData: ItemAddInputsData = (
  props: ItemAddInputsProps,
) => [
  {
    flex: 0.5,
    fieldName: "Nazwa",
    placeholder: "...",
    keyboardType: "default",
    value: props.name,
    onChangeText: (text: string) => props.changeText("name", text),
    icon: <Icon name="pencil" fontFamily="Entypo" color="gray700" />,
  },
  {
    flex: 0.5,
    fieldName: "Ilość",
    placeholder: "0.00",
    keyboardType: "decimal-pad",
    value: props.amount,
    onChangeText: (text: string) => props.changeNumericAction("amount", text),
    icon: (
      <Icon
        name="sort-numeric-ascending-variant"
        fontFamily="MaterialCommunityIcons"
        color="gray700"
      />
    ),
  },
  {
    flex: 0.5,
    fieldName: "Waga",
    placeholder: "0.00",
    keyboardType: "decimal-pad",
    value: props.weight,
    onChangeText: (text: string) => props.changeNumericAction("weight", text),
    onBlur: () => props.setWeight(props.formatOnBlur(props.weight as string)),
    icon: (
      <Icon name="weight" fontFamily="MaterialCommunityIcons" color="gray700" />
    ),
  },
  {
    flex: 2.5,
    fieldName: "Cena",
    placeholder: "0.00",
    keyboardType: "decimal-pad",
    value: props.price,
    onChangeText: (text: string) => props.changeNumericAction("price", text),
    onBlur: () => props.setPrice(props.formatOnBlur(props.price as string)),
    icon: <Icon name="price-tag" fontFamily="Entypo" color="gray700" />,
  },
];
