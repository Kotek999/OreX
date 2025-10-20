import { validateCondition } from "./validateCondition";
import { MonthsWithPolishNamesProp, MonthsData } from "../../types";

const dateError: string = "Nieprawidłowy format daty";

export const convertDate = (dateString: string): string => {
  try {
    validateCondition(!dateString || typeof dateString !== "string", "N/A");

    const match: RegExpMatchArray | null = dateString.match(
      /([a-zA-Z]+)\s+(\d+)(?:st|nd|rd|th)\s+(\d{4}),\s+(\d{2}):(\d{2}):(\d{2})\s+(am|pm)\s+(NY)/
    );
    validateCondition(!match, dateError);

    const [, monthStr, dayStr, yearStr, hourStr, minuteStr, secondStr] =
      match as RegExpMatchArray;

    const monthsWithPolishNames: MonthsWithPolishNamesProp = {
      Jan: { polish: "sty.", index: 0 },
      Feb: { polish: "lut.", index: 1 },
      Mar: { polish: "mar.", index: 2 },
      Apr: { polish: "kwi.", index: 3 },
      May: { polish: "maj", index: 4 },
      Jun: { polish: "cze.", index: 5 },
      Jul: { polish: "lip.", index: 6 },
      Aug: { polish: "sie.", index: 7 },
      Sep: { polish: "wrz.", index: 8 },
      Oct: { polish: "paź.", index: 9 },
      Nov: { polish: "lis.", index: 10 },
      Dec: { polish: "gru.", index: 11 },
    };

    const monthData: MonthsData = monthsWithPolishNames[monthStr];
    validateCondition(!monthData, dateError);

    const day: number = parseInt(dayStr, 10);
    const year: number = parseInt(yearStr, 10);
    let hours: number = parseInt(hourStr, 10);
    const minutes: number = parseInt(minuteStr, 10);
    const seconds: number = parseInt(secondStr, 10);

    const date: Date = new Date(
      Date.UTC(year, monthData.index, day, hours, minutes, seconds)
    );
    validateCondition(isNaN(date.getTime()), dateError);

    const polishDay: number = date.getUTCDate();
    const polishYear: number = date.getUTCFullYear();
    const polishHours: number = date.getUTCHours() % 12 || 12;
    const polishMinutes: string = date
      .getUTCMinutes()
      .toString()
      .padStart(2, "0");

    return `${polishDay} ${monthData.polish} ${polishYear} · ${polishHours}:${polishMinutes}`;
  } catch (error) {
    return (error as Error).message;
  }
};
