import React from "react";
import { Div as View } from "react-native-magnus";
import { InfoMessage } from "../InfoMessage";
import { JSX, NullableString, ModalContentMapProps } from "../../../types";

export const ModalContentMap = (props: ModalContentMapProps): JSX => {
  const error: NullableString = props.metalRates.errorMessage;

  return (
    <View justifyContent="center" alignItems="center">
      {!props.metalRates.marketRate === null || undefined ? (
        <View flex={1} justifyContent="center" alignItems="center">
          {error && <InfoMessage>{error}</InfoMessage>}
          <InfoMessage>Brak aktualnych danych</InfoMessage>
          <InfoMessage>Spróbuj ponownie później</InfoMessage>
        </View>
      ) : (
        <>
          <View>
            {props.selectedIndex && props.modalContentMap[props.selectedIndex]}
          </View>
        </>
      )}
    </View>
  );
};
