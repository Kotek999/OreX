import React, { memo } from "react";
import Animated from "react-native-reanimated";
import { TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { Div as View, Text, Image } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { JSX, SliderItemProps } from "../../../types";

export const SliderItem = memo((props: SliderItemProps): JSX => {
  const onPressSelectIndex = (): void =>
    props.onPressSelectIndex(props.paginationIndex + 1);

  return (
    <Animated.View style={styles.animatedContainer}>
      <TouchableOpacity onPress={onPressSelectIndex}>
        <ImageBackground
          resizeMode="cover"
          resizeMethod="scale"
          alt="photo"
          source={props.item.image}
          width={screenWidth / 1.5}
          height={400}
          borderRadius={20}
          style={styles.imageContainer}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.gradientContainer}
          >
            <View flex={1} alignItems="flex-end" flexDir="row">
              <View
                flex={1}
                flexDir="row"
                justifyContent="space-around"
                alignItems="center"
              >
                <View flex={1} flexDir="column" style={{ gap: 10 }}>
                  <Text
                    color="#fafafa"
                    fontSize={24}
                    fontWeight="bold"
                    letterSpacing={1.5}
                  >
                    {props.item.title}
                  </Text>
                  <Text
                    color="#cbd5e1"
                    fontSize={12}
                    fontWeight="400"
                    letterSpacing={1.5}
                  >
                    {props.item.description}
                  </Text>
                </View>
                <View alignItems="flex-end">
                  <Image
                    source={props.item.flag}
                    style={{ width: 35, height: 35 }}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  animatedContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    width: screenWidth,
  },
  imageContainer: {
    width: screenWidth / 1.5,
    height: 400,
    borderRadius: 20,
    justifyContent: "space-between",
    padding: 20,
  },
  gradientContainer: {
    position: "absolute",
    height: 400,
    width: screenWidth / 1.5,
    padding: 20,
    borderRadius: 20,
    justifyContent: "space-between",
  },
});
