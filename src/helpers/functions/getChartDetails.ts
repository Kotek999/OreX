import { getChartScalePosition } from "./chartScalePosition";
import { getTrendInfo } from "./getTrendInfo";
import { ChartDetailsProps, TrendInfo } from "../../types";

export const getChartDetails = (props: ChartDetailsProps) => {
  const [{ yMin: yMin1, yMax: yMax1 }, { yMin: yMin2, yMax: yMax2 }] = [
    getChartScalePosition(props.chartData1),
    getChartScalePosition(props.chartData2),
  ];

  const trendInfoForChart1: TrendInfo = getTrendInfo(props.chartData1);
  const trendInfoForChart2: TrendInfo = getTrendInfo(props.chartData2);

  return { yMin1, yMax1, yMin2, yMax2, trendInfoForChart1, trendInfoForChart2 };
};
