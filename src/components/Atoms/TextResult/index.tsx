import { Text } from "react-native-magnus";
import { JSX, TextMessageProps } from "../../../types";

export const TextResult = (props: TextMessageProps): JSX => {
  return (
    <Text
      fontSize={20}
      textTransform="uppercase"
      color={props.color}
      letterSpacing={0.5}
    >
      {props.children}
    </Text>
  );
};
