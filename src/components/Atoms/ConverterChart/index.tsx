import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Div as View, Text } from "react-native-magnus";
import { LineChart, lineDataItem } from "react-native-gifted-charts";
import { RFValue } from "react-native-responsive-fontsize";
import { screenWidth } from "../../../helpers/dimensions";
import { getChartDetails } from "../../../helpers/functions/getChartDetails";
import { pointerConfig } from "../../../helpers/functions/pointerConfig";
import { CurrencyChangePercent } from "../CurrencyChangePercent";
import { ConverterChartProps } from "../../../types";

export const ConverterChart = (props: ConverterChartProps) => {
  const { yMin1, yMax1, yMin2, yMax2, trendInfoForChart1, trendInfoForChart2 } =
    getChartDetails({
      chartData1: props.chartData1,
      chartData2: props.chartData2,
    });

  const yMinValue: number = props.isOtherChart ? yMin1 : yMin2;
  const yMaxValue: number = props.isOtherChart ? yMax1 : yMax2;

  const chartData: lineDataItem[] | undefined = props.isOtherChart
    ? props.chartData1
    : props.chartData2;

  return (
    <View
      flex={1}
      bg="#111827"
      rounded={14}
      p={14}
      alignSelf="center"
      w={screenWidth - 34}
      mt={20}
    >
      <View>
        <View flexDir="row" alignItems="center">
          <Text
            color="#e2e8f0"
            fontSize={RFValue(14)}
            fontWeight="600"
            letterSpacing={0.8}
          >
            {`${props.currencyName} (${props.currency})`}
          </Text>
          <View w={12} h={12} rounded={6} bg={props.color} ml={8} />
        </View>
        <CurrencyChangePercent
          isOtherChart={props.isOtherChart}
          trendInfoForChart1={trendInfoForChart1}
          trendInfoForChart2={trendInfoForChart2}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View alignSelf="center" flexDir="row" mt={26} pb={40}>
          <LineChart
            areaChart
            data={chartData}
            width={screenWidth}
            curved
            thickness={3}
            spacing={76}
            adjustToWidth
            height={200}
            maxValue={yMaxValue + yMinValue / 2}
            noOfSections={4}
            color1={props.color}
            color2={props.color}
            startOpacity={0.3}
            endOpacity={0.05}
            startFillColor={props.color}
            endFillColor="rgba(20,105,81,0.1)"
            yAxisColor="transparent"
            yAxisThickness={0}
            yAxisTextStyle={styles.xAxisTextStyle}
            xAxisColor="transparent"
            xAxisLabelTextStyle={styles.xAxisLabelTextStyle}
            hideRules
            initialSpacing={35}
            dataPointsColor="#6ee7b7"
            pointerConfig={pointerConfig}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  xAxisLabelTextStyle: {
    top: 20,
    transform: [{ rotate: "-25deg" }],
    textAlign: "left",
    color: "#94a3b8",
    fontSize: RFValue(10),
  },
  xAxisTextStyle: { color: "#94a3b8", fontSize: 12 },
});
