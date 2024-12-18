import { Fields } from "../../types";

export const validateFields = (
  fields: Fields,
  errorMessage: string
): boolean => {
  for (const { field, setError } of fields) {
    if (field === "") {
      setError(errorMessage);
      return false;
    } else {
      setError(null);
    }
  }
  return true;
};
