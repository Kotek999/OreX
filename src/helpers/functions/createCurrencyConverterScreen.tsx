import React from "react";
import { Div as View } from "react-native-magnus";
import { CurrencyConverter } from "../../components/Organisms/CurrencyConverter";
import {
  JSX,
  CurrencyConverterScreenProps,
  CurrencyConverterModalProps,
} from "../../types";

export const renderCurrencyConverterModal = ({
  formModal,
  exchangeRates,
  loadingScreenData,
  error,
  trends,
}: CurrencyConverterModalProps) => {
  const createCurrencyConverterScreen = (
    props: CurrencyConverterScreenProps
  ): JSX => {
    return (
      <View>
        <CurrencyConverter
          formModal={formModal}
          exchangeRates={exchangeRates}
          loadingScreenData={loadingScreenData}
          error={error}
          trends={trends}
          {...props}
        />
      </View>
    );
  };

  return {
    createCurrencyConverterScreen,
  };
};
