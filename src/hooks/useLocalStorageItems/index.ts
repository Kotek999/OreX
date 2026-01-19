import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NullableString, LocalStorageItemsProps, MetalType } from "../../types";

export const useLocalStorageItems = (props: LocalStorageItemsProps) => {
  const category: MetalType = props.metalType;
  const storageNameKey: string = "metalItem_";
  const itemName: string = `${storageNameKey}${category}`;

  useEffect(() => {
    const loadItems = async (): Promise<void> => {
      try {
        const stored: NullableString = await AsyncStorage.getItem(itemName);
        if (stored) {
          props.setItems(JSON.parse(stored));
        }
      } catch (e) {
        console.log("Błąd podczas ładowania zapisanych pozycji:", e);
      }
    };
    loadItems();
  }, [category]);

  useEffect(() => {
    AsyncStorage.setItem(itemName, JSON.stringify(props.items));
  }, [props.items, category]);
};
