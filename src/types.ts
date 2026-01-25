import {
  JSX,
  Dispatch,
  SetStateAction,
  ReactNode,
  RefObject,
  ForwardRefExoticComponent,
  RefAttributes,
  MutableRefObject,
} from "react";
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  ViewToken,
  Animated as AnimatedStyle,
  ImageSourcePropType,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  KeyboardTypeOptions,
} from "react-native";
import { Text as RNText, Div as RNView } from "react-native-magnus";
import { lineDataItem } from "react-native-gifted-charts";
import { ScrollHandlerProcessed } from "react-native-reanimated";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { iconFontFamilyType } from "react-native-magnus/lib/typescript/src/ui/icon/icon.type";

export type JSX = JSX.Element;
export type ReactNodeLike = string | JSX;
export type Dimension = "window" | "screen";
export type SetState<T> = Dispatch<SetStateAction<T>>;
export type Children = ReactNode;
export type OnPress = () => void;

export type ChildProps = {
  children: Children;
};

export type RefProp<T> = RefObject<T>;
export type MutableRefProp<T> = MutableRefObject<T>;
export type ActionCallbackFunctionProps = (...args: any[]) => void;
export type NullableString = string | null;

export type Optional<T> = T | undefined;

export type BottomModalRef = BottomSheetModal;

export type ModalProps = {
  bottomSheetModalRef: RefProp<BottomSheetModalMethods>;
  onPressOpenModal: ActionCallbackFunctionProps;
  onPressCloseModal: OnPress;
};

export type BottomModalProps = ChildProps & {
  enableContentPanningGesture?: Optional<boolean>;
  snapPointsValue: NullableString;
  onPressCloseModal: OnPress;
  isTitleExist?: Optional<boolean>;
  isDefaultStyle?: Optional<boolean>;
  styles?: Optional<
    StyleProp<ViewStyle | AnimatedStyle.AnimatedProps<ViewStyle>>
  >;
  title?: Optional<string>;
};

export type BottomModalExoticComponent = ForwardRefExoticComponent<
  BottomModalProps & RefAttributes<BottomSheetModalMethods>
>;

export type MetalRates = {
  Price_OZ: number;
  Price_G: number;
  Price_KG: number;
  Price_Tola: number;
};

export type CurrencyRates = {
  gold_rates: MetalRates;
  silver_rates: MetalRates;
};

export type CurrencyItem = {
  curr: string;
  xauPrice: number;
  xagPrice: number;
  chgXau: number;
  chgXag: number;
  pcXau: number;
  pcXag: number;
  xauClose: number;
  xagClose: number;
};

export type ApiResponse = {
  ts: number;
  tsj: number;
  date: string;
  items: CurrencyItem[];
};

export type InputsType = {
  inputOne: string;
  inputTwo: string;
};

export type MetalRate = {
  pricePerOunce: number;
  pricePerGram: number;
};

export type OptionalMetalType = Partial<{
  gold: MetalRates;
  silver: MetalRates;
}>;

export type OutputProp = Record<string, OptionalMetalType>;
export type MetalType = "gold" | "silver";

type InputOptions<T> = {
  rates: Record<string, CurrencyRates> | null;
  inputs: T;
  setLoading: SetState<boolean>;
  setOutput: SetState<OutputProp>;
};

type SelectedCurrencyProps = {
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
};

type SetSelectedCurrencyProps = {
  setSelectedCurrencyFrom: SetState<string>;
  setSelectedCurrencyTo: SetState<string>;
};

export type MetalProps<InputsType> = InputOptions<InputsType> & {
  id?: Optional<number>;
  metalType: MetalType;
  headerTitle: string;
  loading: boolean;
  output: OutputProp;
  setInputs: SetState<InputsType>;
  onChangeText: ChangeInputStateProps;
};

type CurrencyValuesProps = SelectedCurrencyProps &
  SetSelectedCurrencyProps & {
    marketRate: MarketRateProp;
    apiDate: NullableString;
    metalModal: ModalProps;
    formModal: ModalProps;
  };

type ErrorMessagesState = {
  setErrorMessages: {
    setEmptyFieldError: SetState<NullableString>;
    setEmptyPriceFieldError: SetState<NullableString>;
  };
};

