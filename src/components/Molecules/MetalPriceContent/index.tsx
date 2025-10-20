import React from "react";
import { Div as View } from "react-native-magnus";
import { SelectedCurrenciesWithDate } from "../../Atoms/SelectedCurrenciesWithDate";
import { InputsInformationValues } from "../../Atoms/InputsInformationValues";
import { ProfitOrLossResult } from "../../Atoms/ProfitOrLossResult";
import { CurrencyImageWithSubtitle } from "../../Atoms/CurrencyImageWithSubtitle";
import { GlassUnitCards } from "../../Atoms/GlassUnitCards";
import { AnimatedElement } from "../../Atoms/AnimatedElement";
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
      <AnimatedElement as="View" animation="slideDown" duration={2000}>
        <SelectedCurrenciesWithDate {...props} />
      </AnimatedElement>
      <AnimatedElement as="View" animation="slideDown" duration={2000}>
        <InputsInformationValues {...props} />
      </AnimatedElement>
      <ProfitOrLossResult {...props} />
      <CurrencyImageWithSubtitle {...props} />
      <View mt={10}>
        <AnimatedElement as="View" animation="slideUp" duration={2000}>
          <GlassUnitCards {...props} />
        </AnimatedElement>
      </View>
    </View>
  );
};
