import React from "react";
import { Div as View, Text, Image } from "react-native-magnus";
import { currencySymbolChecker } from "../../../helpers/functions/currencySymbolChecker";
import { currencyImageChecker } from "../../../helpers/functions/currencyImageChecker";
import { JSX, CurrencyImageWithSubtitleProps } from "../../../types";

export const CurrencyImageWithSubtitle = (
  props: CurrencyImageWithSubtitleProps
): JSX => {
  const currencyNameWithSymbol: string = `${
    props.selectedCurrencyTo
  } (${currencySymbolChecker(props.selectedCurrencyTo)})`;

  return (
    <View flex={3} justifyContent="center" alignSelf="flex-start" ml={5}>
      <View flexDir="row" alignItems="center">
        <Image
          source={currencyImageChecker(props.selectedCurrencyTo)}
          style={{ width: 35, height: 35 }}
          resizeMethod="scale"
          resizeMode="contain"
        />
        <Text
          ml={8}
          color="#f8fafc"
          fontSize={22}
          fontWeight="600"
          letterSpacing={0.8}
        >
          {currencyNameWithSymbol}
        </Text>
      </View>
      <Text
        mt={4}
        color="#e2e8f0"
        fontSize={14}
        fontWeight="600"
        letterSpacing={0.8}
      >
        Aktualne kursy dla jednej sztuki
      </Text>
    </View>
  );
};