export type InputValidationProps = ErrorMessagesState & {
  inputs: InputsType;
};

export type MetalsPriceProps = MetalProps<InputsType> & CurrencyValuesProps;

export type CalculateMetalPricesProps<InputsType> = InputOptions<InputsType> &
  ErrorMessagesState & {
    metalModal: ModalProps;
    metalType: MetalType;
  };

export type CalculatedMetalPriceProps<InputsType> =
  CalculateMetalPricesProps<InputsType> & {
    currencies: string[];
    rates: Record<string, CurrencyRates> | null;
    setLoading: SetState<boolean>;
    setOutput: SetState<Record<string, OptionalMetalType>>;
    inputs: InputsType;
  };

export type CurrenciesMap = {
  gram: [string, string, string];
  euro: [string, string, string];
  złoty: [string, string, string];
  dolary: [string, string, string];
};

type MarketRatesProp = Record<string, { gold: MetalRate; silver: MetalRate }>;

export type ConvertCurrencyProps = {
  grams: number;
  fromCurrency: string;
  toCurrency: string;
  metalType: MetalType;
  marketRates: MarketRatesProp;
};

export type ChangeInputStateProps = (
  name: keyof InputsType,
  text: string,
  setInputs: SetState<InputsType>,
) => void;

export type TextInputOptionsProps = Partial<{
  name: keyof InputsType;
  onChangeText: ChangeInputStateProps;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  setSingleInput: (value: string) => void;
}>;

export type ChangeTextInputProps = (
  text: string,
  options?: TextInputOptionsProps,
) => void;

export type CalculateProfitOrLossProps = SelectedCurrencyProps & {
  grams: number;
  userPrice: number;
  metalType: MetalType;
  marketRates: MarketRatesProp;
};

export type FormContentProps = SelectedCurrencyProps &
  SetSelectedCurrencyProps & {
    metalType: MetalType;
    formModal: ModalProps;
    metalModal: ModalProps;
    headerTitle: string;
    inputs: InputsType;
    output: OutputProp;
    marketRate: MarketRateProp;
    loading: boolean;
    setInputs: SetState<InputsType>;
    onChangeText: ChangeInputStateProps;
    rates: Record<string, CurrencyRates> | null;
    setLoading: SetState<boolean>;
    setOutput: SetState<OutputProp>;
  };

export type MetalScreenProps = SelectedCurrencyProps &
  SetSelectedCurrencyProps & {
    metalType: MetalType;
    formModal: ModalProps;
    metalModal: ModalProps;
    headerTitle: string;
    inputs: InputsType;
    setInputs: SetState<InputsType>;
    onChangeText: ChangeInputStateProps;
    rates: Record<string, CurrencyRates> | null;
    setLoading: SetState<boolean>;
    setOutput: SetState<OutputProp>;
    sheetModal: ModalProps;
  };

export type SelectedCurrenciesWithDateProps = SelectedCurrencyProps & {
  apiDate: NullableString;
};

export type RenderMetalPriceScreenProps = SelectedCurrenciesWithDateProps &
  SetSelectedCurrencyProps &
  FormContentProps;

export type MetalMarketRate = {
  [key: string]: {
    gold: MetalRate;
    silver: MetalRate;
  };
};

export type MarketRates = Record<
  string,
  Record<MetalType, { pricePerGram: number; pricePerOunce: number }>
>;

export type ProfitOrLossResultProps = SelectedCurrencyProps &
  SetSelectedCurrencyProps & {
    metalType: MetalType;
    inputs: InputsType;
    marketRate: MetalMarketRate;
  };

export type MetalPriceHeaderProps = {
  metalModal: ModalProps;
  headerTitle: string;
};

export type InputsInformationValuesProps = {
  selectedCurrencyFrom: string;
  inputs: InputsType;
};
export type InputFieldProps = {
  emptyGoldFieldError: NullableString;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: ChangeInputStateProps;
  inputTitle: string;
  iconName: string;
  inputType: keyof InputsType;
  iconType: Optional<iconFontFamilyType>;
  value: Optional<string>;
};

