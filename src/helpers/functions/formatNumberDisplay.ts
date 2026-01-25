export const formatNumberDisplay = (
  value: string,
  options?: { decimals?: number },
) => {
  if (!value) return "";

  const decimals: number = options?.decimals ?? 2;

  value = value.replace(".", ",");

  let [integer, decimal = ""] = value.split(",");

  integer = integer.replace(/\s+/g, "");
  integer = integer.replace(/[^0-9]/g, "");
  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  if (decimal.length === 0) {
    decimal = "0".repeat(decimals);
  } else {
    decimal = decimal.replace(/[^0-9]/g, "");
    if (decimal.length > decimals) decimal = decimal.slice(0, decimals);
    if (decimal.length < decimals) decimal = decimal.padEnd(decimals, "0");
  }

  return `${integer},${decimal}`;
};
