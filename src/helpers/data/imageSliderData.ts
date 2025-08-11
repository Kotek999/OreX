import {
  goldBg,
  silverBg,
  plnBg,
  eurBg,
  usdBg,
  goldBarsIcon,
  silverBarsIcon,
  flagOfEuropeIcon,
  flagOfPolandIcon,
} from "../imageRequirements";
import { ImageSliderData } from "../../types";

export const imageSliderData: ImageSliderData[] = [
  {
    title: "Złoto",
    image: goldBg,
    flag: goldBarsIcon,
  },
  {
    title: "Srebro",
    image: silverBg,
    flag: silverBarsIcon,
  },
  {
    title: "Złoty",
    image: plnBg,
    flag: flagOfPolandIcon,
  },
  {
    title: "Euro",
    image: eurBg,
    flag: flagOfEuropeIcon,
  },
  {
    title: "Dolar amerykański",
    image: usdBg,
    flag: flagOfEuropeIcon,
  },
];
