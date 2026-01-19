import React from "react";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Div as View, Image } from "react-native-magnus";
import { screenWidth } from "../helpers/dimensions";
import { welcomeScreenBg } from "../helpers/imageRequirements";
import { TextMessageLarge } from "../components/Atoms/TextMessageLarge";
import { SubmitButton } from "../components/Atoms/SubmitButton";
import { AnimatedElement } from "../components/Atoms/AnimatedElement";
import { JSX, OnPress } from "../types";

export default function Welcome(): JSX {
  const onPressNavigateToHomeScreen: OnPress = () => router.replace("/home");

  return (
    <View flex={1} bg="#030712">
      <View alignSelf="center">
        <Image
          resizeMode="cover"
          resizeMethod="scale"
          alt="photo"
          flex={1}
          w={screenWidth}
          source={welcomeScreenBg}
        />
        <View flex={1} alignItems="center" justifyContent="center" mb={40}>
          <AnimatedElement
            as="Text"
            animation="fadeInUp"
            delay={300}
            duration={1300}
          >
            <TextMessageLarge color="#fafafa">
              Łatwo przeliczaj złoto, srebro i waluty na wartości{" "}
              <TextMessageLarge color="#6ee7b7">Tobie</TextMessageLarge>{" "}
              odpowiadające po bieżących kursach.
            </TextMessageLarge>
          </AnimatedElement>
        </View>
      </View>
      <View position="absolute" alignSelf="center" bottom={45}>
        <AnimatedElement as="View" animation="slideUp" duration={1500}>
          <SubmitButton
            bg="#10b981"
            title="Zacznij przeliczać!"
            onPress={onPressNavigateToHomeScreen}
          />
        </AnimatedElement>
      </View>
      <StatusBar style="light" backgroundColor="transparent" />
    </View>
  );
}
