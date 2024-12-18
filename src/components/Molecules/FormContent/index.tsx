import React, { useState } from "react";
import { Div as View } from "react-native-magnus";
import { CalculatedMetalPrice } from "../../../components/Atoms/CalculatedMetalPrice";
import { FormHeader } from "../../Atoms/FormHeader";
import { ScrollViewContainer } from "../../Atoms/ScrollViewContainer";
import { FormInputFields } from "../../Atoms/FormInputFields";
import { CurrencyPicker } from "../../Atoms/CurrencyPicker";
import { JSX, NullableString, FormContentProps } from "../../../types";
import { currencySymbols } from "../../../helpers/data/currencySymbols";

export const FormContent = (props: FormContentProps): JSX => {
  const [emptyGoldFieldError, setEmptyGoldFieldError] =
    useState<NullableString>(null);
  const [emptyPriceGoldFieldError, setEmptyPriceGoldFieldError] =
    useState<NullableString>(null);

  return (
    <View alignItems="center" justifyContent="center">
      <FormHeader {...props} />
      <ScrollViewContainer>
        <FormInputFields
          valueOne={props.inputs.inputOne}
          valueTwo={props.inputs.inputTwo}
          emptyGoldFieldError={emptyGoldFieldError}
          emptyPriceGoldFieldError={emptyPriceGoldFieldError}
          {...props}
        />
        <CurrencyPicker {...props} />
        <CalculatedMetalPrice
          currencies={currencySymbols}
          setErrorMessages={{
            setEmptyFieldError: setEmptyGoldFieldError,
            setEmptyPriceFieldError: setEmptyPriceGoldFieldError,
          }}
          {...props}
        />
      </ScrollViewContainer>
    </View>
  );
};
