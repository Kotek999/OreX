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
  ViewStyle,
  ViewToken,
  Animated as AnimatedStyle,
  ImageSourcePropType,
} from "react-native";
import { ScrollHandlerProcessed } from "react-native-reanimated";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { iconFontFamilyType } from "react-native-magnus/lib/typescript/src/ui/icon/icon.type";

export type JSX = JSX.Element;
export type Dimension = "window" | "screen";
export type SetState<T> = Dispatch<SetStateAction<T>>;
export type Children = ReactNode;
export type OnPress = () => void;

export type ChildProps = {
  children: Children;
};

export type ActionCallbackFunctionProps = (...args: any[]) => void;

export type BottomModalRef = BottomSheetModal;

export type ModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModalMethods>;
  onPressOpenModal: ActionCallbackFunctionProps;
  onPressCloseModal: OnPress;
};

export type BottomModalProps = ChildProps & {
  enableContentPanningGesture?: boolean | undefined;
  snapPointsValue: string | number;
  onPressCloseModal: OnPress;
  isTitleExist?: boolean;
  isDefaultStyle?: boolean;
  styles?: StyleProp<ViewStyle | AnimatedStyle.AnimatedProps<ViewStyle>>;
  title?: string;
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

export type OptionalMetalType = {
  gold?: MetalRates;
  silver?: MetalRates;
};

export type OutputProp = Record<string, OptionalMetalType>;
export type MetalType = "gold" | "silver";

type InputOptions<T> = {
  rates: Record<string, CurrencyRates> | null;
  inputs: T;
  setLoading: SetState<boolean>;
  setOutput: SetState<OutputProp>;
};

export type MetalProps<InputsType> = InputOptions<InputsType> & {
  metalType: MetalType;
  headerTitle: string;
  loading: boolean;
  output: OutputProp;
  setInputs: SetState<InputsType>;
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
};

type CurrencyValuesProps = {
  marketRate: {
    [key: string]: { gold: MetalRate; silver: MetalRate };
  };
  apiDate: string | null;
  selectedCurrencyFrom: string;
  setSelectedCurrencyFrom: SetState<string>;
  selectedCurrencyTo: string;
  setSelectedCurrencyTo: SetState<string>;
  metalModal: ModalProps;
  formModal: ModalProps;
};

type ErrorMessagesState = {
  setErrorMessages: {
    setEmptyFieldError: SetState<string | null>;
    setEmptyPriceFieldError: SetState<string | null>;
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

export type currenciesMap = {
  gram: [string, string, string];
  euro: [string, string, string];
  złoty: [string, string, string];
  dolary: [string, string, string];
};

export type ConvertCurrencyProps = {
  grams: number;
  fromCurrency: string;
  toCurrency: string;
  metalType: MetalType;
  marketRates: Record<string, { gold: MetalRate; silver: MetalRate }>;
};

export type ChangeInputStateProps = (
  name: keyof InputsType,
  text: string,
  setInputs: (value: SetStateAction<InputsType>) => void
) => void;

export type TextInputOptionsProps = {
  name?: keyof InputsType;
  onChangeText?: ChangeInputStateProps;
  inputs?: InputsType;
  setInputs?: SetState<InputsType>;
  setSingleInput?: (value: string) => void;
};

export type ChangeTextInputProps = (
  text: string,
  options?: TextInputOptionsProps
) => void;

export type CalculateProfitOrLossProps = {
  grams: number;
  userPrice: number;
  metalType: MetalType;
  marketRates: Record<string, { gold: MetalRate; silver: MetalRate }>;
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
};

export type RenderMetalPriceScreenProps = {
  headerTitle: string;
  metalType: MetalType;
  rates: Record<string, CurrencyRates> | null;
  inputs: InputsType;
  setLoading: SetState<boolean>;
  setOutput: SetState<OutputProp>;
  loading: boolean;
  output: OutputProp;
  setInputs: SetState<InputsType>;
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
  marketRate: {
    [key: string]: {
      gold: MetalRate;
      silver: MetalRate;
    };
  };
  apiDate: string | null;
  selectedCurrencyFrom: string;
  setSelectedCurrencyFrom: SetState<string>;
  selectedCurrencyTo: string;
  setSelectedCurrencyTo: SetState<string>;
  formModal: ModalProps;
  metalModal: ModalProps;
};

export type NullableString = string | null;

export type FormContentProps = {
  metalType: MetalType;
  formModal: ModalProps;
  metalModal: ModalProps;
  headerTitle: string;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
  selectedCurrencyFrom: string;
  setSelectedCurrencyFrom: SetState<string>;
  selectedCurrencyTo: string;
  setSelectedCurrencyTo: SetState<string>;
  rates: Record<string, CurrencyRates> | null;
  setLoading: SetState<boolean>;
  setOutput: SetState<Record<string, OptionalMetalType>>;
};

export type SelectedCurrenciesWithDateProps = {
  apiDate: string | null;
  selectedCurrencyFrom: string;
  selectedCurrencyTo: string;
};

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

export type ProfitOrLossResultProps = {
  metalType: MetalType;
  inputs: InputsType;
  marketRate: MetalMarketRate;
  selectedCurrencyFrom: string;
  setSelectedCurrencyFrom: SetState<string>;
  selectedCurrencyTo: string;
  setSelectedCurrencyTo: SetState<string>;
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
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
  inputTitle: string;
  iconName: string;
  inputType: keyof InputsType;
  iconType: iconFontFamilyType | undefined;
  value: string | undefined;
};

export type FormInputFieldsProps = {
  emptyGoldFieldError: NullableString;
  emptyPriceGoldFieldError: NullableString;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
  valueOne: string | undefined;
  valueTwo: string | undefined;
};

export type FormHeaderProps = {
  formModal: ModalProps;
  headerTitle: string;
  w?: string | number | undefined;
};

export type ErrorMessageProps = {
  emptyFieldError: NullableString;
};

export type CurrencyPickerProps = {
  selectedCurrencyFrom: string;
  setSelectedCurrencyFrom: SetState<string>;
  selectedCurrencyTo: string;
  setSelectedCurrencyTo: SetState<string>;
};

export type CurrencyImageWithSubtitleProps = {
  selectedCurrencyTo: string;
};

export type UnitData = {
  title: string;
  priceType: string;
  screenWidthDividedValue: number;
}[];

export type UnitBoxProps = {
  metalType: MetalType;
  inputs: InputsType;
  output: OutputProp;
  marketRate: {
    [key: string]: {
      gold: MetalRate;
      silver: MetalRate;
    };
  };
  selectedCurrencyTo: string;
  title: string;
  priceType: string;
  screenWidthDividedValue: number;
};

export type GlassUnitCardsProps = {
  metalType: MetalType;
  inputs: InputsType;
  output: OutputProp;
  marketRate: {
    [key: string]: {
      gold: MetalRate;
      silver: MetalRate;
    };
  };
  selectedCurrencyTo: string;
};

export type MetalPriceContentProps = {
  metalType: MetalType;
  rates: Record<string, CurrencyRates> | null;
  inputs: InputsType;
  setLoading: SetState<boolean>;
  setOutput: SetState<OutputProp>;
  loading: boolean;
  output: OutputProp;
  setInputs: SetState<InputsType>;
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
  marketRate: {
    [key: string]: {
      gold: MetalRate;
      silver: MetalRate;
    };
  };
  apiDate: string | null;
  selectedCurrencyFrom: string;
  setSelectedCurrencyFrom: SetState<string>;
  selectedCurrencyTo: string;
  setSelectedCurrencyTo: SetState<string>;
  formModal: ModalProps;
};

export type MetalPriceProps = {
  metalType: MetalType;
  priceType: keyof MetalRates;
  inputs: { inputOne: string };
  output: Record<string, OptionalMetalType>;
  selectedCurrencyTo: string;
};

export type NullableImageSource = ImageSourcePropType | undefined;
export type NullableCurrencySymbol = "€" | "$" | "ZŁ" | undefined;

export type MonthsData = {
  polish: string;
  index: number;
};

export type MonthsWithPolishNamesProp = Record<string, MonthsData>;

export type TextResultProps = ChildProps & {
  color: string;
};

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
  setError: (msg: string | null) => void;
};

export type Fields = Field | Field[];

export type TextMessageProps = ChildProps & {
  color: string;
  fontWeight?:
    | "bold"
    | "normal"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  fontSize?: string | number | undefined;
};

export type InputDataProps = {
  emptyGoldFieldError: NullableString;
  emptyPriceGoldFieldError: NullableString;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
  valueOne: string | undefined;
  valueTwo: string | undefined;
};

export type InputDataWithTextValuesProps = {
  inputTitle: string;
  inputType: string;
  iconName: string;
  iconType: string;
  value: string | undefined;
  inputs: InputsType;
  setInputs: SetState<InputsType>;
  onChangeText: (
    name: keyof InputsType,
    text: string,
    setInputs: SetState<InputsType>
  ) => void;
  emptyGoldFieldError: NullableString;
  emptyFieldError: NullableString;
}[];

export type CustomPickerProps = {
  alignItems?: "flex-end" | "flex-start" | "center" | "stretch" | "baseline";
  selectedValue: string;
  setValue: (value: SetStateAction<string>) => void;
};

export type TextMessageLargeProps = ChildProps & {
  color: string;
};

export type SubmitButtonProps = {
  title: string;
  onPress: OnPress;
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
  description: string;
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
  text: string
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
