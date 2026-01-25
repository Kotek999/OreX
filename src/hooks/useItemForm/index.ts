import { useMemo, useState } from "react";
import { changeNumeric } from "../../helpers/functions/changeNumeric";
import { formatOnBlur } from "../../helpers/functions/formatOnBlur";
import { Item, ItemFieldValuesProp } from "../../types";

export const useItemForm = (initial?: Partial<Item>) => {
  const [name, setName] = useState(initial?.name ?? "");
  const [amount, setAmount] = useState(initial?.amount ?? "");
  const [weight, setWeight] = useState(initial?.weight ?? "");
  const [price, setPrice] = useState(initial?.price ?? "");

  const changeText = (field: string, value: string): void => {
    if (field === "name") setName(value);
    if (field === "amount") setAmount(value);
    if (field === "weight") setWeight(value);
    if (field === "price") setPrice(value);
  };

  const changeNumericAction = (
    field: ItemFieldValuesProp,
    text: string,
  ): void => {
    return changeNumeric({
      field: field,
      text: text,
      changeText: changeText,
    });
  };

  const isValid: boolean = useMemo(() => {
    const a: number = parseFloat(amount);
    const w: number = parseFloat(weight);
    const p: number = parseFloat(price);
    return (
      name.trim() !== "" &&
      amount.trim() !== "" &&
      weight.trim() !== "" &&
      price.trim() !== "" &&
      !isNaN(a) &&
      !isNaN(w) &&
      !isNaN(p) &&
      a > 0 &&
      w > 0 &&
      p > 0
    );
  }, [name, amount, weight, price]);

  const reset = (): void => {
    setName("");
    setAmount("");
    setWeight("");
    setPrice("");
  };

  return {
    name,
    amount,
    weight,
    price,
    setName,
    setAmount,
    setWeight,
    setPrice,
    changeText,
    changeNumericAction,
    formatOnBlur,
    isValid,
    reset,
  };
};
