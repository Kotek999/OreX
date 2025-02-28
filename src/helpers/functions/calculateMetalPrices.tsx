import { Text } from "react-native-magnus";
import { validateFields } from "./validateFields";
import { calculatePrices } from "./calculatePrices";
import {
  CalculateMetalPricesProps,
  InputsType,
  JSX,
  MetalRates,
  OutputProp,
  Field,
} from "../../types";

export const calculateMetalPrices = (
  props: CalculateMetalPricesProps<InputsType>
): JSX | undefined => {
  const emptyErrorMessage: string = "To pole jest wymagane!";
  const zeroErrorMessage: string = "To pole nie może zawierać liczby 0!";

  const fields: Field[] = [
    {
      field: props.inputs.inputOne,
      setError: props.setErrorMessages.setEmptyFieldError,
    },
    {
      field: props.inputs.inputTwo,
      setError: props.setErrorMessages.setEmptyPriceFieldError,
    },
  ];

  if (!validateFields(fields, emptyErrorMessage, zeroErrorMessage)) return;

  props.metalModal.onPressOpenModal(0);

  if (!props.rates) {
    return (
      <Text
        color={props.metalType === "gold" ? "gold" : "silver"}
        fontSize={16}
        mt={5}
      >
        Brak danych do wyświetlenia
      </Text>
    );
  }

  const amount: number = parseFloat(props.inputs.inputOne);
  if (isNaN(amount)) return;

  const output: OutputProp = {};

  for (const currency in props.rates) {
    const rate: MetalRates =
      props.metalType === "gold"
        ? props.rates[currency].gold_rates
        : props.rates[currency].silver_rates;

    output[currency] = {
      gold: calculatePrices(rate, amount),
      silver: calculatePrices(rate, amount),
    };
  }

  props.setLoading(true);
  props.setOutput(output);
  props.setLoading(false);
};
