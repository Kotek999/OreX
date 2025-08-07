import React from "react";
import { Div as View, Text } from "react-native-magnus";
import { imageSliderData } from "../../../helpers/data/imageSliderData";
import { Slider } from "../../../components/Atoms/Slider";
import { ScrollViewContainer } from "../../../components/Atoms/ScrollViewContainer";
import { optionsData } from "../../../helpers/data/optionsData";
import { Option } from "../../../components/Atoms/Option";
import { JSX, SliderWithOptionsInfoProps } from "../../../types";

export const SliderWithOptionsInfo = (
  props: SliderWithOptionsInfoProps
): JSX => {
  return (
    <View>
      <Slider
        itemList={imageSliderData}
        setSelectedIndex={props.setSelectedIndex}
        formModal={props.formModal}
      />
      <View flex={1} alignItems="center">
        <Text
          fontSize={16}
          pb={15}
          color="#fafafa"
          fontWeight="500"
          letterSpacing={0.5}
        >
          Informacje ogólne
        </Text>
        <ScrollViewContainer>
          {optionsData.map((option, index) => (
            <Option
              key={`option-${index}`}
              headerTitle={option.headerTitle}
              fontFamily={option.fontFamily}
              iconName={option.iconName}
              iconColor={option.iconColor}
            >
              <View>{option.content}</View>
            </Option>
          ))}
        </ScrollViewContainer>
      </View>
    </View>
  );
};
