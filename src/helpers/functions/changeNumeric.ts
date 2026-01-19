import { ChangeNumericProps } from "../../types";

export const changeNumeric = (props: ChangeNumericProps): void => {
  let cleaned = props.text.replace(/[^0-9,]/g, "");

  if ((cleaned.match(/,/g) || []).length > 1) return;

  props.changeText(props.field, cleaned);
};
