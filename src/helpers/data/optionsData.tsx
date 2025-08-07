import React from "react";
import { Div as View } from "react-native-magnus";
import { OptionStyledText } from "../../components/Atoms/OptionStyledText";
import { Section } from "../../components/Atoms/Section";
import { TextsProps, OptionsDataProps } from "../../types";

const TEXTS: TextsProps = {
  option1: {
    main: "Aplikacja została stworzona jako narzędzie umożliwiające szybkie przeliczanie wartości złota i srebra oraz konwersję najpopularniejszych walut.",
    title: "Uwaga:",
    description:
      "Warto pamiętać, że prezentowane dane mogą nieznacznie różnić się od aktualnych wartości rynkowych.",
  },
  option2: {
    firstTitle: "Złoto",
    firstText:
      "To metal szlachetny o charakterystycznym żółtym połysku, od wieków używany jako środek płatniczy i materiał w jubilerstwie. Jest odporne na korozję i dobrze przewodzi prąd.",
    secondTitle: "Srebro",
    secondText:
      "Jest to błyszczący, biały metal szlachetny o wysokiej przewodności elektrycznej i termicznej. Wykorzystywane jest m.in. w jubilerstwie, elektronice i fotografii.",
  },
  option3: {
    main: "Są to narodowe środki płatnicze, których kursy zależą od rynku. Aplikacja umożliwia ich szybką konwersję według dostępnych notowań. Wśród najczęściej wymienianych są PLN, EUR oraz USD.",
  },
};

export const optionsData: OptionsDataProps[] = [
  {
    headerTitle: "O aplikacji",
    fontFamily: "Entypo",
    iconName: "info",
    iconColor: "#06b6d4",
    content: (
      <>
        <OptionStyledText color="#f8fafc">
          {TEXTS.option1.main}
        </OptionStyledText>
        <View mt="lg" mb="md">
          <Section color="#f43f5e" title={TEXTS.option1.title}>
            <OptionStyledText color="#94a3b8" mt="xs">
              {TEXTS.option1.description}
            </OptionStyledText>
          </Section>
        </View>
      </>
    ),
  },
  {
    headerTitle: "Złoto i Srebro",
    fontFamily: "Entypo",
    iconName: "star",
    iconColor: "#fbbf24",
    content: (
      <>
        <Section color="#f8fafc" title={TEXTS.option2.firstTitle} mb="xs">
          {TEXTS.option2.firstText}
        </Section>
        <Section
          color="#f8fafc"
          title={TEXTS.option2.secondTitle}
          mt="md"
          mb="xs"
        >
          {TEXTS.option2.secondText}
        </Section>
      </>
    ),
  },
  {
    headerTitle: "Waluty",
    fontFamily: "MaterialIcons",
    iconName: "currency-exchange",
    iconColor: "#4ade80",
    content: (
      <OptionStyledText color="#f8fafc">{TEXTS.option3.main}</OptionStyledText>
    ),
  },
];
