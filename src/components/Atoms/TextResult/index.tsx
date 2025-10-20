import { Text } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { JSX, TextMessageProps } from "../../../types";

export const TextResult = (props: TextMessageProps): JSX => {
  return (
    <Text
      fontSize={RFValue(16)}
      textTransform="uppercase"
      color={props.color}
      letterSpacing={0.5}
    >
      {props.children}
    </Text>
  );
};
