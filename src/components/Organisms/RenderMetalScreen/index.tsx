import React, { useState } from "react";
import { Div as View } from "react-native-magnus";
import { CalculatedMetalPrice } from "../../Atoms/CalculatedMetalPrice";
import { FormHeader } from "../../Atoms/FormHeader";
import { ScrollViewContainer } from "../../Atoms/ScrollViewContainer";
import { FormInputFields } from "../../Atoms/FormInputFields";
import { CurrencyPicker } from "../../Atoms/CurrencyPicker";
import { currencySymbols } from "../../../helpers/data/currencyData";
import { screenWidth } from "../../../helpers/dimensions";
import { AnimatedElement } from "../../Atoms/AnimatedElement";
import { SubmitButton } from "../../Atoms/SubmitButton";
import { JSX, NullableString, MetalScreenProps } from "../../../types";

export const RenderMetalScreen = (props: MetalScreenProps): JSX => {
  const [emptyMetalFieldError, setEmptyMetalFieldError] =
    useState<NullableString>(null);
  const [emptyPriceMetalFieldError, setEmptyPriceMetalFieldError] =
    useState<NullableString>(null);

  return (
    <View alignItems="center" justifyContent="center">
      <AnimatedElement as="View" animation="slideUp" duration={2000}>
        <FormHeader w={screenWidth - 50} {...props} />
      </AnimatedElement>
      <ScrollViewContainer>
        <AnimatedElement
          as="View"
          animation="fadeInUp"
          delay={100}
          duration={2000}
        >
          <FormInputFields
            valueOne={props.inputs.inputOne}
            valueTwo={props.inputs.inputTwo}
            emptyMetalFieldError={emptyMetalFieldError}
            emptyPriceMetalFieldError={emptyPriceMetalFieldError}
            {...props}
          />
        </AnimatedElement>
        <CurrencyPicker {...props} />
        <AnimatedElement as="View" animation="slideUp" duration={2000}>
          <CalculatedMetalPrice
            currencies={currencySymbols}
            setErrorMessages={{
              setEmptyFieldError: setEmptyMetalFieldError,
              setEmptyPriceFieldError: setEmptyPriceMetalFieldError,
            }}
            {...props}
          />
          <SubmitButton
            bg="#10b981"
            title="Arkusz"
            onPress={() => props.sheetModal.onPressOpenModal()}
          />
        </AnimatedElement>
      </ScrollViewContainer>
    </View>
  );
};
