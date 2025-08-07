import { lineDataItem } from "react-native-gifted-charts";
import { TrendInfo } from "../../types";

export const getTrendInfo = (data?: lineDataItem[]): TrendInfo => {
  if (!data || data.length < 2) {
    return { changePercent: 0, direction: "neutral", color: "#94a3b8" };
  }

  const first: number = data.find((d) => d.value !== undefined)?.value ?? 0;
  const last: number =
    [...data].reverse().find((d) => d.value !== undefined)?.value ?? 0;

  if (first === 0 || last === 0) {
    return { changePercent: 0, direction: "neutral", color: "#94a3b8" };
  }

  const change: number = ((last - first) / first) * 100;
  const roundedChange: number = Math.round(change * 100) / 100;

  if (roundedChange > 0) {
    return {
      changePercent: roundedChange,
      direction: "up",
      color: "#4ade80",
    };
  } else if (roundedChange < 0) {
    return {
      changePercent: Math.abs(roundedChange),
      direction: "down",
      color: "#ef4444",
    };
  } else {
    return { changePercent: 0, direction: "neutral", color: "#94a3b8" };
  }
};
