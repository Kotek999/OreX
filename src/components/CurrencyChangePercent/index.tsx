import React from "react";
import { Div as View, Text, Icon } from "react-native-magnus";
import {
  TrendInfo,
  CurrencyChangePercentProps,
  TrendDirection,
  IconDirection,
} from "../../types";

export const CurrencyChangePercent = (props: CurrencyChangePercentProps) => {
  const trendInfoForChart: TrendInfo = props.isOtherChart
    ? props.trendInfoForChart1
    : props.trendInfoForChart2;

  const trendDirection: TrendDirection = trendInfoForChart.direction;

  const iconName: IconDirection =
    trendDirection === "up"
      ? "arrow-up"
      : trendDirection === "down"
      ? "arrow-down"
      : "minus";

  return (
    <View mt={3} mb={3} flexDir="row" alignItems="center">
      <Icon
        name={iconName}
        color={trendInfoForChart.color}
        fontSize={13}
        fontFamily="Feather"
        mr={6}
      />
      <Text
        color={trendInfoForChart.color}
        letterSpacing={0.7}
        fontWeight="bold"
        fontSize={13}
      >
        {`${trendInfoForChart.changePercent.toFixed(2).replace(".", ",")}%`}
      </Text>
    </View>
  );
};
