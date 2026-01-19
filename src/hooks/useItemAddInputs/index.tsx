import { useItemForm } from "../../hooks/useItemForm";
import { itemAddInputsData } from "../../helpers/data/itemAddInputsData";
import { Item, ItemAddInputsFormProps } from "../../types";

export const useItemAddInputs = (props: ItemAddInputsFormProps) => {
  const {
    name,
    weight,
    price,
    changeText,
    changeNumericAction,
    formatOnBlur,
    setPrice,
    setWeight,
    isValid,
    reset,
  } = useItemForm();

  const addItem = (): void => {
    if (!isValid) return;

    const item: Item = {
      uniqueKey: Date.now(),
      id: props.items.length + 1,
      name: name.trim(),
      weight: weight.trim(),
      price: price.trim(),
    };

    props.addItem(item);
    props.addItemModal.onPressCloseModal();
    reset();
  };

  const itemAddInputs = itemAddInputsData({
    name: name,
    weight: weight,
    price: price,
    changeText: changeText,
    changeNumericAction: changeNumericAction,
    formatOnBlur: formatOnBlur,
    setWeight: setWeight,
    setPrice: setPrice,
  });

  return {
    addItem,
    isValid,
    itemAddInputs,
  };
};
