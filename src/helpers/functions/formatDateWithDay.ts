export const formatDateWithDay = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
  };

  return date.toLocaleDateString("pl-PL", options);
};
