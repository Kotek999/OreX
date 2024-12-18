export const validateCondition = (
  condition: boolean,
  errorMessage: string
): void => {
  if (condition) throw new Error(errorMessage);
};
