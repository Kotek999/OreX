import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import { ActivityIndicator, ViewToken } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Div as View, Text } from "react-native-magnus";
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
  useSharedValue,
  ScrollHandlerProcessed,
} from "react-native-reanimated";
import { useBottomModal } from "../hooks/useBottomModal";
import { BottomModal } from "../components/Molecules/BottomModal";
import { changeInputState } from "../helpers/functions/changeInputState";
import {
  JSX,
  ModalProps,
  InputsType,
  MetalsPriceProps,
  SetState,
  OptionalMetalType,
  NullableNumber,
  ImageSliderData,
} from "../types";

import { MetalsPrice } from "../components/Organisms/Screens/MetalsPrice";
import { metalOutputData } from "../helpers/data/metalsStateData";
import { useFetchedMetalRates } from "../hooks/useFetchedMetalRates";
import { imageSliderData } from "../helpers/data/imageSliderData";
import { SliderItem } from "../components/Atoms/SliderItem";
import { PaginationItem } from "../components/Atoms/PaginationItem";

export default function Home(): JSX {
  const insets: EdgeInsets = useSafeAreaInsets();

  const formModal: ModalProps = useBottomModal();
  const metalModalOne: ModalProps = useBottomModal();
  const metalModalTwo: ModalProps = useBottomModal();

  const [outputGold, setOutputGold] =
    useState<Record<string, OptionalMetalType>>(metalOutputData);

  const [outputSilver, setOutputSilver] =
    useState<Record<string, OptionalMetalType>>(metalOutputData);

  const [loadingGold, setLoadingGold] = useState<boolean>(false);

  const [selectedButton, setSelectedButton] = useState<NullableNumber>(0);

  const inputsState: {
    inputOne: string;
    inputTwo: string;
  } = {
    inputOne: "",
    inputTwo: "",
  };

  const [inputsGold, setInputsGold] = useState<InputsType>(inputsState);

  const [inputsSilver, setInputsSilver] = useState<InputsType>(inputsState);

  const onPressSelectButton = (buttonId: number): void => {
    setSelectedButton(buttonId);
    formModal.onPressOpenModal(buttonId);
  };

  const [loadingSilver, setLoadingSilver] = useState<boolean>(false);
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("EUR");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("EUR");

  const {
    rates,
    errorMessage,
    apiDate,
    marketRate,
    loadingData,
    getMetalRates,
  } = useFetchedMetalRates();

  useEffect(() => {
    getMetalRates();
  }, []);

  type SliderProps = {
    itemList: ImageSliderData[];
  };

  const Slider = (props: SliderProps): JSX => {
    const scrollX: SharedValue<number> = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState<number>(0);
    const [data, setData] = useState<ImageSliderData[]>(props.itemList);

    type ScrollHandlerProp = ScrollHandlerProcessed<Record<string, unknown>>;

    const onScrollHandler: ScrollHandlerProp = useAnimatedScrollHandler({
      onScroll: (e) => {
        scrollX.value = e.contentOffset.x;
      },
    });

    type ViewableItemsChangedProps = ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
    }) => void;

    const onViewableItemsChanged: ViewableItemsChangedProps = ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
    }): void => {
      if (
        viewableItems[0].index !== undefined &&
        viewableItems[0].index !== null
      ) {
        setPaginationIndex(viewableItems[0].index % props.itemList.length);
      }
    };

    type ItemVisiblePercentThresholdProp = {
      itemVisiblePercentThreshold: number;
    };

    const viewabilityConfig: ItemVisiblePercentThresholdProp = {
      itemVisiblePercentThreshold: 50,
    };

    type ViewabilityConfigCallbackPairsProps = MutableRefObject<
      {
        viewabilityConfig: ItemVisiblePercentThresholdProp;
        onViewableItemsChanged: ViewableItemsChangedProps;
      }[]
    >;

    const viewabilityConfigCallbackPairs: ViewabilityConfigCallbackPairsProps =
      useRef([{ viewabilityConfig, onViewableItemsChanged }]);

    return (
      <View>
        <Animated.FlatList
          data={data}
          renderItem={({ item }) => (
            <SliderItem
              onPressSelectButton={onPressSelectButton}
              item={item}
              paginationIndex={paginationIndex}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
          onEndReached={() => setData([...data, ...props.itemList])}
          onEndReachedThreshold={0.5}
        />
        <PaginationItem
          items={props.itemList}
          paginationIndex={paginationIndex}
        />
      </View>
    );
  };

  const createMetalsPriceScreen = (props: MetalsPriceProps): JSX => (
    <MetalsPrice {...props} />
  );

  const metalsPriceData = {
    apiDate: apiDate,
    marketRate: marketRate,
    selectedCurrencyFrom: selectedCurrencyFrom,
    setSelectedCurrencyFrom: setSelectedCurrencyFrom,
    selectedCurrencyTo: selectedCurrencyTo,
    setSelectedCurrencyTo: setSelectedCurrencyTo,
    rates: rates,
    formModal: formModal,
  };

  const onChangeTextState = (setInputType: SetState<InputsType>) => {
    const inputState = (name: keyof InputsType, text: string) =>
      changeInputState(name, text, setInputType);
    return inputState;
  };

  const modalContentMap: { [key: number]: JSX } = {
    1: createMetalsPriceScreen({
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
    }),
    2: createMetalsPriceScreen({
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
    }),
    3: <Text style={{ color: "lime" }}>Content three</Text>,
  };

  return (
    <View flex={1} mt={insets.top} bg="#030712">
      <StatusBar style="light" backgroundColor="#030712" />
      {loadingData ? (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="#10b981" />
          <Text
            p={10}
            color="#fafafa"
            fontSize={16}
            letterSpacing={0.5}
            fontWeight="500"
          >
            Pobieranie danych...
          </Text>
        </View>
      ) : (
        <View mt={20} justifyContent="flex-start">
          <View justifyContent="center" alignItems="center">
            <Slider itemList={imageSliderData} />
          </View>
          <BottomModal
            ref={formModal.bottomSheetModalRef}
            enableContentPanningGesture={false}
            snapPointsValue="100%"
            onPressCloseModal={formModal.onPressCloseModal}
          >
            <View justifyContent="center" alignItems="center">
              {!marketRate === null || undefined ? (
                <View flex={1} justifyContent="center" alignItems="center">
                  {errorMessage && (
                    <Text
                      p={5}
                      color="#f8fafc"
                      fontSize={18}
                      letterSpacing={0.5}
                      fontWeight="500"
                    >
                      {errorMessage}
                    </Text>
                  )}
                  <Text
                    p={5}
                    color="#f8fafc"
                    fontSize={18}
                    letterSpacing={0.5}
                    fontWeight="500"
                  >
                    Brak aktualnych danych
                  </Text>
                  <Text
                    p={5}
                    color="#f8fafc"
                    fontSize={18}
                    letterSpacing={0.5}
                    fontWeight="500"
                  >
                    Spróbuj ponownie później
                  </Text>
                </View>
              ) : (
                <>
                  <View>
                    {selectedButton && modalContentMap[selectedButton]}
                  </View>
                </>
              )}
            </View>
          </BottomModal>
        </View>
      )}
    </View>
  );
}
