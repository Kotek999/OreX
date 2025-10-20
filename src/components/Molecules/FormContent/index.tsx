import React, { useState } from "react";
import { Div as View } from "react-native-magnus";
import { CalculatedMetalPrice } from "../../../components/Atoms/CalculatedMetalPrice";
import { FormHeader } from "../../Atoms/FormHeader";
import { ScrollViewContainer } from "../../Atoms/ScrollViewContainer";
import { FormInputFields } from "../../Atoms/FormInputFields";
import { CurrencyPicker } from "../../Atoms/CurrencyPicker";
import { currencySymbols } from "../../../helpers/data/currencyData";
import { screenWidth } from "../../../helpers/dimensions";
import { AnimatedElement } from "../../Atoms/AnimatedElement";
import { JSX, NullableString, FormContentProps } from "../../../types";

export const FormContent = (props: FormContentProps): JSX => {
  const [emptyGoldFieldError, setEmptyGoldFieldError] =
    useState<NullableString>(null);
  const [emptyPriceGoldFieldError, setEmptyPriceGoldFieldError] =
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
            emptyGoldFieldError={emptyGoldFieldError}
            emptyPriceGoldFieldError={emptyPriceGoldFieldError}
            {...props}
          />
        </AnimatedElement>
        <CurrencyPicker {...props} />
        <AnimatedElement as="View" animation="slideUp" duration={2000}>
          <CalculatedMetalPrice
            currencies={currencySymbols}
            setErrorMessages={{
              setEmptyFieldError: setEmptyGoldFieldError,
              setEmptyPriceFieldError: setEmptyPriceGoldFieldError,
            }}
            {...props}
          />
        </AnimatedElement>
      </ScrollViewContainer>
    </View>
  );
};
