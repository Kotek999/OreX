import { useMemo, useState } from "react";
import { changeNumeric } from "../../helpers/functions/changeNumeric";
import { formatOnBlur } from "../../helpers/functions/formatOnBlur";
import { Item } from "../../types";

export const useItemForm = (initial?: Partial<Item>) => {
  const [name, setName] = useState(initial?.name ?? "");
  const [weight, setWeight] = useState(initial?.weight ?? "");
  const [price, setPrice] = useState(initial?.price ?? "");

  const changeText = (field: string, value: string): void => {
    if (field === "name") setName(value);
    if (field === "weight") setWeight(value);
    if (field === "price") setPrice(value);
  };

  const changeNumericAction = (
    field: "weight" | "price",
    text: string
  ): void => {
    return changeNumeric({
      field: field,
      text: text,
      changeText: changeText,
    });
  };

  const isValid: boolean = useMemo(() => {
    const w: number = parseFloat(weight);
    const p: number = parseFloat(price);
    return (
      name.trim() !== "" &&
      weight.trim() !== "" &&
      price.trim() !== "" &&
      !isNaN(w) &&
      !isNaN(p) &&
      w > 0 &&
      p > 0
    );
  }, [name, weight, price]);

  const reset = (): void => {
    setName("");
    setWeight("");
    setPrice("");
  };

  return {
    name,
    weight,
    price,
    setName,
    setWeight,
    setPrice,
    changeText,
    changeNumericAction,
    formatOnBlur,
    isValid,
    reset,
  };
};
