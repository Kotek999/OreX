import React, { useState, useEffect } from "react";
import { Div as View } from "react-native-magnus";
import { useBottomModal } from "../../../hooks/useBottomModal";
import { BottomModal } from "../../Molecules/BottomModal";
import { useFetchedMetalRates } from "../../../hooks/useFetchedMetalRates";
import { useFetchedCurrencyRates } from "../../../hooks/useFetchedCurrencyRates";
import { createMetalsPriceScreen } from "../../../helpers/functions/createMetalsPriceScreen";
import { useMetalRates } from "../../../hooks/useMetalsRates";
import { useCurrencyRates } from "../../../hooks/useCurrencyRates";
import { GetDataMessage } from "../../Atoms/GetDataMessage";
import { ModalContentMap } from "../../Atoms/ModalContentMap";
import { SliderWithOptionsInfo } from "../../Molecules/SliderWithOptionsInfo";
import {
  JSX,
  ModalProps,
  NullableNumber,
  ModalContentMapProp,
  UseFetchedMetalRatesProps,
  UseFetchedCurrencyRatesProps,
} from "../../../types";

export const RenderHomeScreen = (): JSX => {
  const formModal: ModalProps = useBottomModal();

  const [selectedIndex, setSelectedIndex] = useState<NullableNumber>(0);

  const metalRates: UseFetchedMetalRatesProps = useFetchedMetalRates();
  const currencyRates: UseFetchedCurrencyRatesProps = useFetchedCurrencyRates();

  const { metalsRatesData } = useMetalRates({
    metalRates: metalRates,
    formModal: formModal,
  });

  const { item, currencyRatesData } = useCurrencyRates({
    currencyRates: currencyRates,
    formModal: formModal,
  });

  useEffect(() => {
    metalRates.getMetalRates();
    currencyRates.getExchangeRates();
    currencyRates.getHistoricalRates();
  }, []);

  const modalContentMap: ModalContentMapProp = {
    ...Object.fromEntries(
      metalsRatesData.map((metal) => [metal.id, createMetalsPriceScreen(metal)])
    ),
    ...Object.fromEntries(
      currencyRatesData.map((currency) => [
        currency.id,
        item.createCurrencyConverterScreen(currency),
      ])
    ),
  };

  return (
    <>
      {metalRates.loadingData ? (
        <GetDataMessage />
      ) : (
        <View mt={20} alignItems="center" justifyContent="flex-start">
          <View>
            <SliderWithOptionsInfo
              setSelectedIndex={setSelectedIndex}
              formModal={formModal}
            />
            <BottomModal
              styles={{ flex: 3, position: "absolute" }}
              ref={formModal.bottomSheetModalRef}
              enableContentPanningGesture={false}
              snapPointsValue="100%"
              onPressCloseModal={formModal.onPressCloseModal}
            >
              <ModalContentMap
                metalRates={metalRates}
                selectedIndex={selectedIndex}
                modalContentMap={modalContentMap}
              />
            </BottomModal>
          </View>
        </View>
      )}
    </>
  );
};