export type FormInputFieldsProps = {
  emptyMetalFieldError: NullableString;
  emptyPriceMetalFieldError: NullableString;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: ChangeInputStateProps;
  valueOne: Optional<string>;
  valueTwo: Optional<string>;
};

export type FormHeaderProps = {
  formModal: ModalProps;
  headerTitle: string;
  w?: Optional<string | number>;
};

export type ErrorMessageProps = {
  emptyFieldError: NullableString;
};

export type CurrencyPickerProps = SelectedCurrencyProps &
  SetSelectedCurrencyProps;

export type CurrencyImageWithSubtitleProps = {
  selectedCurrencyTo: string;
};

export type UnitData = {
  title: string;
  priceType: string;
  screenWidthDividedValue: number;
}[];

type MetalPriceValues = {
  metalType: MetalType;
  inputs: InputsType;
  output: OutputProp;
  selectedCurrencyTo: string;
  marketRate: MarketRateProp;
};

export type UnitBoxProps = MetalPriceValues & {
  title: string;
  priceType: string;
  screenWidthDividedValue: number;
};

export type GlassUnitCardsProps = MetalPriceValues;

export type MetalPriceContentProps = SelectedCurrencyProps &
  SetSelectedCurrencyProps & {
    metalType: MetalType;
    rates: Record<string, CurrencyRates> | null;
    inputs: InputsType;
    setLoading: SetState<boolean>;
    setOutput: SetState<OutputProp>;
    loading: boolean;
    output: OutputProp;
    setInputs: SetState<InputsType>;
    onChangeText: ChangeInputStateProps;
    marketRate: MarketRateProp;
    apiDate: NullableString;
    formModal: ModalProps;
  };

export type MetalPriceProps = {
  metalType: MetalType;
  priceType: keyof MetalRates;
  inputs: { inputOne: string };
  output: Record<string, OptionalMetalType>;
  selectedCurrencyTo: string;
};

export type NullableImageSource = Optional<ImageSourcePropType>;
export type NullableCurrencySymbol = Optional<"€" | "$" | "ZŁ">;

export type MonthsData = {
  polish: string;
  index: number;
};

export type MonthsWithPolishNamesProp = Record<string, MonthsData>;

export type ResultMessageWithValueProps = {
  valueToFormat: string | number;
  profitOrLossValue: string;
  selectedCurrencyTo: string;
};

export type Color = "#4ade80" | "#fb7185" | "#f8fafc";
export type Message = "plus" | "minus" | "N/A";
export type Result = "zyskać" | "stracić";

export type Field = {
  field: string;
  setError: (msg: NullableString) => void;
};

export type Fields = Field | Field[];

type FontWeightValues =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type TextCurrencyProps = ChildProps & {
  fontWeight?: Optional<FontWeightValues>;
};

export type TextMessageProps = TextCurrencyProps & {
  color: string;
  fontSize?: Optional<string | number>;
};

export type InputDataProps = {
  emptyMetalFieldError: NullableString;
  emptyPriceMetalFieldError: NullableString;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: ChangeInputStateProps;
  valueOne: Optional<string>;
  valueTwo: Optional<string>;
};

export type InputDataWithTextValuesProps = {
  inputTitle: string;
  inputType: string;
  iconName: string;
  iconType: string;
  value: Optional<string>;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: ChangeInputStateProps;
  emptyMetalFieldError: NullableString;
  emptyFieldError: NullableString;
}[];

type AlignItemsPosition =
  | "flex-end"
  | "flex-start"
  | "center"
  | "stretch"
  | "baseline";

export type CustomPickerProps = {
  alignItems?: Optional<AlignItemsPosition>;
  selectedValue: string;
  setValue: (value: SetStateAction<string>) => void;
};

export type SubmitButtonProps = {
  title: string;
  bg?: Optional<string>;
  onPress: OnPress;
  disabled?: boolean | null | undefined;
};

export type MarketRateProps = {
  gold: MetalRate;
  silver: MetalRate;
};

export type OutputRateProps = {
  gold: MetalRates;
  silver: MetalRates;
};

type StaticMetalType = { gold: MetalRate; silver: MetalRate };

export type OutputDataProp = Record<string, OptionalMetalType>;
export type MarketRateProp = Record<string, StaticMetalType>;

