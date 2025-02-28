import React from "react";
import Animated from "react-native-reanimated";
import { Div as View } from "react-native-magnus";
import { JSX, PaginationItemProps } from "../../../types";

export const PaginationItem = (props: PaginationItemProps): JSX => {
  return (
    <View flexDir="row" h={60} justifyContent="center" alignItems="center">
      {props.items.map((_, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              {
                backgroundColor:
                  props.paginationIndex === index ? "#10b981" : "#aaa",
                height: 8,
                width: 8,
                marginHorizontal: 2,
                borderRadius: 8,
              },
            ]}
          />
        );
      })}
    </View>
  );
};
