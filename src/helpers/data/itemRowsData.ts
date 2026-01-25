import { formatNumberDisplay } from "../functions/formatNumberDisplay";
import { ItemRow, Item } from "../../types";

export const itemRowsData: ItemRow<Item>[] = [
  {
    flex: 0.8,
    name: "Lp.",
    textAlign: "left",
    render: (item) => `#${item.id}`,
  },
  {
    flex: 1,
    name: "Nazwa",
    textAlign: "center",
    render: (item) => item.name,
  },
  {
    flex: 1.2,
    name: "Ilość",
    textAlign: "center",
    render: (item) => `${item.amount}x`,
  },
  {
    flex: 1,
    name: "Waga",
    textAlign: "center",
    render: (item) => formatNumberDisplay(item.weight),
  },
  {
    flex: 1.2,
    name: "Cena",
    textAlign: "right",
    render: (item) => formatNumberDisplay(item.price),
  },
];
