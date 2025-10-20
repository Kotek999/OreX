import { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  SharedValue,
} from "react-native-reanimated";
import { ViewStyle } from "react-native";
import { animationMapData } from "../../helpers/data/animationMapData";
import { AnimationType, AnimationConfig, Transforms } from "../../types";

export const useEntryAnimation = (
  animation: AnimationType = "fadeIn",
  delay: number = 0,
  duration: number = 500
) => {
  const animConfig: AnimationConfig = animationMapData[animation];

  const opacity: SharedValue<number> = useSharedValue(
    animConfig.init().opacity ?? 1
  );
  const translateY: SharedValue<number> = useSharedValue(
    animConfig.init().translateY ?? 0
  );
  const scale: SharedValue<number> = useSharedValue(
    animConfig.init().scale ?? 1
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      animConfig.animate(opacity, translateY, scale, duration);
    }, delay);
    return () => clearTimeout(timeout);
  }, [animation, delay, duration]);

  return useAnimatedStyle<ViewStyle>(() => {
    const style: ViewStyle = {};
    const transforms: Transforms = [];

    if (opacity.value !== undefined) style.opacity = opacity.value;
    if (translateY.value !== 0)
      transforms.push({ translateY: translateY.value });
    if (scale.value !== 1) transforms.push({ scale: scale.value });
    if (transforms.length > 0) style.transform = transforms as any;

    return style;
  });
};
