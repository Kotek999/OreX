import { useEffect, useCallback, useRef } from "react";
import { InputValidationProps, NullableString, SetState } from "../../types";

export const useInputValidation = (props: InputValidationProps) => {
  const prevInputs = useRef(props.inputs);

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
    if (
      prevInputs.current.inputOne !== props.inputs.inputOne ||
      prevInputs.current.inputTwo !== props.inputs.inputTwo
    ) {
      handleInputValidation();

      prevInputs.current = props.inputs;
    }
  }, [
    props.inputs,
    handleInputValidation,
    emptyFieldError,
    emptyPriceFieldError,
  ]);
};
