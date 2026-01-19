import { formatNumberDisplay } from "../functions/formatNumberDisplay";
import { ItemRow, Item } from "../../types";

export const itemRowsData: ItemRow<Item>[] = [
  {
    flex: 1,
    name: "Lp.",
    textAlign: "left",
    render: (item) => `#${item.id}`,
  },
  {
    flex: 1.6,
    name: "Nazwa",
    textAlign: "center",
    render: (item) => item.name,
  },
  {
    flex: 1.4,
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
