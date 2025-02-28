import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Div as View, Text, Icon } from "react-native-magnus";
import { JSX, FormHeaderProps } from "../../../types";

export const FormHeader = (props: FormHeaderProps): JSX => {
  return (
    <View w={props.w}>
      <View
        p={10}
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <View>
          <Text
            color="#f8fafc"
            fontSize={28}
            fontWeight="600"
            letterSpacing={1}
          >
            {props.headerTitle}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.opacityContainer}
          onPress={() => props.formModal.onPressCloseModal()}
        >
          <Icon
            fontSize="6xl"
            name="close-sharp"
            color="#f43f5e"
            fontFamily="Ionicons"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  opacityContainer: {
    padding: 16,
    borderRadius: 30,
  },
});
