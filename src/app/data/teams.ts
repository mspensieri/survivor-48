import { Player, PLAYERS } from "./players";
import { computePlayerScore } from "./weeks";

export type Team = {
  name: string;
  captain?: string;
  accolades?: {
    first?: Array<number>;
    second?: Array<number>;
    third?: Array<number>;
  };
  winner: Player;
  players: Array<Player>;
};

const {
  STEPHANIE,
  SHAUHIN,
  EVA,
  KYLE,
  MITCH,
  SAI,
  JOE,
  KAMILLA,
  DAVID,
  THOMAS,
  KEVIN,
  CEDREK,
  CHARITY,
  JUSTIN,
  BIANCA,
  CHRISSY,
  STAR,
  MARY,
} = PLAYERS;

export const teams: Array<Team> = [
  {
    name: "First Time in Fiji",
    captain: "Mike",
    winner: KAMILLA,
    players: [KAMILLA, BIANCA, EVA, CHRISSY, SAI, CEDREK],
  },
  {
    name: "Sandy's Spynest",
    captain: "Sandy",
    accolades: {
      second: [46],
    },
    winner: KYLE,
    players: [KYLE, SAI, STAR, JOE, CHRISSY, STEPHANIE],
  },
  {
    name: "4blackcats",
    captain: "Carrie",
    winner: SHAUHIN,
    players: [SHAUHIN, JOE, CHARITY, STAR, MARY, KYLE],
  },
  {
    name: "Leafs Nation",
    captain: "Sean",
    accolades: {
      third: [46],
    },
    winner: SHAUHIN,
    players: [SHAUHIN, BIANCA, MARY, KYLE, STAR, CEDREK],
  },
  {
    name: "Wendy's Chickens",
    captain: "Alex",
    winner: JOE,
    players: [JOE, SAI, MARY, JUSTIN, DAVID, CEDREK],
  },
  {
    name: "Dean's T and A Team",
    captain: "Dean",
    accolades: {
      first: [44],
      third: [45],
    },
    winner: CHRISSY,
    players: [CHRISSY, CHARITY, EVA, CEDREK, SAI, STEPHANIE],
  },
  {
    name: "Charlie's Angels",
    captain: "Kara",
    winner: CEDREK,
    players: [CEDREK, MARY, SHAUHIN, MITCH, DAVID, CHRISSY],
  },
  {
    name: "Jeff's Dimples",
    captain: "Kevin",
    winner: CEDREK,
    players: [CEDREK, JOE, CHRISSY, MARY, EVA, CHARITY],
  },
  {
    name: "Truth Kamikazee",
    captain: "Katie",
    accolades: {
      second: [45],
    },
    winner: STEPHANIE,
    players: [STEPHANIE, MITCH, KEVIN, KYLE, CHRISSY, MARY],
  },
  {
    name: "Muscle Mania",
    captain: "Frank",
    winner: CHRISSY,
    players: [CHRISSY, CEDREK, BIANCA, CHARITY, KEVIN, KAMILLA],
  },
  {
    name: "Mermaid Dragon",
    captain: "Colleen",
    winner: THOMAS,
    players: [THOMAS, SHAUHIN, KYLE, EVA, KAMILLA, CEDREK],
  },
  {
    name: "Fiji Kokoda",
    captain: "Greg",
    accolades: {
      first: [46],
      second: [44],
    },
    winner: MARY,
    players: [MARY, STAR, DAVID, KAMILLA, KEVIN, SHAUHIN],
  },
  {
    name: "Totally Oswald",
    captain: "Meagan",
    winner: BIANCA,
    players: [BIANCA, MARY, SHAUHIN, KEVIN, KAMILLA, EVA],
  },
  {
    name: "Frank has Foot Fungus",
    captain: "Erick",
    winner: MITCH,
    players: [MITCH, EVA, KAMILLA, CHRISSY, KEVIN, MARY],
  },
  {
    name: "Jeff's Six Pack",
    captain: "Alec",
    winner: CEDREK,
    players: [CEDREK, THOMAS, SHAUHIN, MARY, KYLE, KAMILLA],
  },
  {
    name: "Here for Friendship",
    captain: "Andrea R",
    winner: MARY,
    players: [MARY, THOMAS, DAVID, JUSTIN, CHARITY, CHRISSY],
  },
  {
    name: "TEAM JO",
    captain: "Joanne",
    winner: JOE,
    players: [JOE, KEVIN, SHAUHIN, MITCH, KAMILLA, CHARITY],
  },
  {
    name: "UNDERDOGS",
    captain: "Stan",
    accolades: {
      second: [44],
    },
    winner: THOMAS,
    players: [THOMAS, JUSTIN, DAVID, STEPHANIE, KEVIN, SAI],
  },
  {
    name: "Challenge Beasts",
    captain: "Anne",
    accolades: {
      first: [45],
    },
    winner: MARY,
    players: [MARY, KEVIN, CEDREK, CHRISSY, SAI, EVA],
  },
  {
    name: "BIG DUCK",
    captain: "Dana",
    winner: KYLE,
    players: [KYLE, EVA, MARY, CHRISSY, JUSTIN, CEDREK],
  },
  {
    name: "Survivor 2025",
    captain: "Thomas",
    winner: CHRISSY,
    players: [CHRISSY, JOE, SAI, STAR, STEPHANIE, BIANCA],
  },
  {
    name: "Boinko's Brats",
    captain: "Dan",
    winner: EVA,
    players: [EVA, CHARITY, CHRISSY, STAR, DAVID, KYLE],
  },
  {
    name: "Q's 6",
    captain: "Ryan Lemay",
    winner: MITCH,
    players: [MITCH, KYLE, JOE, MARY, STAR, BIANCA],
  },
  {
    name: "Ancient Voices",
    captain: "Elana",
    winner: CHARITY,
    players: [CHARITY, CEDREK, DAVID, JUSTIN, STEPHANIE, CHRISSY],
  },
  {
    name: "Play Your Idol",
    captain: "Elizabeth",
    winner: MARY,
    players: [MARY, KYLE, CEDREK, KAMILLA, BIANCA, EVA],
  },
  {
    name: "Come On In Guys",
    captain: "Spen",
    winner: MITCH,
    players: [MITCH, EVA, MARY, CHRISSY, CEDREK, BIANCA],
  },
  {
    name: "Ogatally Devotes",
    captain: "Andy & Lally",
    winner: KEVIN,
    players: [KEVIN, DAVID, EVA, CEDREK, STEPHANIE, CHARITY],
  },
  {
    name: "Got Nothin' For Ya",
    captain: "Leila",
    winner: CHRISSY,
    players: [CHRISSY, SAI, SHAUHIN, MARY, THOMAS, KAMILLA],
  },
  {
    name: "The Noob",
    captain: "Fekre",
    winner: CHARITY,
    players: [CHARITY, MARY, CHRISSY, STEPHANIE, EVA, KEVIN],
  },
  {
    name: "Clyde's Castaways",
    captain: "Taylor",
    winner: KAMILLA,
    players: [KAMILLA, CEDREK, MARY, CHRISSY, EVA, CHARITY],
  },
  {
    name: "TRACKS",
    captain: "Ally",
    winner: JOE,
    players: [JOE, CHARITY, DAVID, JUSTIN, BIANCA, SAI],
  },
  {
    name: "LIVIN'",
    captain: "Leigh",
    winner: CHRISSY,
    players: [CHRISSY, SHAUHIN, BIANCA, JOE, KYLE, CEDREK],
  },
  {
    name: "With You 100%",
    captain: "Jacob",
    winner: MARY,
    players: [MARY, CHRISSY, SAI, BIANCA, KAMILLA, MITCH],
  },
  {
    name: "JSpenny",
    captain: "Jacklyn",
    winner: MARY,
    players: [MARY, KAMILLA, CHARITY, EVA, THOMAS, CEDREK],
  },
  {
    name: "House of Vidmar",
    captain: "Menard",
    winner: BIANCA,
    players: [BIANCA, KYLE, KEVIN, MARY, CHRISSY, CHARITY],
  },
  {
    name: "Fight For It?",
    captain: "Kian & Katie",
    winner: MARY,
    players: [MARY, CEDREK, SHAUHIN, DAVID, EVA, KAMILLA],
  },
  {
    name: "NO SPOILERS",
    captain: "Brendan",
    accolades: {
      third: [45],
    },
    winner: BIANCA,
    players: [BIANCA, THOMAS, SHAUHIN, MARY, KAMILLA, KYLE],
  },
  {
    name: "AA Team",
    captain: "Alyssa & Adam",
    winner: MARY,
    players: [MARY, BIANCA, KAMILLA, THOMAS, JUSTIN, EVA],
  },
  {
    name: "Jer-iatrics",
    captain: "Jeremy",
    winner: CHARITY,
    players: [CHARITY, THOMAS, SHAUHIN, STEPHANIE, CHRISSY, MARY],
  },
  {
    name: "S.A.D",
    captain: "Susan, Andrea & Diego",
    winner: MARY,
    players: [MARY, CHRISSY, CEDREK, KYLE, EVA, KAMILLA],
  },
];

