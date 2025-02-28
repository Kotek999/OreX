import { Fields } from "../../types";

export const validateFields = (
  fields: Fields,
  emptyMsg: string,
  zeroMsg: string
): boolean => {
  return (Array.isArray(fields) ? fields : [fields]).every(
    ({ field, setError }) => {
      const error =
        field.trim() === ""
          ? emptyMsg
          : parseFloat(field) === 0
          ? zeroMsg
          : null;
      setError(error);
      return !error;
    }
  );
};
