import React from "react";
import Animated from "react-native-reanimated";
import { TouchableOpacity, ImageBackground } from "react-native";
import { Div as View, Text, Icon } from "react-native-magnus";
import { screenWidth } from "../../../helpers/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { JSX, ImageSliderData } from "../../../types";

type SliderItemProps = {
  item: ImageSliderData;
  paginationIndex: number;
  onPressSelectButton: (buttonId: number) => void;
};

export const SliderItem = (props: SliderItemProps): JSX => {
  return (
    <Animated.View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          width: screenWidth,
        },
      ]}
    >
      <ImageBackground
        resizeMode="cover"
        resizeMethod="scale"
        alt="photo"
        source={props.item.image}
        style={{
          width: screenWidth - 40,
          height: 600,
          borderRadius: 20,
        }}
        borderRadius={20}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{
            position: "absolute",
            height: 600,
            width: screenWidth - 40,
            padding: 20,
            borderRadius: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(0,0,0,0.3)",
                padding: 5,
                borderRadius: 30,
              }}
            >
              {/* flags here */}
              <Icon
                fontSize="3xl"
                name="flag"
                color="lime"
                fontFamily="Entypo"
              />
              {/* <Icon
                  fontSize="xl"
                  name="exclamation-circle"
                  color="#ef4444"
                  fontFamily="FontAwesome5"
                /> */}
            </TouchableOpacity>
          </View>
          {/* <View style={{ position: "absolute", bottom: 0, right: 0 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                  padding: 5,
                  borderRadius: 30,
                }}
              >
                <Text style={{ color: "white" }}>Hejo</Text>
              </TouchableOpacity>
            </View> */}
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1, gap: 10, flexDirection: "column" }}>
                <Text
                  style={{
                    color: "red",
                    fontSize: 18,
                    fontWeight: "600",
                    letterSpacing: 1.5,
                  }}
                >
                  {props.item.title}
                </Text>
                <Text
                  style={{ color: "red", fontSize: 12, letterSpacing: 1.2 }}
                >
                  {props.item.description}
                </Text>
              </View>
              <View style={{}}>
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderRadius: 30,
                  }}
                  onPress={() =>
                    props.onPressSelectButton(props.paginationIndex + 1)
                  }
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      fontWeight: "600",
                      letterSpacing: 1.5,
                    }}
                  >
                    sprawdź
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Animated.View>
  );
};
