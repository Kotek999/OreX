import React from "react";
import { Icon, Div as View } from "react-native-magnus";
import { TouchableOpacity } from "react-native";
import { useItemForm } from "../../../hooks/useItemForm";
import { EditableInput } from "../../Atoms/EditableInput";
import { itemEditableInputsData } from "../../../helpers/data/itemEditableInputsData";
import { JSX, EditableItemRowsProps } from "../../../types";

export const EditableItemRows = (props: EditableItemRowsProps): JSX => {
  const {
    name,
    weight,
    price,
    changeText,
    changeNumericAction,
    formatOnBlur,
    setWeight,
    setPrice,
    isValid,
  } = useItemForm(props.item);

  const onPressSaveEditedItem = (): void =>
    props.onSave({
      name: name.trim(),
      weight: weight.trim(),
      price: price.trim(),
    });

  const editableInputs = itemEditableInputsData({
    name: name,
    weight: weight,
    price: price,
    changeText: changeText,
    changeNumericAction: changeNumericAction,
    formatOnBlur: formatOnBlur,
    setWeight: setWeight,
    setPrice: setPrice,
  });

  return (
    <View
      mt={8}
      style={{
        display: props.editingId === props.item.id ? "flex" : "none",
      }}
    >
      <View p={6} flexDir="row" justifyContent="space-around">
        {editableInputs.map((input, i) => (
          <EditableInput
            key={i}
            value={input.value as string}
            onChange={input.onChange}
            onBlur={input.onBlur}
          />
        ))}
      </View>
      <View p={6} flexDir="row" justifyContent="space-around">
        <TouchableOpacity disabled={!isValid} onPress={onPressSaveEditedItem}>
          <Icon
            name="check-circle"
            fontFamily="Feather"
            color={isValid ? "lime" : "gray300"}
            fontSize={28}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDelete}>
          <Icon name="trash" fontFamily="Entypo" color="red500" fontSize={28} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
