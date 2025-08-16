import React, { useState } from "react";
import { Div as View } from "react-native-magnus";
import { useBottomModal } from "../../../hooks/useBottomModal";
import { BottomModal } from "../../Molecules/BottomModal";
import { GetDataMessage } from "../../Atoms/GetDataMessage";
import { ModalContentMap } from "../../Atoms/ModalContentMap";
import { SliderWithOptionsInfo } from "../../Molecules/SliderWithOptionsInfo";
import { useAllRates } from "../../../hooks/useAllRates";
import { JSX, ModalProps, NullableNumber } from "../../../types";

export const RenderHomeScreen = (): JSX => {
  const formModal: ModalProps = useBottomModal();

  const [selectedIndex, setSelectedIndex] = useState<NullableNumber>(0);

  const { metalRates, modalContentMap } = useAllRates({ formModal: formModal });

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
