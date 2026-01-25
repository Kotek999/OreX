import { useItemForm } from "../../hooks/useItemForm";
import { itemAddInputsData } from "../../helpers/data/itemAddInputsData";
import { Item, ItemAddInputsFormProps } from "../../types";

export const useItemAddInputs = (props: ItemAddInputsFormProps) => {
  const {
    name,
    amount,
    weight,
    price,
    changeText,
    changeNumericAction,
    formatOnBlur,
    setAmount,
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
      amount: amount.trim(),
      weight: weight.trim(),
      price: price.trim(),
    };

    props.addItem(item);
    props.addItemModal.onPressCloseModal();
    reset();
  };

  const itemAddInputs = itemAddInputsData({
    name: name,
    amount: amount,
    weight: weight,
    price: price,
    changeText: changeText,
    changeNumericAction: changeNumericAction,
    formatOnBlur: formatOnBlur,
    setAmount: setAmount,
    setWeight: setWeight,
    setPrice: setPrice,
  });

  return {
    addItem,
    isValid,
    itemAddInputs,
  };
};
