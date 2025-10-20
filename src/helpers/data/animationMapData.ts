import { withTiming, withSpring } from "react-native-reanimated";
import { AnimationType, AnimationConfig } from "../../types";

export const animationMapData: Record<AnimationType, AnimationConfig> = {
  fadeIn: {
    init: () => ({ opacity: 0 }),
    animate: (opacity) => {
      opacity.value = withTiming(1);
    },
  },
  slideUp: {
    init: () => ({ translateY: 20 }),
    animate: (_, translateY) => {
      translateY.value = withSpring(0);
    },
  },
  slideDown: {
    init: () => ({ translateY: -20 }),
    animate: (_, translateY) => {
      translateY.value = withSpring(0);
    },
  },
  scaleIn: {
    init: () => ({ scale: 0.8 }),
    animate: (_, __, scale) => {
      scale.value = withSpring(1);
    },
  },
  scaleUp: {
    init: () => ({ scale: 0.8 }),
    animate: (_, __, scale) => {
      scale.value = withSpring(1);
    },
  },
  fadeInUp: {
    init: () => ({ opacity: 0, translateY: 20 }),
    animate: (opacity, translateY) => {
      opacity.value = withTiming(1);
      translateY.value = withSpring(0);
    },
  },
};
