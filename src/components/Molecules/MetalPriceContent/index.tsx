import React from "react";
import { Div as View } from "react-native-magnus";
import { SelectedCurrenciesWithDate } from "../../Atoms/SelectedCurrenciesWithDate";
import { InputsInformationValues } from "../../Atoms/InputsInformationValues";
import { ProfitOrLossResult } from "../../Atoms/ProfitOrLossResult";
import { CurrencyImageWithSubtitle } from "../../Atoms/CurrencyImageWithSubtitle";
import { GlassUnitCards } from "../../Atoms/GlassUnitCards";
import { JSX, MetalPriceContentProps } from "../../../types";

export const MetalPriceContent = (props: MetalPriceContentProps): JSX => {
  return (
    <View
      flex={1}
      w="100%"
      flexDir="column"
      justifyContent="flex-end"
      alignItems="center"
      alignSelf="center"
    >
      <SelectedCurrenciesWithDate {...props} />
      <InputsInformationValues {...props} />
      <ProfitOrLossResult {...props} />
      <CurrencyImageWithSubtitle {...props} />
      <View mt={10}>
        <GlassUnitCards {...props} />
      </View>
    </View>
  );
};
