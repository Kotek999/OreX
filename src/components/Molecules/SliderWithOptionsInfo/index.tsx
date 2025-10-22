import React from "react";
import { Div as View } from "react-native-magnus";
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
    <>
      <Slider
        itemList={imageSliderData}
        setSelectedIndex={props.setSelectedIndex}
        formModal={props.formModal}
      />
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
    </>
  );
};
