import { ChangeInputStateProps } from "../../types";

export const changeInputState: ChangeInputStateProps = (
  name,
  text,
  setInputs
) => {
  setInputs((prevInputs) => ({
    ...prevInputs,
    [name]: text,
  }));
};
