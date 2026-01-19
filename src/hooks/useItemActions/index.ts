import { useCallback, useState } from "react";
import { Alert, LayoutAnimation } from "react-native";
import { Item } from "../../types";

export const useItemActions = () => {
  const [items, setItems] = useState<Item[]>([]);

  const [editingId, setEditingId] = useState<number | null>(null);

  const addItem = useCallback((item: Item): void => {
    setItems((prev) => [...prev, { ...item, id: prev.length + 1 }]);
  }, []);

  const editStartItem = (item: Item): void => {
    setEditingId(item.id);
  };

  const saveItem = (id: number, updated: Partial<Item>): void => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, ...updated } : it))
    );
    setEditingId(null);
  };

  const deleteItem = (id: number): void => {
    const item = items.find((i) => i.id === id);
    Alert.alert(
      "Usuń pozycje",
      `Czy na pewno chcesz usunąć pozycję o nazwie "${item?.name}"?`,
      [
        { text: "Anuluj", style: "cancel" },
        {
          text: "Usuń",
          style: "destructive",
          onPress: () => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );
            setItems((prev) => {
              const updated: Item[] = prev.filter((it) => it.id !== id);
              const reindexed = updated.map((it, index) => ({
                ...it,
                id: index + 1,
              }));
              return reindexed;
            });
            setEditingId(null);
          },
        },
      ]
    );
  };

  return {
    items,
    setItems,
    editingId,
    addItem,
    saveItem,
    editStartItem,
    deleteItem,
  };
};
