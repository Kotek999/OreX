import {
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ItemBottomCardAnimationProps } from "../../types";

export const useItemBottomCardAnimation = (): ItemBottomCardAnimationProps => {
  const translateY: SharedValue<number> = useSharedValue(0);
  const lastOffset: SharedValue<number> = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      const currentY = event.contentOffset.y;
      if (currentY > lastOffset.value + 10) {
        translateY.value = withTiming(100, { duration: 300 });
      } else if (currentY < lastOffset.value - 10) {
        translateY.value = withTiming(0, { duration: 300 });
      }
      lastOffset.value = currentY;
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: interpolate(translateY.value, [0, 100], [1, 0.3]),
    shadowOpacity: interpolate(translateY.value, [0, 100], [0.25, 0]),
  }));

  return { scrollHandler, animatedStyle };
};
