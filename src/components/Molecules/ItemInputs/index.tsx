import React, { memo } from "react";
import { Input, Text, Div as View } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { screenWidth } from "../../../helpers/dimensions";
import { useItemAddInputs } from "../../../hooks/useItemAddInputs";
import { SubmitButton } from "../../Atoms/SubmitButton";
import { JSX, ItemInputsProps } from "../../../types";

export const ItemInputs = memo((props: ItemInputsProps): JSX => {
  const { addItem, isValid, itemAddInputs } = useItemAddInputs({ ...props });

  return (
    <View>
      <View flex={0.7} justifyContent="space-evenly">
        {itemAddInputs.map((input, i) => (
          <View
            key={i}
            flex={input.flex}
            mt={14}
            flexDir="column"
            alignSelf="center"
          >
            <Text
              mb={14}
              letterSpacing={0.8}
              fontSize={RFValue(12)}
              fontWeight="bold"
              color="#f8fafc"
            >
              {input.fieldName}
            </Text>
            <View w={screenWidth / 1.5} flexDir="row">
              <Input
                flex={6}
                h={50}
                bg="#cffafe"
                placeholder={input.placeholder}
                focusBorderColor="blue700"
                keyboardType={input.keyboardType}
                value={input.value}
                onChangeText={input.onChangeText}
                onBlur={input.onBlur}
                suffix={input.icon}
                style={{ textAlignVertical: "center" }}
              />
            </View>
          </View>
        ))}
        <View style={{ margin: 14 }}>
          <SubmitButton
            title="Dodaj"
            onPress={addItem}
            bg={isValid ? "#10b981" : "gray300"}
            disabled={!isValid}
          />
        </View>
      </View>
    </View>
  );
});
