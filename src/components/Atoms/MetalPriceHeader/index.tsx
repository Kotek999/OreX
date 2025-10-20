import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Div as View, Text, Icon } from "react-native-magnus";
import { RFValue } from "react-native-responsive-fontsize";
import { screenWidth } from "../../../helpers/dimensions";
import { JSX, MetalPriceHeaderProps } from "../../../types";

export const MetalPriceHeader = (props: MetalPriceHeaderProps): JSX => {
  return (
    <View w={screenWidth - 6}>
      <View flexDir="row" alignItems="center">
        <TouchableOpacity
          style={styles.opacityContainer}
          onPress={() => props.metalModal.onPressCloseModal()}
        >
          <Icon
            fontSize="5xl"
            name="arrow-back-circle-sharp"
            color="#e2e8f0"
            fontFamily="Ionicons"
          />
        </TouchableOpacity>
        <Text
          color="#f8fafc"
          fontSize={RFValue(20)}
          fontWeight="600"
          letterSpacing={1}
        >
          {props.headerTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  opacityContainer: {
    padding: 12,
    borderRadius: 30,
  },
});