export type RatesProp = Record<string, CurrencyRates> | null;

export type NullableNumber = number | null;

export type ImageSliderData = {
  title: string;
  image: ImageSourcePropType;
  flag: ImageSourcePropType;
};

export type SliderItemProps = {
  item: ImageSliderData;
  paginationIndex: number;
  onPressSelectIndex: (buttonId: number) => void;
};

export type PaginationItemProps = {
  items: ImageSliderData[];
  paginationIndex: number;
};

export type InputStateActionProp = (
  name: keyof InputsType,
  text: string,
) => void;

export type SliderProps = {
  itemList: ImageSliderData[];
  setSelectedIndex: SetState<NullableNumber>;
  formModal: ModalProps;
};

export type ScrollHandlerProp = ScrollHandlerProcessed<Record<string, unknown>>;
export type ViewableItemsChangedProps = ({
  viewableItems,
}: {
  viewableItems: ViewToken[];
}) => void;

export type ItemVisiblePercentThresholdProp = {
  itemVisiblePercentThreshold: number;
};

export type CurrentViewabilityConfigCallbackPairsProps = {
  viewabilityConfig: ItemVisiblePercentThresholdProp;
  onViewableItemsChanged: ViewableItemsChangedProps;
}[];

export type ViewabilityConfigCallbackPairsProps =
  MutableRefObject<CurrentViewabilityConfigCallbackPairsProps>;

export type UseEndReachedDataProps = {
  itemList: ImageSliderData[];
};
export type EndReachedDataProps = {
  data: ImageSliderData[];
  onEndReached: OnPress;
};

export type RenderItemProp = ({ item }: { item: ImageSliderData }) => JSX;

export type FlatlistItemsConfigProps = EndReachedDataProps & {
  paginationIndex: number;
  renderItem: RenderItemProp;
  onScroll: ScrollHandlerProp;
  currentViewabilityConfigCallbackPairs: CurrentViewabilityConfigCallbackPairsProps;
};

export type UseRenderItemProps = SliderProps & {
  paginationIndex: number;
};

type SpacingProps = {
  [K in `m${"t" | "b" | "l" | "r"}`]?: number | string;
};

export type TextProps = SpacingProps &
  ChildProps & {
    color?: Optional<string>;
    mt?: Optional<string>;
  };

export type SectionProps = TextProps & {
  title?: Optional<string>;
};

export type OptionsDataProps = {
  headerTitle: string;
  fontFamily: "MaterialIcons" | "Entypo";
  iconName: string;
  iconColor: string;
  content: JSX;
};

export type TextsProps = {
  option1: {
    main: string;
    title: string;
    description: string;
  };
  option2: {
    firstTitle: string;
    firstText: string;
    secondTitle: string;
    secondText: string;
  };
  option3: {
    main: string;
  };
};

export type OptionProps = ChildProps & {
  fontFamily: "Entypo" | "MaterialIcons";
  iconName: string;
  iconColor: string;
  headerTitle: string;
};

export type Currency = "USD" | "EUR" | "PLN";

export type TrendInfo = {
  changePercent: number;
  direction: "up" | "down" | "neutral";
  color: string;
};

export type ChartDetailsProps = {
  chartData1: Optional<lineDataItem[]>;
  chartData2: Optional<lineDataItem[]>;
};

type ExchangeRatesProp = Record<string, Record<string, RateEntry>> | null;

export type CurrencyConverterProps = ChartDetailsProps & {
  exchangeRates: ExchangeRatesProp;
  loadingScreenData: boolean;
  error: NullableString;
  formModal: ModalProps;
  headerTitle: string;
  targetCurrency: Currency;
  firstCurrency: Currency;
  secondCurrency: Currency;
  thirdCurrency: Currency;
  firstCurrencyName: string;
  secondCurrencyName: string;
  trends: Trends;
};

export type RateEntry = {
  base: string;
  date: string;
  rates: { targetCurrency: number };
};

export type ExchangeRates = {
  rates: Record<string, number>;
  base: string;
  date: string;
};

export type CombinedExchangeRates = Record<string, Record<string, RateEntry>>;

