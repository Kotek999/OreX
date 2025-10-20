import { polishMonthsArray } from "../data/monthsData";

export const formatDateLabel = (
  daysAgo: number,
  short: boolean = false
): string => {
  const today = new Date();
  const date = new Date();
  date.setDate(today.getDate() - daysAgo);

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const month = short
    ? polishMonthsArray[monthIndex].short
    : polishMonthsArray[monthIndex].polish;

  const includeYear = year !== today.getFullYear();

  return `${day} ${month}${includeYear ? ` ${year}` : ""}`;
};
