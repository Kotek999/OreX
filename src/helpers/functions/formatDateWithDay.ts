import { polishMonthsArray } from "../data/monthsData";

export const formatDateWithDay = (
  dateString: string,
  short: boolean = false
): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const month = short
    ? polishMonthsArray[monthIndex].short
    : polishMonthsArray[monthIndex].polish;

  return `${day} ${month} ${year}`;
};