export function computeTeamScore(team: Team, weekNumber: number) {
  let score = 0;

  for (const player of team.players) {
    score += computePlayerScore(player, weekNumber, "total");
  }

  return score;
}

export function getTeamScore(team: Team, weekNumber: number) {
  return computeTeamScore(team, weekNumber) || "-";
}

export const fakeTeams = [
  {
    name: "1",
    winner: STEPHANIE,
    players: [STEPHANIE, SHAUHIN, EVA, KYLE, MITCH, SAI],
  },
  {
    name: "2",
    winner: STEPHANIE,
    players: [JOE, KAMILLA, DAVID, THOMAS, KEVIN, CEDREK],
  },
  {
    name: "3",
    winner: STEPHANIE,
    players: [CHARITY, JUSTIN, BIANCA, CHRISSY, STAR, MARY],
  },
  {
    name: "4",
    winner: STEPHANIE,
    players: [KAMILLA, DAVID, THOMAS, KEVIN, CEDREK, CHARITY],
  },
  {
    name: "5",
    winner: STEPHANIE,
    players: [CHRISSY, STAR, MARY, JOE, KAMILLA, DAVID],
  },
  {
    name: "6",
    winner: STEPHANIE,
    players: [MITCH, SAI, JOE, KAMILLA, DAVID, THOMAS],
  },
  {
    name: "7",
    winner: STEPHANIE,
    players: [THOMAS, KEVIN, CEDREK, CHARITY, JUSTIN, BIANCA],
  },
  {
    name: "8",
    winner: STEPHANIE,
    players: [BIANCA, CHRISSY, STAR, MARY, JOE, KAMILLA],
  },
];
