import React from "react";
import { Div as View, Icon } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { convertDate } from "../../../helpers/functions/convertDate";
import { TextMessage600 } from "../TextMessage600";
import { JSX, SelectedCurrenciesWithDateProps } from "../../../types";

export const SelectedCurrenciesWithDate = (
  props: SelectedCurrenciesWithDateProps
): JSX => {
  return (
    <View w={screenWidth - 20}>
      <View
        p={8}
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <View flexDir="row">
          <TextMessage600 color="#cbd5e1" fontWeight="600">
            {props.selectedCurrencyFrom}
          </TextMessage600>
          <View mx={10}>
            <Icon
              fontSize="3xl"
              name="exchange"
              color="#6ee7b7"
              fontFamily="FontAwesome"
            />
          </View>
          <TextMessage600 color="#cbd5e1" fontWeight="600">
            {props.selectedCurrencyTo}
          </TextMessage600>
        </View>
        <View>
          <TextMessage600 color="#cbd5e1" fontWeight="600">
            {convertDate(props.apiDate as string)}
          </TextMessage600>
        </View>
      </View>
    </View>
  );
};
