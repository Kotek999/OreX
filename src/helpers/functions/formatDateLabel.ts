export const formatDateLabel = (daysAgo: number): string => {
  const today: Date = new Date();
  const date: Date = new Date();
  date.setDate(today.getDate() - daysAgo);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
  };

  if (date.getFullYear() !== today.getFullYear()) {
    options.year = "numeric";
  }

  return date.toLocaleDateString("pl-PL", options);
};
