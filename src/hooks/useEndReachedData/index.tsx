import { useState } from "react";
import {
  ImageSliderData,
  UseEndReachedDataProps,
  EndReachedDataProps,
  OnPress,
} from "../../types";

export const useEndReachedData = (
  props: UseEndReachedDataProps
): EndReachedDataProps => {
  const [data, setData] = useState<ImageSliderData[]>(props.itemList);

  const onEndReached: OnPress = () => setData([...data, ...props.itemList]);

  return { data, onEndReached };
};
