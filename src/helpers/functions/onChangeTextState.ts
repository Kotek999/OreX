import { changeInputState } from "./changeInputState";
import { SetState, InputsType, InputStateActionProp } from "../../types";

export const onChangeTextState = (
  setInputType: SetState<InputsType>
): InputStateActionProp => {
  const inputState: InputStateActionProp = (
    name: keyof InputsType,
    text: string
  ) => changeInputState(name, text, setInputType);
  return inputState;
};