export type Averages = Record<string, number>;

export type HistoricalRates = {
  [base in Currency]?: {
    [date: string]: Averages;
  };
};

type HistoricalRatesProp = {
  [date: string]: Record<string, number>;
};

export type HistoricalDataResponse = {
  rates: HistoricalRatesProp;
  base: string;
  start_date: string;
  end_date: string;
};

export type CombinedRates = {
  [date: string]: {
    EUR: { USD: number; PLN: number };
    USD: { EUR: number; PLN: number };
    PLN: { EUR: number; USD: number };
  };
};

export type Trend = Record<string, { symbol: string; color: string }>;

export type Trends = Record<
  Currency,
  Record<Currency, { symbol: string; color: string }>
> | null;

export type TrendsResult = Record<
  Currency,
  Record<
    string,
    {
      symbol: string;
      color: string;
    }
  >
>;

export type TrendProp = Record<Currency, Trend>;

export type CombinedRatesValues =
  | {
      USD: number;
      PLN: number;
    }
  | {
      EUR: number;
      PLN: number;
    }
  | {
      EUR: number;
      USD: number;
    };

type LabelText = {
  color: string;
  width: number;
};

export type ItemType = {
  value?: Optional<number>;
  labelTextStyle?: Optional<LabelText>;
  labelComponent: Function;
  label: String;
};

export type ConvertValuesProps = {
  exchangeRates: ExchangeRatesProp;
  targetCurrency: Currency;
};

type AsyncCallback = () => Promise<void>;

export type UseFetchedMetalRatesProps = {
  rates: RatesProp;
  errorMessage: NullableString;
  apiDate: NullableString;
  marketRate: MarketRateProp;
  loadingData: boolean;
  getMetalRates: AsyncCallback;
};

export type UseFetchedCurrencyRatesProps = {
  loadingScreenData: boolean;
  error: NullableString;
  exchangeRates: CombinedExchangeRates | null;
  historicalRates: HistoricalRates;
  trends: Trends;
  getExchangeRates: AsyncCallback;
  getHistoricalRates: AsyncCallback;
};

type CurrencyNamesProps = {
  firstCurrencyName: string;
  secondCurrencyName: string;
  firstCurrency: Currency;
  secondCurrency: Currency;
};

export type CurrencyConverterScreenProps = ChartDetailsProps &
  CurrencyNamesProps & {
    headerTitle: string;
    targetCurrency: Currency;
    thirdCurrency: Currency;
  };

export type CurrencyConverterModalProps = {
  formModal: ModalProps;
  loadingScreenData: boolean;
  error: NullableString;
  exchangeRates: CombinedExchangeRates | null;
  trends: Trends;
};

export type ModalContentMapProp = { [key: number]: JSX };

export type MetalRatesProps = {
  metalRates: UseFetchedMetalRatesProps;
  formModal: ModalProps;
};

export type InputsStateProps = {
  inputOne: string;
  inputTwo: string;
};

export type UseCurrencyRatesProps = {
  currencyRates: UseFetchedCurrencyRatesProps;
  formModal: ModalProps;
};

export type ItemProp = {
  createCurrencyConverterScreen: (props: CurrencyConverterScreenProps) => JSX;
};

type ChartDataFields = {
  label: string;
  value: number;
}[];

export type CurrencyRatesData = {
  id: number;
  headerTitle: string;
  chartData1: ChartDataFields;
  chartData2: ChartDataFields;
  firstCurrency: Currency;
  secondCurrency: Currency;
  thirdCurrency: Currency;
  targetCurrency: Currency;
  firstCurrencyName: string;
  secondCurrencyName: string;
}[];

export type ChartsDataProp = {
  historicalRates: HistoricalRates;
};

export type ConverterResultValuesProps = {
  firstCurrencyName: string;
  secondCurrencyName: string;
  convertedValues: Record<string, number>;
  convertedAmount: string;
  targetCurrency: Currency;
  firstCurrency: Currency;
  secondCurrency: Currency;
  trends: Trends;
};

export type ConverterInputWithButtonProps = {
  targetCurrency: Currency;
  ratesForBase: Record<string, RateEntry> | null;
  emptyFieldError: NullableString;
  inputAmount: string;
  onChangeTextInputState: (text: string) => void;
  onPressConvert: OnPress;
};

