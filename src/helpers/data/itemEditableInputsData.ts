import { EditableItemInputsDataProps } from "../../types";

export const itemEditableInputsData = (props: EditableItemInputsDataProps) => [
  {
    value: props.name,
    onChange: (t: string) => props.changeText("name", t),
  },
  {
    value: props.amount,
    onChange: (t: string) => props.changeText("amount", t),
  },
  {
    value: props.weight,
    onChange: (t: string) => props.changeNumericAction("weight", t),
    onBlur: () => props.setWeight(props.formatOnBlur(props.weight as string)),
  },
  {
    value: props.price,
    onChange: (t: string) => props.changeNumericAction("price", t),
    onBlur: () => props.setPrice(props.formatOnBlur(props.price as string)),
  },
];
