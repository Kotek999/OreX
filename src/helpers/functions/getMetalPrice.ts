import { formatNumber } from "../../helpers/functions/formatNumber";
import { MetalPriceProps } from "../../types";

export const getMetalPrice = (props: MetalPriceProps): string => {
  return formatNumber(
    parseFloat(
      Number(
        props.output[props.selectedCurrencyTo]?.[props.metalType]?.[
          props.priceType
        ]
      ).toString()
    ) / parseFloat(props.inputs.inputOne)
  );
};
