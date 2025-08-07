import React from "react";
import { Div as View, Text } from "react-native-magnus";
import { GlassCurrencyCard } from "../GlassCurrencyCard";
import { CurrencyValueWithSymbol } from "../CurrencyValueWithSymbol";
import { JSX, Currency, ConverterResultValuesProps } from "../../../types";

export const ConverterResultValues = (
  props: ConverterResultValuesProps
): JSX => {
  return (
    <View>
      <Text
        flex={1}
        mt={4}
        color="#e2e8f0"
        fontSize={14}
        fontWeight="600"
        letterSpacing={0.8}
      >
        {`Przeliczone wartości (${props.firstCurrencyName}, ${props.secondCurrencyName})`}
      </Text>
      <View mt={20} mb={20} alignItems="center">
        {Object.keys(props.convertedValues).length > 0 ? (
          <GlassCurrencyCard
            convertedAmount={props.convertedAmount}
            targetCurrency={props.targetCurrency}
          >
            {Object.entries(props.convertedValues).map(([currency, value]) => {
              const trend =
                props.trends?.[props.targetCurrency as Currency]?.[
                  currency as Currency
                ];
              return (
                <View key={currency}>
                  <CurrencyValueWithSymbol value={value} currency={currency}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: trend?.color,
                      }}
                    >
                      {trend?.symbol || ""}
                    </Text>
                  </CurrencyValueWithSymbol>
                </View>
              );
            })}
          </GlassCurrencyCard>
        ) : (
          <GlassCurrencyCard
            convertedAmount="0"
            targetCurrency={props.targetCurrency}
          >
            {[props.firstCurrency, props.secondCurrency].map(
              (currency, index) => (
                <CurrencyValueWithSymbol
                  key={index}
                  value={0.0}
                  currency={currency}
                />
              )
            )}
          </GlassCurrencyCard>
        )}
      </View>
    </View>
  );
};