export type ConverterChartProps = ChartDetailsProps & {
  currencyName: string;
  currency: Currency;
  isOtherChart: boolean;
  color: string;
};

export type ModalContentMapProps = {
  metalRates: UseFetchedMetalRatesProps;
  selectedIndex: NullableNumber;
  modalContentMap: ModalContentMapProp;
};

export type SliderWithOptionsInfoProps = {
  setSelectedIndex: SetState<NullableNumber>;
  formModal: ModalProps;
};

export type GlassCurrencyCardProps = ChildProps & {
  convertedAmount: string;
  targetCurrency: Currency;
};

export type ArrowIconProp = {
  name: string;
};

export type CurrencyValueWithSymbolProps = {
  value: number;
  currency: string;
  children?: Children;
};

export type ExchangeValuesWithInputTitleProps = {
  targetCurrency: Currency;
  ratesForBase: Record<string, RateEntry> | null;
};

export type CurrencyChangePercentProps = {
  isOtherChart: boolean;
  trendInfoForChart1: TrendInfo;
  trendInfoForChart2: TrendInfo;
};

export type TrendDirection = "up" | "down" | "neutral";
export type IconDirection = "arrow-up" | "arrow-down" | "minus";

export type ChartsData = {
  currencyName: string;
  currency: Currency;
  color: string;
  isOtherChart: boolean;
}[];

export type ConverterChartsHeaderProp = {
  exchangeRates: ExchangeRatesProp;
};

export type ConverterRenderChartsProps = ConverterChartsHeaderProp &
  ChartDetailsProps & {
    firstCurrencyName: string;
    secondCurrencyName: string;
    firstCurrency: Currency;
    secondCurrency: Currency;
  };

export type ChartScalePositionProps = {
  yMin: number;
  yMax: number;
};

type ChartDataKey =
  | "chartDataEURforUSD"
  | "chartDataPLNforUSD"
  | "chartDataUSDforPLN"
  | "chartDataUSDforEUR"
  | "chartDataEUR"
  | "chartDataPLN";

type ChartDataProps = {
  label: string;
  value: number;
};

export type Chart = {
  [K in ChartDataKey]: ChartDataProps[];
};

export type MetalRatesPromiseProps = {
  setLoadingData: SetState<boolean>;
  setErrorMessage: SetState<NullableString>;
  setApiDate: SetState<NullableString>;
  setRates: SetState<RatesProp>;
  setMarketRate: SetState<MarketRateProp>;
};

export type ExchangeRatesDataProp = {
  data: ExchangeRates;
};

export type UseAllRatesProps = {
  formModal: ModalProps;
};

export type ChartHeaderProps = {
  w?: string | Optional<number>;
  title: string;
  subtitle: string;
};

type CommonProps = {
  children?: Optional<Children>;
  animation?: Optional<AnimationType>;
  delay?: Optional<number>;
  duration?: Optional<number>;
};

export type AnimatedElementProps =
  | (CommonProps & { as: "Text"; style?: TextStyle } & React.ComponentProps<
        typeof RNText
      >)
  | (CommonProps & { as: "View"; style?: ViewStyle } & React.ComponentProps<
        typeof RNView
      >);

export type AnimationType =
  | "fadeIn"
  | "slideUp"
  | "slideDown"
  | "scaleIn"
  | "scaleUp"
  | "fadeInUp";

export type Transforms = {
  translateY?: Optional<number>;
  scale?: Optional<number>;
}[];

export type AnimationConfig = {
  init: () => {
    opacity?: Optional<number>;
    translateY?: Optional<number>;
    scale?: Optional<number>;
  };
  animate: (
    opacity: any,
    translateY: any,
    scale: any,
    duration: number,
  ) => void;
};

export type Item = {
  uniqueKey: number;
  id: number;
  name: string;
  amount: string;
  weight: string;
  price: string;
};

export type EditableInputProps = {
  value: string;
  onChange: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};

export type ItemInputsProps = {
  items: Item[];
  addItem: (item: Item) => void;
  addItemModal: ModalProps;
};

