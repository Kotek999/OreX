import React from "react";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Div as View, Image } from "react-native-magnus";
import { screenWidth } from "../helpers/dimensions";
import { welcomeScreenBg } from "../helpers/imageRequirements";
import { TextMessageLarge } from "../components/Atoms/TextMessageLarge";
import { SubmitButton } from "../components/Atoms/SubmitButton";
import { JSX } from "../types";

// #000000c0

export default function Welcome(): JSX {
  const onPressNavigateToHomeScreen = () => router.navigate("/home");

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
        <View flex={1} justifyContent="center">
          <TextMessageLarge color="#fafafa">
            Łatwo przeliczaj złoto i srebro na odpowiadające{" "}
            <TextMessageLarge color="#6ee7b7">Tobie</TextMessageLarge> waluty po
            aktualnych kursach.
          </TextMessageLarge>
        </View>
      </View>
      <View position="absolute" alignSelf="center" bottom={45}>
        <SubmitButton
          title="Zacznij przeliczać!"
          onPress={onPressNavigateToHomeScreen}
        />
      </View>
      <StatusBar style="light" backgroundColor="transparent" />
    </View>
  );
}
