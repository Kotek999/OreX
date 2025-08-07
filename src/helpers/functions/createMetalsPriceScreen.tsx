import { MetalsPrice } from "../../components/Organisms/Screens/MetalsPrice";
import { JSX, MetalsPriceProps } from "../../types";

export const createMetalsPriceScreen = (props: MetalsPriceProps): JSX => (
  <MetalsPrice {...props} />
);
