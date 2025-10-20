import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { FormHeader } from "../../../components/Atoms/FormHeader";
import { useConvertValues } from "../../../hooks/useConvertValues";
import { ConverterInputWithButton } from "../../Atoms/ConverterInputWithButton";
import { ConverterResultValues } from "../../Atoms/ConverterResultValues";
import { NotAvailableData } from "../../Atoms/NotAvailableData";
import { ConverterRenderCharts } from "../../Molecules/ConverterRenderCharts";
import { AnimatedElement } from "../../Atoms/AnimatedElement";
import { JSX, CurrencyConverterProps } from "../../../types";

export const CurrencyConverter = (props: CurrencyConverterProps): JSX => {
  const converter = useConvertValues({
    exchangeRates: props.exchangeRates,
    targetCurrency: props.targetCurrency,
  });

  if (!converter.hasData) {
    return <Text>Brak danych</Text>;
  }

  return (
    <>
      {props.loadingScreenData ? (
        <ActivityIndicator size="large" color="#10b981" />
      ) : props.error ? (
        <Text color="red">{props.error}</Text>
      ) : props.exchangeRates ? (
        <>
          <AnimatedElement as="View" animation="slideUp" duration={2000}>
            <FormHeader
              w={screenWidth - 20}
              headerTitle={props.headerTitle}
              formModal={props.formModal}
            />
          </AnimatedElement>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <AnimatedElement
              as="View"
              animation="fadeInUp"
              delay={150}
              duration={2000}
            >
              <ConverterInputWithButton
                inputAmount={converter.inputAmount}
                onPressConvert={converter.onPressConvert}
                onChangeTextInputState={converter.onChangeTextInputState}
                emptyFieldError={converter.emptyFieldError}
                ratesForBase={converter.ratesForBase}
                targetCurrency={props.targetCurrency}
              />
            </AnimatedElement>
            <AnimatedElement
              as="View"
              animation="slideUp"
              delay={200}
              duration={2000}
            >
              <ConverterResultValues
                {...props}
                convertedValues={converter.convertedValues}
                convertedAmount={converter.convertedAmount}
              />
            </AnimatedElement>
            <AnimatedElement
              as="View"
              animation="fadeInUp"
              delay={400}
              duration={2000}
            >
              <ConverterRenderCharts {...props} />
            </AnimatedElement>
          </ScrollView>
        </>
      ) : (
        <NotAvailableData />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignSelf: "center",
    width: screenWidth - 20,
    flexGrow: 1,
  },
});
