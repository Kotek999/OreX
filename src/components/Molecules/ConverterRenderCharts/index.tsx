import React from "react";
import { Div as View } from "react-native-magnus";
import { ConverterChart } from "../../Atoms/ConverterChart";
import { chartsData } from "../../../helpers/data/chartsData";
import { ConverterChartsHeader } from "../../Atoms/ConverterChartsHeader";
import { JSX, ConverterRenderChartsProps, ChartsData } from "../../../types";

export const ConverterRenderCharts = (
  props: ConverterRenderChartsProps
): JSX => {
  const charts: ChartsData = chartsData(props);

  return (
    <View flex={1} rounded={14} p={10}>
      <ConverterChartsHeader exchangeRates={props.exchangeRates} />
      {charts.map((item, index) => (
        <ConverterChart
          key={index}
          isOtherChart={item.isOtherChart}
          currencyName={item.currencyName}
          currency={item.currency}
          chartData1={props.chartData1}
          chartData2={props.chartData2}
          color={item.color}
        />
      ))}
    </View>
  );
};
