import { useState } from "react";
import { NullableString, Currency, RateEntry } from "../../types";
import { validateFields } from "../../helpers/functions/validateFields";
import { changeTextInput } from "../../helpers/functions/changeTextInput";
import { ConvertValuesProps, OnPress } from "../../types";

export const useConvertValues = (props: ConvertValuesProps) => {
  const [inputAmount, setInputAmount] = useState<string>("");
  const [convertedAmount, setConvertedAmount] = useState<string>("");

  const [convertedValues, setConvertedValues] = useState<
    Record<string, number>
  >({});

  const [emptyFieldError, setEmptyFieldError] = useState<NullableString>(null);

  const targetCurrency: Currency = props.targetCurrency;

  const ratesForBase: Record<string, RateEntry> | null =
    props.exchangeRates?.[targetCurrency] ?? null;

  const onPressConvert: OnPress = () => {
    if (
      !validateFields(
        { field: inputAmount, setError: setEmptyFieldError },
        "To pole jest wymagane!",
        "To pole nie może zawierać liczby 0!"
      )
    )
      return;
    setConvertedAmount(inputAmount);

    if (!ratesForBase) return;

    const amount: number = parseFloat(inputAmount);
    if (isNaN(amount)) return;

    const converted: Record<string, number> = {};

    Object.entries(ratesForBase).forEach(([targetCurrency, entry]) => {
      converted[targetCurrency] = amount / entry.rates.targetCurrency;
    });

    setConvertedValues(converted);
  };

  const onChangeTextInputState = (text: string) => {
    const inputState: void = changeTextInput(text, {
      setSingleInput: setInputAmount,
    });
    return inputState;
  };

  return {
    inputAmount,
    convertedAmount,
    convertedValues,
    emptyFieldError,
    onPressConvert,
    onChangeTextInputState,
    ratesForBase,
    hasData: !!ratesForBase,
  };
};
