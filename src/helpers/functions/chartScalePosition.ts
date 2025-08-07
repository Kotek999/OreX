import { lineDataItem } from "react-native-gifted-charts";
import { ChartScalePositionProps } from "../../types";

export const getChartScalePosition = (
  data?: lineDataItem[]
): ChartScalePositionProps => {
  if (!data || data.length === 0) return { yMin: 0, yMax: 1 };

  const values: number[] = data
    .map((d) => d.value)
    .filter((v): v is number => v !== undefined);

  const min: number = Math.min(...values);
  const max: number = Math.max(...values);

  const margin: number = (max - min) * 0.1 || 0.01;
  return {
    yMin: Math.floor((min - margin) * 1000) / 1000,
    yMax: Math.ceil((max + margin) * 1000) / 1000,
  };
};
