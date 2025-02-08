export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export enum PlayerKeys {
  AYSHA = "AYSHA",
  GENEVIEVE = "GENEVIEVE",
  TEENY = "TEENY",
  SIERRA = "SIERRA",
  RACHEL = "RACHEL",
  ANIKA = "ANIKA",
  ROME = "ROME",
  SOL = "SOL",
  KISHAN = "KISHAN",
  JON = "JON",
  SAM = "SAM",
  ANDY = "ANDY",
  TIYANA = "TIYANA",
  SUE = "SUE",
  CAROLINE = "CAROLINE",
  TK = "TK",
  GABE = "GABE",
  KYLE = "KYLE",
}

export type Player = {
  key: PlayerKeys;
  name: string;
  status: PlayerStatus;
  eliminatedWeek?: number;
};

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.AYSHA]: {
    key: PlayerKeys.AYSHA,
    name: "Aysha",
    status: "eliminated",
    eliminatedWeek: 2,
  },
  [PlayerKeys.GENEVIEVE]: {
    key: PlayerKeys.GENEVIEVE,
    name: "Genevieve",
    status: "jury",
    eliminatedWeek: 12,
  },
  [PlayerKeys.TEENY]: {
    key: PlayerKeys.TEENY,
    name: "Teeny",
    status: "eliminated",
    eliminatedWeek: 13,
  },
  [PlayerKeys.SIERRA]: {
    key: PlayerKeys.SIERRA,
    name: "Sierra",
    status: "jury",
    eliminatedWeek: 7,
  },
  [PlayerKeys.RACHEL]: {
    key: PlayerKeys.RACHEL,
    name: "Rachel",
    status: "winner",
  },
  [PlayerKeys.ANIKA]: {
    key: PlayerKeys.ANIKA,
    name: "Anika",
    status: "eliminated",
    eliminatedWeek: 4,
  },
  [PlayerKeys.ROME]: {
    key: PlayerKeys.ROME,
    name: "Rome",
    status: "eliminated",
    eliminatedWeek: 5,
  },
  [PlayerKeys.SOL]: {
    key: PlayerKeys.SOL,
    name: "Sol",
    status: "jury",
    eliminatedWeek: 8,
  },
  [PlayerKeys.KISHAN]: {
    key: PlayerKeys.KISHAN,
    name: "Kishan",
    status: "eliminated",
    eliminatedWeek: 3,
  },
  [PlayerKeys.JON]: {
    key: PlayerKeys.JON,
    name: "Jon",
    status: "eliminated",
    eliminatedWeek: 0,
  },
  [PlayerKeys.SAM]: {
    key: PlayerKeys.SAM,
    name: "Sam",
    status: "eliminated",
    eliminatedWeek: 13,
  },
  [PlayerKeys.ANDY]: {
    key: PlayerKeys.ANDY,
    name: "Andy",
    status: "jury",
    eliminatedWeek: 12,
  },
  [PlayerKeys.TIYANA]: {
    key: PlayerKeys.TIYANA,
    name: "Tiyana",
    status: "eliminated",
    eliminatedWeek: 6,
  },
  [PlayerKeys.SUE]: {
    key: PlayerKeys.SUE,
    name: "Sue",
    status: "eliminated",
    eliminatedWeek: 13,
  },
  [PlayerKeys.CAROLINE]: {
    key: PlayerKeys.CAROLINE,
    name: "Caroline",
    status: "jury",
    eliminatedWeek: 11,
  },
  [PlayerKeys.TK]: {
    key: PlayerKeys.TK,
    name: "TK",
    status: "eliminated",
    eliminatedWeek: 1,
  },
  [PlayerKeys.GABE]: {
    key: PlayerKeys.GABE,
    name: "Gabe",
    status: "jury",
    eliminatedWeek: 9,
  },
  [PlayerKeys.KYLE]: {
    key: PlayerKeys.KYLE,
    name: "Kyle",
    status: "jury",
    eliminatedWeek: 10,
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
