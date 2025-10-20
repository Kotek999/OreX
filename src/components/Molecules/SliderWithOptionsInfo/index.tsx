import React from "react";
import { Div as View } from "react-native-magnus";
import { imageSliderData } from "../../../helpers/data/imageSliderData";
import { Slider } from "../../../components/Atoms/Slider";
import { ScrollViewContainer } from "../../../components/Atoms/ScrollViewContainer";
import { optionsData } from "../../../helpers/data/optionsData";
import { Option } from "../../../components/Atoms/Option";
import { AnimatedElement } from "../../Atoms/AnimatedElement";
import { JSX, SliderWithOptionsInfoProps } from "../../../types";

export const SliderWithOptionsInfo = (
  props: SliderWithOptionsInfoProps
): JSX => {
  return (
    <View>
      <AnimatedElement as="View" animation="slideDown" duration={1500}>
        <Slider
          itemList={imageSliderData}
          setSelectedIndex={props.setSelectedIndex}
          formModal={props.formModal}
        />
      </AnimatedElement>
      <View flex={1}>
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
