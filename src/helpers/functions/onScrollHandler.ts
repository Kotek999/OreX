import {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { ScrollHandlerProp } from "../../types";

export const onScrollHandler = (): ScrollHandlerProp => {
  const scrollX: SharedValue<number> = useSharedValue(0);

  const scroll: ScrollHandlerProp = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return scroll;
};