type ScrollHandler = {
  scrollHandler: ScrollHandlerProp;
};

type AnimatedStyle = {
  animatedStyle: {
    transform: {
      translateY: number;
    }[];
    opacity: number;
    shadowOpacity: number;
  };
};

export type ItemBottomCardAnimationProps = ScrollHandler & AnimatedStyle;

export type ItemsListProps = ScrollHandler & {
  items: Item[];
  editingId: NullableNumber;
  saveItem: (id: number, updated: Partial<Item>) => void;
  deleteItem: (id: number) => void;
  editStartItem: (item: Item) => void;
};

export type LocalStorageItemsProps = {
  metalType: MetalType;
  setItems: SetState<Item[]>;
  items: Item[];
};

export type CalculatedItemValuesProps = {
  items: Item[];
  rates: Record<string, CurrencyRates> | null;
  metalType: MetalType;
};

export type ItemFieldValuesProp = "amount" | "weight" | "price";

export type ChangeNumericProps = {
  field: ItemFieldValuesProp;
  text: string;
  changeText: (field: string, value: string) => void;
};

export type ItemSheetScreenProps = {
  sheetModal: ModalProps;
  metalType: MetalType;
  rates: Record<string, CurrencyRates> | null;
};

export type TextAlign = "left" | "center" | "right";

export type ItemRow<T> = {
  flex: number;
  name?: Optional<string>;
  textAlign: TextAlign;
  render: (item: T) => React.ReactNode;
};

export type ItemAddInputsProps = {
  name?: Optional<string>;
  amount?: Optional<string>;
  weight?: Optional<string>;
  price?: Optional<string>;
  changeText: (field: string, value: string) => void;
  changeNumericAction: (field: ItemFieldValuesProp, text: string) => void;
  formatOnBlur: (value: string) => string;
  setAmount: (value: SetStateAction<string>) => void;
  setWeight: (value: SetStateAction<string>) => void;
  setPrice: (value: SetStateAction<string>) => void;
};

export type ItemAddInputsData = (props: ItemAddInputsProps) => {
  flex: number;
  fieldName: string;
  placeholder: string;
  keyboardType?: Optional<KeyboardTypeOptions>;
  value?: Optional<string>;
  onChangeText?: (text: string) => void;
  onBlur?: Optional<(e: NativeSyntheticEvent<TextInputFocusEventData>) => void>;
  icon: React.JSX.Element;
}[];

export type EditableItemRowsProps = {
  item: Item;
  onSave: (updated: Partial<Item>) => void;
  onDelete: () => void;
  editingId: NullableNumber;
};

type CalculatedItem = {
  calculatedItem: {
    selectedCurrency: Currency;
    setSelectedCurrency: SetState<Currency>;
    totalWeight: string;
    totalPrice: string;
    realPrice: string;
    profit: string;
    profitAbs: string;
  };
};

export type ItemPickedCurrencyWithRateProps = CalculatedItem & {
  metalType: MetalType;
  rates: Record<string, CurrencyRates> | null;
};

export type ItemCurrencyPickerProps = CalculatedItem;

export type ItemAddMenuProps = CalculatedItem &
  AnimatedStyle & {
    addItemModal: ModalProps;
    editingId: NullableNumber;
    metalType: MetalType;
  };

export type ItemAddButtonProps = {
  addItemModal: ModalProps;
};

export type ItemMenuResultValuesDataProps = CalculatedItem & {
  metalType: MetalType;
};

export type ItemMenuResultValuesData = {
  title: string;
  value: string;
  iconColor: string;
  iconName: string;
}[];

export type ItemMenuProfitValueProps = CalculatedItem;

export type ResultIconName =
  | "keyboard-double-arrow-down"
  | "keyboard-double-arrow-up"
  | "block";
export type ResultIconColor = "crimson" | "lime" | "white";

export type ItemAddInputsFormProps = ItemInputsProps;
export type EditableItemInputsDataProps = ItemAddInputsProps;
export type ItemAddFormProps = ItemInputsProps;
export type ItemMenuResultValuesProps = ItemMenuResultValuesDataProps;
export type ItemCurrencyHeaderWithAddedItemsProps = ItemsListProps;
