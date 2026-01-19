import {
  ItemMenuResultValuesDataProps,
  ItemMenuResultValuesData,
} from "../../types";

export const itemMenuResultValuesData = (
  props: ItemMenuResultValuesDataProps
): ItemMenuResultValuesData => [
  {
    title: "GRAM",
    value: props.calculatedItem.totalWeight,
    iconColor: "#c4b5fd",
    iconName: "weight",
  },
  {
    title: props.calculatedItem.selectedCurrency,
    value: props.calculatedItem.realPrice,
    iconColor: props.metalType === "gold" ? "yellow" : "lightgray",
    iconName: "gold",
  },
  {
    title: props.calculatedItem.selectedCurrency,
    value: props.calculatedItem.totalPrice,
    iconColor: "#99f6e4",
    iconName: "calculator-variant",
  },
];
