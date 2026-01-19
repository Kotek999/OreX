import { RFValue } from "react-native-responsive-fontsize";
import { TextAlign } from "../../types";

export const itemRowTextStyle = (flex: number, align: TextAlign) => ({
  flex,
  fontSize: RFValue(12),
  letterSpacing: 0.6,
  color: "#fafafa",
  textAlign: align,
});
