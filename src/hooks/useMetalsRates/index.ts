import { useState } from "react";
import {
  metalOutputData,
  inputsState,
} from "../../helpers/data/metalsStateData";
import { onChangeTextState } from "../../helpers/functions/onChangeTextState";
import { valueOfEUR } from "../../helpers/data/currencyData";
import { useBottomModal } from "../useBottomModal";
import {
  ModalProps,
  InputsType,
  OptionalMetalType,
  MetalsPriceProps,
  MetalRatesProps,
} from "../../types";

export const useMetalRates = (
  props: MetalRatesProps
): {
  metalsRatesData: MetalsPriceProps[];
} => {
  const metalModalOne: ModalProps = useBottomModal();
  const metalModalTwo: ModalProps = useBottomModal();

  const [outputGold, setOutputGold] =
    useState<Record<string, OptionalMetalType>>(metalOutputData);

  const [outputSilver, setOutputSilver] =
    useState<Record<string, OptionalMetalType>>(metalOutputData);

  const [loadingGold, setLoadingGold] = useState<boolean>(false);

  const [inputsGold, setInputsGold] = useState<InputsType>(inputsState);
  const [inputsSilver, setInputsSilver] = useState<InputsType>(inputsState);

  const [loadingSilver, setLoadingSilver] = useState<boolean>(false);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] =
    useState<string>(valueOfEUR);
  const [selectedCurrencyTo, setSelectedCurrencyTo] =
    useState<string>(valueOfEUR);

  const metalsPriceData = {
    apiDate: props.metalRates.apiDate,
    marketRate: props.metalRates.marketRate,
    selectedCurrencyFrom: selectedCurrencyFrom,
    setSelectedCurrencyFrom: setSelectedCurrencyFrom,
    selectedCurrencyTo: selectedCurrencyTo,
    setSelectedCurrencyTo: setSelectedCurrencyTo,
    rates: props.metalRates.rates,
    formModal: props.formModal,
  };

  const metalsRatesData: MetalsPriceProps[] = [
    {
      id: 1,
      metalType: "gold",
      headerTitle: "Złoto",
      loading: loadingGold,
      setLoading: setLoadingGold,
      output: outputGold,
      setOutput: setOutputGold,
      inputs: inputsGold,
      setInputs: setInputsGold,
      onChangeText: onChangeTextState(setInputsGold),
      metalModal: metalModalOne,
      ...metalsPriceData,
    },
    {
      id: 2,
      metalType: "silver",
      headerTitle: "Srebro",
      loading: loadingSilver,
      setLoading: setLoadingSilver,
      output: outputSilver,
      setOutput: setOutputSilver,
      inputs: inputsSilver,
      setInputs: setInputsSilver,
      onChangeText: onChangeTextState(setInputsSilver),
      metalModal: metalModalTwo,
      ...metalsPriceData,
    },
  ];
  return {
    metalsRatesData,
  };
};
