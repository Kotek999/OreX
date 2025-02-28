import React, { useState, useEffect } from "react";
import Animated from "react-native-reanimated";
import { ActivityIndicator, ScrollView } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Div as View,
  Text,
  Image,
  Button,
  Input,
  Icon,
} from "react-native-magnus";
import { useBottomModal } from "../hooks/useBottomModal";
import { BottomModal } from "../components/Molecules/BottomModal";
import { MetalsPrice } from "../components/Organisms/Screens/MetalsPrice";
import { metalOutputData } from "../helpers/data/metalsStateData";
import { useFetchedMetalRates } from "../hooks/useFetchedMetalRates";
import { imageSliderData } from "../helpers/data/imageSliderData";
import { Slider } from "../components/Atoms/Slider";
import { onChangeTextState } from "../helpers/functions/onChangeTextState";
import { screenWidth } from "../helpers/dimensions";
import { ScrollViewContainer } from "../components/Atoms/ScrollViewContainer";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { LineChart } from "react-native-gifted-charts";
import {
  JSX,
  ModalProps,
  InputsType,
  MetalsPriceProps,
  OptionalMetalType,
  NullableNumber,
  NullableString,
} from "../types";
import { FormHeader } from "../components/Atoms/FormHeader";
import { formatNumber } from "../helpers/functions/formatNumber";
import { TextMessage600 } from "../components/Atoms/TextMessage600";
import { ErrorMessage } from "../components/Atoms/ErrorMessage";
import { validateFields } from "../helpers/functions/validateFields";
import { changeTextInput } from "../helpers/functions/changeTextInput";
import apiKeys from "../../apiKeys.json";

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

  const [selectedIndex, setSelectedIndex] = useState<NullableNumber>(0);

  const inputsState: {
    inputOne: string;
    inputTwo: string;
  } = {
    inputOne: "",
    inputTwo: "",
  };

  const [inputsGold, setInputsGold] = useState<InputsType>(inputsState);
  const [inputsSilver, setInputsSilver] = useState<InputsType>(inputsState);

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

  interface Rate {
    date: string;
    [currency: string]: number | string;
  }

  const [factData, setFactData] = useState<FactData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingScreenData, setLoadingScreenData] = useState<boolean>(true);

  const [exchangeData, setExchangeData] = useState<{
    USD: ExchangeData;
    EUR: {
      base: string;
      date: string;
      rates: {
        PLN: number;
      };
    };
  } | null>(null);

  const [exchangeDataTest1, setExchangeDataTest1] = useState<{
    USD: ExchangeData;
    PLN: {
      base: string;
      date: string;
      rates: {
        EUR: number;
      };
    };
  } | null>(null);

  const [exchangeDataTest2, setExchangeDataTest2] = useState<{
    EUR: ExchangeData;
    PLN: {
      base: string;
      date: string;
      rates: {
        USD: number;
      };
    };
  } | null>(null);

  const [historicalRates, setHistoricalRates] = useState<
    Record<string, Record<string, number>>
  >({});

  const [error, setError] = useState<string | null>(null);

  const [trends, setTrends] = useState<Record<
    string,
    {
      symbol: string;
      color: string;
    }
  > | null>(null);

  const currencyPLN: string = "PLN";
  const currencyUSD: string = "USD";
  const currencyEUR: string = "EUR";

  const targetCurrencies: string[] = [currencyEUR, currencyUSD];

  const getRandomImageUri = (width: number, height: number): string => {
    return `${
      apiKeys.randomImageUri.apiKey
    }${width}/${height}?random=${Math.random()}`;
  };

  const fetchRandomFact = async (): Promise<void> => {
    try {
      const requests: Promise<FactData>[] = Array.from({ length: 5 }, () =>
        fetch(apiKeys.randomFact.apiKey).then((response) => response.json())
      );
      const facts: FactData[] = await Promise.all(requests);
      setFactData(facts);
    } catch (error) {
      console.error("Wystąpił błąd podczas pobierania faktu:", error);
    } finally {
      setLoading(false);
    }
  };

  // kursy
  const fetchExchangeData = async () => {
    try {
      setLoadingScreenData(true);
      const data = await buildResponseParameters<ExchangeData>(
        apiKeys.exchangeData.apiKey,
        {
          symbols: "PLN,EUR",
          base: "USD",
        }
      );

      const PLN = data.rates.PLN;
      const EUR = data.rates.EUR;

      const eurToPln = data.rates.PLN / data.rates.EUR;
      const plnToEur = data.rates.EUR / data.rates.PLN;

      const eurToUsd = 1 / EUR;
      const plnToUsd = 1 / PLN;

      const combinedData = {
        USD: {
          base: "PLN",
          date: data.date,
          rates: {
            PLN: PLN,
          },
        },
        EUR: {
          base: "PLN",
          date: data.date,
          rates: {
            PLN: eurToPln,
          },
        },
      };

      const combinedDataTest1 = {
        USD: {
          base: "EUR",
          date: data.date,
          rates: {
            EUR: EUR,
          },
        },
        PLN: {
          base: "EUR",
          date: data.date,
          rates: {
            EUR: plnToEur,
          },
        },
      };

      const combinedDataTest2 = {
        EUR: {
          base: "USD",
          date: data.date,
          rates: {
            USD: eurToUsd,
          },
        },
        PLN: {
          base: "USD",
          date: data.date,
          rates: {
            USD: plnToUsd,
          },
        },
      };

      setExchangeData(combinedData);
      setExchangeDataTest1(combinedDataTest1);
      setExchangeDataTest2(combinedDataTest2);
      setError(null);
    } catch (err) {
      setError(
        `Wystąpił błąd podczas pobierania danych: ${
          err instanceof Error ? err.message : "Wystąpił nieznany błąd"
        }`
      );
    } finally {
      setLoadingScreenData(false);
    }
  };

  // historyczne dane
  const fetchHistoricalData = async () => {
    try {
      setLoadingScreenData(true);
      const currentDate = new Date();
      const oneYearAgo = new Date(currentDate);
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

      const startDate = oneYearAgo.toISOString().split("T")[0];

      const symbols = [...targetCurrencies].join(",");
      const data = await buildResponseParameters<HistoricalDataResponse>(
        `${apiKeys.historicalData.apiKey}${startDate}..?base=${currencyUSD}&symbols=${symbols}`,
        {
          symbols: symbols,
          base: currencyPLN,
        }
      );

      const allRates: Rate[] = Object.entries(data.rates).map(
        ([date, rate]) => ({
          date,
          ...rate,
        })
      );

      const calculateTrendIndicator = () => {
        if (allRates.length < 2) return null;

        const latest = allRates[allRates.length - 1];
        const previous = allRates.find(
          (rate, index) =>
            new Date(rate.date) < new Date(latest.date) &&
            index <= allRates.length - 2
        );

        if (!previous) return null;

        const trends: Record<string, { symbol: string; color: string }> = {};

        ["USD", "EUR"].forEach((currency) => {
          const latestValue = latest[currency] as number;
          const previousValue = previous[currency] as number;

          if (!latestValue || !previousValue) return;

          if (latestValue > previousValue) {
            trends[currency] = { symbol: "▲", color: "#4ade80" };
          } else if (latestValue < previousValue) {
            trends[currency] = { symbol: "▼", color: "#fb7185" };
          } else {
            trends[currency] = { symbol: "•", color: "gray" };
          }
        });

        return trends;
      };

      setTrends(calculateTrendIndicator());

      const calculateAverage = (days: number) => {
        let filteredRates = allRates.filter(
          ({ date }) =>
            new Date(date) >=
            new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000)
        );

        if (filteredRates.length === 0 && days === 1) {
          const previousDay = new Date(
            // currentDate.getTime() - 1 * 24 * 60 * 60 * 1000
            currentDate.getTime() - 3 * 24 * 60 * 60 * 1000
          );
          filteredRates = allRates.filter(
            ({ date }) =>
              new Date(date).toDateString() === previousDay.toDateString()
          );
        }

        const averages: Record<string, number> = {};
        targetCurrencies.forEach((currency) => {
          const sum = filteredRates.reduce(
            (acc, rate) => acc + ((rate[currency] as number) || 0),
            0
          );
          averages[currency] =
            filteredRates.length > 0 ? sum / filteredRates.length : NaN;
        });

        return averages;
      };

      const formatDateLabel = (daysAgo: number) => {
        const today = new Date();
        const date = new Date();
        date.setDate(today.getDate() - daysAgo);

        const options: Intl.DateTimeFormatOptions = {
          day: "numeric",
          month: "long",
        };

        if (date.getFullYear() !== today.getFullYear()) {
          options.year = "numeric";
        }

        return date.toLocaleDateString("pl-PL", options);
      };

      setHistoricalRates({
        [formatDateLabel(1)]: calculateAverage(1),
        [formatDateLabel(7)]: calculateAverage(7),
        [formatDateLabel(30)]: calculateAverage(30),
        [formatDateLabel(365)]: calculateAverage(365),
      });

      setError(null);
    } catch (err) {
      setError(
        `Wystąpił błąd podczas pobierania danych: ${
          err instanceof Error ? err.message : "Wystąpił nieznany błąd"
        }`
      );
    } finally {
      setLoadingScreenData(false);
    }
  };

  useEffect(() => {
    // getMetalRates();
    fetchRandomFact();
    fetchExchangeData();
    fetchHistoricalData();
  }, []);

  // useEffect(() => {
  //   getMetalRates();
  // }, []);

  // api concept

  type FactData = {
    id: string;
    text: string;
    source: string;
    source_url: string;
  };

  type FactItemProps = {
    fact: {
      id: string;
      text: string;
      source: string;
      source_url: string;
    };
    index: number;
  };

  const FactItem = (props: FactItemProps): JSX => {
    const truncateText = (text: string, maxLength: number): string | JSX => {
      if (text.length > maxLength) {
        return (
          <>
            {text.slice(0, maxLength)}
            <Text
              color="white"
              fontSize={12}
              letterSpacing={1.5}
              fontWeight="700"
            >
              ...more
            </Text>
          </>
        );
      }
      return text;
    };

    return (
      <ScrollViewContainer>
        <LinearGradient
          colors={["#10b981", "#0c4a6e"]}
          start={{ x: 1.2, y: 1.5 }}
          end={{ x: 0.4, y: 0.2 }}
          style={{
            width: screenWidth - 30,
            borderRadius: 20,
            overflow: "hidden",
            height: 90,
            backgroundColor: "#155e75",
            margin: 10,
            alignSelf: "center",
          }}
        >
          <BlurView
            intensity={10}
            tint="light"
            style={{
              flex: 1,
              borderRadius: 15,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          >
            <View flex={1} flexDir="row" alignItems="center">
              <Image
                h={50}
                w={50}
                m={10}
                rounded="circle"
                source={{
                  uri: getRandomImageUri(50, 50),
                }}
              />
              <View w="80%" flexDir="column">
                <Text
                  color="#fafafa"
                  fontSize={14}
                  letterSpacing={1.5}
                  fontWeight="bold"
                >
                  Fact{" "}
                  <Text
                    color="#6ee7b7"
                    fontSize={14}
                    letterSpacing={1.5}
                    fontWeight="bold"
                  >
                    {props.index}
                  </Text>
                </Text>
                <Text
                  color="#f4f4f5"
                  fontSize={12}
                  letterSpacing={0.5}
                  fontWeight="400"
                >
                  {truncateText(props.fact.text, 100)}
                </Text>
              </View>
            </View>
          </BlurView>
        </LinearGradient>
      </ScrollViewContainer>
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

  const buildResponseParameters = async <T extends Record<string, any>>(
    url: string,
    params: Record<string, string> = {}
  ): Promise<T> => {
    try {
      const queryParams: string = new URLSearchParams(params).toString();
      const finalUrl: string = `${url}?${queryParams}`;
      const response: Response = await fetch(finalUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${finalUrl}`);
      }

      return response.json();
    } catch (err) {
      throw new Error(
        `Failed to fetch data: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    }
  };

  interface ExchangeData {
    rates: Record<string, number>;
    base: string;
    date: string;
  }

  interface HistoricalRates {
    [date: string]: Record<string, number>;
  }

  interface HistoricalDataResponse {
    rates: HistoricalRates;
    base: string;
    start_date: string;
    end_date: string;
  }

  const ConverterComponent = (): JSX => {
    const [inputAmount, setInputAmount] = useState<string>("");
    const [convertedAmount, setConvertedAmount] = useState<string>("");

    const [convertedValues, setConvertedValues] = useState<
      Record<string, number>
    >({});

    const [emptyFieldError, setEmptyFieldError] =
      useState<NullableString>(null);

    const handleConvert = () => {
      if (
        !validateFields(
          { field: inputAmount, setError: setEmptyFieldError },
          "To pole jest wymagane!",
          "To pole nie może zawierać liczby 0!"
        )
      )
        return;
      setConvertedAmount(inputAmount);

      if (!exchangeData) return;
      const amount = parseFloat(inputAmount);
      if (isNaN(amount)) return;

      const converted: Record<string, number> = {};
      Object.entries(exchangeData).forEach(([base, data]) => {
        if (data.rates.PLN) {
          return (converted[base] = amount / data.rates.PLN);
        }
      });
      setConvertedValues(converted);
    };

    const getChartDataFromHistoricalRates = (currency: string) =>
      Object.entries(historicalRates || {}).map(([date, rates]) => ({
        label: date,
        value: rates[currency] ?? 0,
      }));

    const chartDataUSD = getChartDataFromHistoricalRates("USD");
    const chartDataEUR = getChartDataFromHistoricalRates("EUR");

    type LabelText = {
      color: string;
      width: number;
    };

    type ItemType = {
      value?: number;
      labelTextStyle?: LabelText;
      labelComponent: Function;
      label: String;
    };

    const formatDateWithDay = (dateString: string) => {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
      };

      return date.toLocaleDateString("pl-PL", options);
    };

    const onChangeTextInputState = (text: string) => {
      const inputState = changeTextInput(text, {
        setSingleInput: setInputAmount,
      });
      return inputState;
    };

    return (
      <>
        {loadingScreenData ? (
          <ActivityIndicator size="large" color="#10b981" />
        ) : error ? (
          <Text style={{ color: "red" }}>{error}</Text>
        ) : exchangeData && exchangeDataTest1 && exchangeDataTest2 ? (
          <>
            <FormHeader
              w={screenWidth - 20}
              headerTitle="Polskie Złote"
              formModal={formModal}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                alignSelf: "center",
                width: screenWidth - 20,
                flexGrow: 1,
              }}
            >
              <View mt={14} flexDir="column" alignSelf="center">
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      marginBottom: 10,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      letterSpacing={0.8}
                      fontSize={16}
                      fontWeight="bold"
                      color="#f8fafc"
                    >
                      Ilość PLN
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#0e7490",
                      marginBottom: 10,
                      flexDirection: "column",
                      padding: 10,
                      borderRadius: 10,
                      overflow: "hidden",
                      alignSelf: "center",
                    }}
                  >
                    <View style={{ marginBottom: 5, alignItems: "center" }}>
                      <Text
                        color="#e2e8f0"
                        fontSize={15}
                        letterSpacing={0.8}
                        fontWeight="bold"
                      >
                        Kursy
                      </Text>
                    </View>
                    {Object.entries(exchangeData).map(
                      ([targetCurrency, rate]) => (
                        <Text
                          key={targetCurrency}
                          color="#cbd5e1"
                          fontSize={14}
                          letterSpacing={0.8}
                          fontWeight="600"
                        >
                          {`1 ${targetCurrency} = ${formatNumber(
                            rate.rates["PLN"]
                          )} PLN`}
                        </Text>
                      )
                    )}
                    {Object.entries(exchangeDataTest1).map(
                      ([targetCurrency, rate]) => (
                        <Text
                          key={targetCurrency}
                          color="#cbd5e1"
                          fontSize={14}
                          letterSpacing={0.8}
                          fontWeight="600"
                        >
                          {`1 ${targetCurrency} = ${formatNumber(
                            rate.rates["EUR"]
                          )} EUR`}
                        </Text>
                      )
                    )}
                    {Object.entries(exchangeDataTest2).map(
                      ([targetCurrency, rate]) => (
                        <Text
                          key={targetCurrency}
                          color="#cbd5e1"
                          fontSize={14}
                          letterSpacing={0.8}
                          fontWeight="600"
                        >
                          {`1 ${targetCurrency} = ${formatNumber(
                            rate.rates["USD"]
                          )} USD`}
                        </Text>
                      )
                    )}
                  </View>
                </View>
                <View w={screenWidth / 1.5} flexDir="row">
                  <Input
                    flex={1}
                    h={50}
                    borderColor={emptyFieldError ? "#f87171" : "transparent"}
                    borderWidth={emptyFieldError ? 2 : 0}
                    bg="#cffafe"
                    placeholder="0.00"
                    focusBorderColor="blue700"
                    keyboardType="numeric"
                    suffix={
                      <Icon
                        name="price-tag"
                        color="gray700"
                        fontFamily="Entypo"
                      />
                    }
                    value={inputAmount}
                    onChangeText={(text) => onChangeTextInputState(text)}
                  />
                </View>
                <ErrorMessage emptyFieldError={emptyFieldError} />
              </View>
              <View mt={25} mb={25} alignSelf="center">
                <Button
                  w={screenWidth / 2}
                  alignSelf="center"
                  bg="#10b981"
                  textTransform="uppercase"
                  fontWeight="700"
                  color="#f8fafc"
                  underlayColor="#6ee7b7"
                  shadow="md"
                  shadowColor="#6ee7b7"
                  borderless
                  rounded={20}
                  onPress={handleConvert}
                >
                  Przelicz
                </Button>
              </View>
              <Text
                mt={4}
                color="#e2e8f0"
                fontSize={14}
                fontWeight="600"
                letterSpacing={0.8}
              >
                Przeliczone wartości (dolary, euro)
              </Text>
              <View
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  alignItems: "center",
                }}
              >
                {Object.keys(convertedValues).length > 0 ? (
                  <View flex={1} w={screenWidth - 20} justifyContent="center">
                    <BlurView
                      intensity={10}
                      tint="light"
                      style={{
                        alignItems: "center",
                        overflow: "hidden",
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          fontSize={20}
                          textTransform="uppercase"
                          color="#f8fafc"
                          letterSpacing={0.5}
                        >
                          {convertedAmount} {currencyPLN}
                        </Text>
                        <View
                          style={{
                            flexDirection: "column",
                          }}
                        >
                          <Icon
                            fontSize={20}
                            name="arrow-top-right"
                            color="#6ee7b7"
                            fontFamily="MaterialCommunityIcons"
                          />
                          <View style={{ paddingVertical: 2 }} />
                          <Icon
                            fontSize={20}
                            name="arrow-bottom-right"
                            color="#6ee7b7"
                            fontFamily="MaterialCommunityIcons"
                          />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                          {Object.entries(convertedValues).map(
                            ([currency, value]) => {
                              const trend = trends?.[currency];
                              return (
                                <View key={currency}>
                                  <Text
                                    fontSize={20}
                                    textTransform="uppercase"
                                    color="#f8fafc"
                                    letterSpacing={0.5}
                                  >
                                    {formatNumber(value)}{" "}
                                    <Text
                                      fontWeight="600"
                                      fontSize={20}
                                      textTransform="uppercase"
                                      color="#f8fafc"
                                      letterSpacing={0.5}
                                    >
                                      {currency}
                                    </Text>
                                    <Text
                                      style={{
                                        fontSize: 20,
                                        color: trend?.color,
                                      }}
                                    >
                                      {trend?.symbol || ""}
                                    </Text>
                                  </Text>
                                </View>
                              );
                            }
                          )}
                        </View>
                      </View>
                    </BlurView>
                  </View>
                ) : (
                  <View flex={1} w={screenWidth - 20} justifyContent="center">
                    <BlurView
                      intensity={10}
                      tint="light"
                      style={{
                        alignItems: "center",
                        overflow: "hidden",
                        padding: 20,
                        borderRadius: 20,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          fontSize={20}
                          textTransform="uppercase"
                          color="#f8fafc"
                          letterSpacing={0.5}
                        >
                          0 {currencyPLN}
                        </Text>
                        <View
                          style={{
                            flexDirection: "column",
                          }}
                        >
                          <Icon
                            fontSize={20}
                            name="arrow-top-right"
                            color="#6ee7b7"
                            fontFamily="MaterialCommunityIcons"
                          />
                          <View style={{ paddingVertical: 2 }} />
                          <Icon
                            fontSize={20}
                            name="arrow-bottom-right"
                            color="#6ee7b7"
                            fontFamily="MaterialCommunityIcons"
                          />
                        </View>
                        <View style={{ flexDirection: "column" }}>
                          <Text
                            fontSize={20}
                            textTransform="uppercase"
                            color="#f8fafc"
                            letterSpacing={0.5}
                          >
                            {formatNumber(0.0)}{" "}
                            <Text
                              fontWeight="700"
                              fontSize={20}
                              textTransform="uppercase"
                              color="#f8fafc"
                              letterSpacing={0.8}
                            >
                              {currencyUSD}
                            </Text>
                          </Text>
                          <Text
                            fontSize={20}
                            textTransform="uppercase"
                            color="#f8fafc"
                            letterSpacing={0.5}
                          >
                            {formatNumber(0.0)}{" "}
                            <Text
                              fontWeight="700"
                              fontSize={20}
                              textTransform="uppercase"
                              color="#f8fafc"
                              letterSpacing={0.8}
                            >
                              {currencyEUR}
                            </Text>
                          </Text>
                        </View>
                      </View>
                    </BlurView>
                  </View>
                )}
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#111827",
                  borderRadius: 14,
                  padding: 10,
                  alignSelf: "center",
                  width: screenWidth - 20,
                  marginBottom: 20,
                }}
              >
                <View style={{ marginHorizontal: 0 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        color="#e2e8f0"
                        fontSize={18}
                        fontWeight="600"
                        letterSpacing={0.8}
                      >
                        Wykres walut
                      </Text>
                      <Text
                        color="#cbd5e1"
                        fontSize={12}
                        fontWeight="600"
                        letterSpacing={0.8}
                      >
                        (dzień, tydzień, miesiąc, rok)
                      </Text>
                    </View>
                    <TextMessage600
                      fontSize={12}
                      color="#cbd5e1"
                      fontWeight="600"
                    >
                      Odświeżane: {formatDateWithDay(exchangeData.EUR.date)}
                    </TextMessage600>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: 26,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: "#6366f1",
                          marginRight: 8,
                        }}
                      />
                      <Text style={{ color: "lightgray" }}>USD</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: "#0ea5e9",
                          marginRight: 8,
                        }}
                      />
                      <Text style={{ color: "lightgray" }}>EUR</Text>
                    </View>
                  </View>
                </View>
                <ScrollView
                  contentContainerStyle={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  <View
                    style={{
                      alignSelf: "center",
                      flexDirection: "row",
                      marginTop: 26,
                      paddingBottom: 40,
                    }}
                  >
                    <LineChart
                      yAxisOffset={0.23}
                      yAxisLabelTexts={[
                        "0,232",
                        "0,237",
                        "0,240",
                        "0,247",
                        "0,252",
                      ]}
                      height={220}
                      curved
                      thickness={3}
                      adjustToWidth
                      noOfSections={4}
                      dataPointsColor="#6ee7b7"
                      startOpacity={0.9}
                      endOpacity={0.2}
                      spacing={80}
                      hideRules
                      initialSpacing={45}
                      startFillColor="#0c4a6e"
                      endFillColor="#14b8a6"
                      yAxisColor="white"
                      yAxisThickness={0}
                      yAxisTextStyle={{ color: "#94a3b8" }}
                      xAxisLabelTextStyle={{
                        top: 10,
                        transform: [{ rotate: "-25deg" }],
                        textAlign: "left",
                        color: "#94a3b8",
                        fontSize: 11,
                      }}
                      xAxisColor={"transparent"}
                      data={chartDataUSD}
                      data2={chartDataEUR}
                      color1="#6366f1"
                      color2="#0ea5e9"
                      pointerConfig={{
                        pointerStripUptoDataPoint: true,
                        pointerStripColor: "lightgray",
                        pointerStripWidth: 2,
                        strokeDashArray: [2, 5],
                        pointerColor: "#6ee7b7",
                        radius: 4,
                        pointerLabelWidth: 50,
                        pointerLabelHeight: 120,
                        pointerLabelComponent: (items: ItemType[]): JSX => {
                          return (
                            <>
                              <View
                                style={{
                                  height: 90,
                                  width: 80,
                                  justifyContent: "center",
                                  marginTop: -40,
                                  marginLeft: -30,
                                }}
                              >
                                <LinearGradient
                                  start={{ x: 1.2, y: 1.5 }}
                                  end={{ x: 0.4, y: 0.2 }}
                                  colors={["#0c4a6e", "#10b981"]}
                                  style={{
                                    overflow: "hidden",
                                    width: 50,
                                    alignSelf: "center",
                                    borderRadius: 16,
                                    backgroundColor: "red",
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: "white",
                                      fontWeight: "bold",
                                      textAlign: "center",
                                    }}
                                  >
                                    {items[0].value?.toFixed(3)}
                                  </Text>
                                </LinearGradient>
                              </View>
                              <View
                                style={{
                                  height: 90,
                                  width: 80,
                                  justifyContent: "center",
                                  marginTop: -15,
                                  marginLeft: -30,
                                }}
                              >
                                <LinearGradient
                                  start={{ x: 1.2, y: 1.5 }}
                                  end={{ x: 0.4, y: 0.2 }}
                                  colors={["#0c4a6e", "#10b981"]}
                                  style={{
                                    overflow: "hidden",
                                    width: 50,
                                    alignSelf: "center",
                                    borderRadius: 16,
                                    backgroundColor: "red",
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: "white",
                                      fontWeight: "bold",
                                      textAlign: "center",
                                    }}
                                  >
                                    {items[1].value?.toFixed(3)}
                                  </Text>
                                </LinearGradient>
                              </View>
                            </>
                          );
                        },
                      }}
                    />
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
            {/* <Text>Historical Averages:</Text>
            {Object.entries(historicalRates).map(([period, rates]) => (
              <View key={period}>
                <Text>{period} Averages:</Text>
                {Object.entries(rates).map(([currency, value]) => (
                  <Text key={currency}>
                    {currency}: {value.toFixed(4)}
                  </Text>
                ))}
              </View>
            ))} */}
            {/* </ScrollView> */}
          </>
        ) : null}
      </>
    );
  };

  type ModalContentMapProp = { [key: number]: JSX };

  const modalContentMap: ModalContentMapProp = {
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
    3: (
      <View>
        <ConverterComponent />
      </View>
    ),
    4: (
      <View>
        <ConverterComponent />
      </View>
    ),
    5: (
      <View>
        <ConverterComponent />
      </View>
    ),
  };

  return (
    <View flex={1} mt={insets.top} bg="#111827">
      <StatusBar style="light" backgroundColor="#111827" />
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
        <View mt={20} alignItems="center" justifyContent="flex-start">
          <View>
            <View>
              <Slider
                itemList={imageSliderData}
                setSelectedIndex={setSelectedIndex}
                formModal={formModal}
              />
              <View flex={1} bg="#111827">
                <Text
                  pl={15}
                  pb={2}
                  color="#fafafa"
                  fontWeight="500"
                  letterSpacing={0.5}
                >
                  Ciekawostki ze świata (EN)
                </Text>
                {loading ? (
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
                  </View>
                ) : (
                  <Animated.FlatList
                    data={factData}
                    renderItem={({ item, index }) => (
                      <FactItem fact={item} index={index + 1} />
                    )}
                    contentContainerStyle={{ paddingVertical: 5 }}
                    showsVerticalScrollIndicator={false}
                  />
                )}
              </View>
            </View>
            <BottomModal
              styles={{ flex: 3, position: "absolute" }}
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
                      {selectedIndex && modalContentMap[selectedIndex]}
                    </View>
                  </>
                )}
              </View>
            </BottomModal>
          </View>
        </View>
      )}
    </View>
  );
}
