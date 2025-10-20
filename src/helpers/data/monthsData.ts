const monthsWithPolishNames = {
  Jan: { polish: "stycznia", short: "sty.", index: 0 },
  Feb: { polish: "lutego", short: "lut.", index: 1 },
  Mar: { polish: "marca", short: "mar.", index: 2 },
  Apr: { polish: "kwietnia", short: "kwi.", index: 3 },
  May: { polish: "maja", short: "maj", index: 4 },
  Jun: { polish: "czerwca", short: "cze.", index: 5 },
  Jul: { polish: "lipca", short: "lip.", index: 6 },
  Aug: { polish: "sierpnia", short: "sie.", index: 7 },
  Sep: { polish: "września", short: "wrz.", index: 8 },
  Oct: { polish: "października", short: "paź.", index: 9 },
  Nov: { polish: "listopada", short: "lis.", index: 10 },
  Dec: { polish: "grudnia", short: "gru.", index: 11 },
};

export const polishMonthsArray = Object.values(monthsWithPolishNames);
