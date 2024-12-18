import React from "react";
import { Div as View } from "react-native-magnus";
import { unitData } from "../../../helpers/data/unitData";
import { UnitBox } from "../../Atoms/UnitBox";
import { JSX, GlassUnitCardsProps } from "../../../types";

export const GlassUnitCards = (props: GlassUnitCardsProps): JSX => {
  return (
    <View flexDir="row">
      {unitData.map((column, columnIndex) => (
        <View key={columnIndex} flexDir="column">
          {column.map((card, cardIndex) => (
            <UnitBox
              key={cardIndex}
              title={card.title}
              priceType={card.priceType}
              screenWidthDividedValue={card.screenWidthDividedValue}
              {...props}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
