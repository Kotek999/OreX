import React from "react";
import { Image, Text, Div as View } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { RFValue } from "react-native-responsive-fontsize";
import { formatNumber } from "../../../helpers/functions/formatNumber";
import { currencySymbolChecker } from "../../../helpers/functions/currencySymbolChecker";
import { currencyImageChecker } from "../../../helpers/functions/currencyImageChecker";
import { TextMessage600 } from "../../Atoms/TextMessage600";
import { JSX, Currency, ItemPickedCurrencyWithRateProps } from "../../../types";

export const ItemPickedCurrencyWithRate = (
  props: ItemPickedCurrencyWithRateProps
): JSX => {
  const selectedCurrency: Currency = props.calculatedItem.selectedCurrency;
  const currencySymbol: string = `${currencySymbolChecker(selectedCurrency)}`;
  const rate: string = `${formatNumber(
    Number(
      props.rates?.[selectedCurrency]?.[`${props.metalType}_rates`]?.Price_G
    )
  )} ${currencySymbol}`;

  return (
    <View
      w={screenWidth - 50}
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      mt={20}
    >
      <View flexDir="row" alignItems="center">
        <Image
          source={currencyImageChecker(selectedCurrency)}
          style={{ width: 25, height: 25 }}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <Text
          ml={8}
          color="#f8fafc"
          fontSize={RFValue(12)}
          fontWeight="600"
          letterSpacing={0.8}
        >
          {`${selectedCurrency} (${currencySymbol})`}
        </Text>
      </View>
      <View alignItems="center" flexDir="column">
        <TextMessage600 color="#e2e8f0" fontWeight="600">
          Kurs (gram)
        </TextMessage600>
        <TextMessage600 color="white" fontWeight="700">
          {rate}
        </TextMessage600>
      </View>
    </View>
  );
};
