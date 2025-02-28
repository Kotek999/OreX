import {
  goldBg,
  silverBg,
  test,
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
    description: "Kliknij, aby przeliczyć...",
  },
  {
    title: "Srebro",
    image: silverBg,
    flag: silverBarsIcon,
    description: "Kliknij, aby przeliczyć...",
  },
  {
    title: "Polskie Złote",
    image: silverBg,
    flag: flagOfPolandIcon,
    description: "Kliknij, aby przeliczyć...",
  },
  {
    title: "Euro",
    image: test,
    flag: flagOfEuropeIcon,
    description: "Kliknij, aby przeliczyć...",
  },
  {
    title: "Dolary",
    image: silverBg,
    flag: flagOfEuropeIcon,
    description: "Kliknij, aby przeliczyć...",
  },
];
