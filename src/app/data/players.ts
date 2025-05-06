export type PlayerStatus = "active" | "eliminated" | "jury" | "winner";

export enum PlayerKeys {
  STEPHANIE = "STEPHANIE",
  SHAUHIN = "SHAUHIN",
  EVA = "EVA",
  KYLE = "KYLE",
  MITCH = "MITCH",
  SAI = "SAI",
  JOE = "JOE",
  KAMILLA = "KAMILLA",
  DAVID = "DAVID",
  THOMAS = "THOMAS",
  KEVIN = "KEVIN",
  CEDREK = "CEDREK",
  CHARITY = "CHARITY",
  JUSTIN = "JUSTIN",
  BIANCA = "BIANCA",
  CHRISSY = "CHRISSY",
  STAR = "STAR",
  MARY = "MARY",
}

export type Player = {
  key: PlayerKeys;
  name: string;
  status: PlayerStatus;
  eliminatedWeek?: number;
};

export const PLAYERS: Record<PlayerKeys, Player> = {
  [PlayerKeys.STEPHANIE]: {
    key: PlayerKeys.STEPHANIE,
    name: "Stephanie",
    status: "eliminated",
    eliminatedWeek: 0,
  },
  [PlayerKeys.SHAUHIN]: {
    key: PlayerKeys.SHAUHIN,
    name: "Shauhin",
    status: "active",
  },
  [PlayerKeys.EVA]: {
    key: PlayerKeys.EVA,
    name: "Eva",
    status: "active",
  },
  [PlayerKeys.KYLE]: {
    key: PlayerKeys.KYLE,
    name: "Kyle",
    status: "active",
  },
  [PlayerKeys.MITCH]: {
    key: PlayerKeys.MITCH,
    name: "Mitch",
    status: "active",
  },
  [PlayerKeys.SAI]: {
    key: PlayerKeys.SAI,
    name: "Sai",
    status: "eliminated",
    eliminatedWeek: 6,
  },
  [PlayerKeys.JOE]: {
    key: PlayerKeys.JOE,
    name: "Joe",
    status: "active",
  },
  [PlayerKeys.KAMILLA]: {
    key: PlayerKeys.KAMILLA,
    name: "Kamilla",
    status: "active",
  },
  [PlayerKeys.DAVID]: {
    key: PlayerKeys.DAVID,
    name: "David",
    status: "jury",
    eliminatedWeek: 8,
  },
  [PlayerKeys.THOMAS]: {
    key: PlayerKeys.THOMAS,
    name: "Thomas",
    status: "eliminated",
    eliminatedWeek: 3,
  },
  [PlayerKeys.KEVIN]: {
    key: PlayerKeys.KEVIN,
    name: "Kevin",
    status: "eliminated",
    eliminatedWeek: 1,
  },
  [PlayerKeys.CEDREK]: {
    key: PlayerKeys.CEDREK,
    name: "Cedrek",
    status: "jury",
    eliminatedWeek: 6,
  },
  [PlayerKeys.CHARITY]: {
    key: PlayerKeys.CHARITY,
    name: "Charity",
    status: "eliminated",
    eliminatedWeek: 5,
  },
  [PlayerKeys.JUSTIN]: {
    key: PlayerKeys.JUSTIN,
    name: "Justin",
    status: "eliminated",
    eliminatedWeek: 2,
  },
  [PlayerKeys.BIANCA]: {
    key: PlayerKeys.BIANCA,
    name: "Bianca",
    status: "eliminated",
    eliminatedWeek: 4,
  },
  [PlayerKeys.CHRISSY]: {
    key: PlayerKeys.CHRISSY,
    name: "Chrissy",
    status: "jury",
    eliminatedWeek: 7,
  },
  [PlayerKeys.STAR]: {
    key: PlayerKeys.STAR,
    name: "Star",
    status: "jury",
    eliminatedWeek: 9,
  },
  [PlayerKeys.MARY]: {
    key: PlayerKeys.MARY,
    name: "Mary",
    status: "active",
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
