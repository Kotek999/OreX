import React from "react";
import { FormHeader } from "../../Atoms/FormHeader";
import { ScrollViewContainer } from "../../Atoms/ScrollViewContainer";
import { screenWidth } from "../../../helpers/dimensions";
import { ItemInputs } from "../ItemInputs";
import { AnimatedElement } from "../../Atoms/AnimatedElement";
import { JSX, ItemAddFormProps } from "../../../types";

export const ItemAddForm = (props: ItemAddFormProps): JSX => {
  return (
    <>
      <AnimatedElement as="View" animation="slideUp" duration={2000}>
        <FormHeader
          w={screenWidth - 50}
          headerTitle="Dodaj pozycję"
          formModal={props.addItemModal}
        />
      </AnimatedElement>
      <ScrollViewContainer>
        <ItemInputs
          items={props.items}
          addItemModal={props.addItemModal}
          addItem={props.addItem}
        />
      </ScrollViewContainer>
    </>
  );
};
