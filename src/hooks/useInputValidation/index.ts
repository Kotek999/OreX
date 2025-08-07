import { useEffect, useCallback, useRef } from "react";
import {
  InputsType,
  InputValidationProps,
  NullableString,
  SetState,
  MutableRefProp,
} from "../../types";

export const useInputValidation = (props: InputValidationProps) => {
  const prevInputs: MutableRefProp<InputsType> = useRef(props.inputs);

  const currentInputOneRule: boolean =
    prevInputs.current.inputOne !== props.inputs.inputOne;
  const currentInputTwoRule: boolean =
    prevInputs.current.inputTwo !== props.inputs.inputTwo;
  const currentInputs: InputsType = (prevInputs.current = props.inputs);

  const emptyFieldError: SetState<NullableString> =
    props.setErrorMessages.setEmptyFieldError;
  const emptyPriceFieldError: SetState<NullableString> =
    props.setErrorMessages.setEmptyPriceFieldError;

  const handleInputValidation = useCallback(() => {
    if (props.inputs.inputOne !== "") {
      emptyFieldError(null);
    }
    if (props.inputs.inputTwo !== "") {
      emptyPriceFieldError(null);
    }
  }, [props.inputs, emptyFieldError, emptyPriceFieldError]);

  useEffect(() => {
    if (currentInputOneRule || currentInputTwoRule) {
      handleInputValidation();
      currentInputs;
    }
  }, [
    props.inputs,
    handleInputValidation,
    emptyFieldError,
    emptyPriceFieldError,
  ]);
};
