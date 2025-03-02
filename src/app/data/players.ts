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
    status: "active",
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
    status: "active",
  },
  [PlayerKeys.THOMAS]: {
    key: PlayerKeys.THOMAS,
    name: "Thomas",
    status: "active",
  },
  [PlayerKeys.KEVIN]: {
    key: PlayerKeys.KEVIN,
    name: "Kevin",
    status: "active",
  },
  [PlayerKeys.CEDREK]: {
    key: PlayerKeys.CEDREK,
    name: "Cedrek",
    status: "active",
  },
  [PlayerKeys.CHARITY]: {
    key: PlayerKeys.CHARITY,
    name: "Charity",
    status: "active",
  },
  [PlayerKeys.JUSTIN]: {
    key: PlayerKeys.JUSTIN,
    name: "Justin",
    status: "active",
  },
  [PlayerKeys.BIANCA]: {
    key: PlayerKeys.BIANCA,
    name: "Bianca",
    status: "active",
  },
  [PlayerKeys.CHRISSY]: {
    key: PlayerKeys.CHRISSY,
    name: "Chrissy",
    status: "active",
  },
  [PlayerKeys.STAR]: {
    key: PlayerKeys.STAR,
    name: "Star",
    status: "active",
  },
  [PlayerKeys.MARY]: {
    key: PlayerKeys.MARY,
    name: "Mary",
    status: "active",
  },
};

export const players: Array<Player> = Object.values(PLAYERS);
