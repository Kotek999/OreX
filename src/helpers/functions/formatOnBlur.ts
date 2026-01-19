export const formatOnBlur = (value: string): string => {
  if (!value.trim()) return "";

  if (!value.includes(",")) {
    return value + ",00";
  }

  const [integer, decimal = ""] = value.split(",");

  if (decimal.length === 0) {
    return `${integer},00`;
  }

  if (decimal.length === 1) {
    return `${integer},${decimal}0`;
  }

  if (decimal.length === 2) {
    return `${integer},${decimal}`;
  }

  return `${integer},${decimal.slice(0, 2)}`;
};
