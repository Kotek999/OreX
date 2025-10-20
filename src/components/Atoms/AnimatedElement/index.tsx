import React from "react";
import { Text as RNText, Div as RNView } from "react-native-magnus";
import Animated from "react-native-reanimated";
import { ViewStyle } from "react-native";
import { useEntryAnimation } from "../../../hooks/useEntryAnimation";
import { AnimatedElementProps } from "../../../types";

export const AnimatedElement = (props: AnimatedElementProps) => {
  const {
    as,
    children,
    animation = "fadeIn",
    delay = 0,
    duration = 500,
    style,
    ...rest
  } = props;
  const animatedStyle: ViewStyle = useEntryAnimation(
    animation,
    delay,
    duration
  );

  return (
    <Animated.View style={[style, animatedStyle]}>
      {as === "Text" ? (
        <RNText textAlign="center" {...rest}>
          {children}
        </RNText>
      ) : (
        <RNView {...rest}>{children}</RNView>
      )}
    </Animated.View>
  );
};
