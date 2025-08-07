import { Dimensions } from "react-native";
import { Dimension } from "../../types";

const nameOfDimension: Dimension = "window";

const screenWidth: number = Dimensions.get(nameOfDimension).width;
const screenHeight: number = Dimensions.get(nameOfDimension).height;

export { screenWidth, screenHeight };
