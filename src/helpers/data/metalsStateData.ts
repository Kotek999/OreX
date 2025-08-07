import { createMarketData } from "../functions/createMarketData";
import {
  MarketRateProps,
  OutputRateProps,
  MarketRateProp,
  OutputDataProp,
  InputsStateProps,
} from "../../types";

const inputsState: InputsStateProps = {
  inputOne: "",
  inputTwo: "",
};

const marketRateData: MarketRateProps = {
  gold: { pricePerGram: 0, pricePerOunce: 0 },
  silver: { pricePerGram: 0, pricePerOunce: 0 },
};

const outputRateData: OutputRateProps = {
  gold: { Price_OZ: 0, Price_G: 0, Price_KG: 0, Price_Tola: 0 },
  silver: { Price_OZ: 0, Price_G: 0, Price_KG: 0, Price_Tola: 0 },
};

const metalMarketData: MarketRateProp = createMarketData(marketRateData);

const metalOutputData: OutputDataProp = createMarketData(outputRateData);

export { metalMarketData, metalOutputData, inputsState };
