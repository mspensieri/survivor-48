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
    captain: "Alex",
    name: "Wendy's Chickens",
    players: [MITCH, EVA, KYLE, JOE, STAR, MARY],
    winner: MITCH,
  },
  {
    captain: "Kara",
    name: "Here's Your Headstone",
    players: [MARY, JOE, CHRISSY, MITCH, THOMAS, SAI],
    winner: MARY,
  },
  {
    captain: "Joanne",
    name: "TEAM JO",
    accolades: {
      third: [47],
    },
    players: [SHAUHIN, MITCH, EVA, JOE, JUSTIN, KEVIN],
    winner: SHAUHIN,
  },
  {
    captain: "Renee",
    name: "Renee's Pack",
    players: [JOE, MITCH, KYLE, SHAUHIN, MARY, CHRISSY],
    winner: JOE,
  },
  {
    captain: "Spen",
    name: "Come On In Guys",
    players: [EVA, CHRISSY, KYLE, JUSTIN, CHARITY, BIANCA],
    winner: EVA,
  },
  {
    captain: "Andrea and Susan",
    name: "Fresh Japow",
    players: [JUSTIN, EVA, MARY, SHAUHIN, KYLE, JOE],
    winner: JUSTIN,
  },
  {
    captain: "Diego",
    name: "Operation Italy",
    players: [JUSTIN, EVA, SHAUHIN, KYLE, MITCH, STEPHANIE],
    winner: JUSTIN,
  },
  {
    captain: "Elizabeth",
    name: "Play Your Idol",
    players: [MARY, KAMILLA, CHRISSY, MITCH, KEVIN, SHAUHIN],
    winner: MARY,
  },
  {
    captain: "Mikey",
    name: "First Time in Fiji",
    players: [THOMAS, KYLE, EVA, JUSTIN, CHARITY, STEPHANIE],
    winner: THOMAS,
  },
  {
    captain: "Alec",
    name: "The Ghost of Andy",
    players: [KYLE, SHAUHIN, JOE, CHRISSY, KEVIN, MARY],
    winner: KYLE,
  },
  {
    captain: "Leila",
    name: "Got Nothin' For Ya",
    players: [CHRISSY, THOMAS, SHAUHIN, MITCH, EVA, CEDREK],
    winner: CHRISSY,
  },
  {
    captain: "Katie",
    name: "Truth Kamikazee",
    accolades: {
      second: [45],
    },
    players: [MITCH, KEVIN, THOMAS, JOE, SAI, EVA],
    winner: MITCH,
  },
  {
    captain: "Danny",
    name: "pioppi (all lower case)",
    players: [SHAUHIN, CHRISSY, JUSTIN, CHARITY, KEVIN, MITCH],
    winner: SHAUHIN,
  },
  {
    captain: "Stanley",
    name: "UNDERDOGS",
    accolades: {
      second: [44],
    },
    players: [STAR, DAVID],
    winner: STAR,
  },
  {
    captain: "Ryan Lemay",
    name: "Q's 6",
    accolades: {
      first: [47],
    },
    players: [KAMILLA, CEDREK, STEPHANIE, KYLE, EVA, THOMAS],
    winner: KAMILLA,
  },
  {
    captain: "Sandy",
    name: "Sandy's Spynest",
    accolades: {
      second: [46],
    },
    players: [SHAUHIN, CHRISSY, MARY, MITCH, EVA, BIANCA],
    winner: SHAUHIN,
  },
  {
    captain: "Colleen",
    name: "Team Scrappy",
    players: [SHAUHIN, THOMAS, KYLE, CHRISSY, CHARITY, EVA],
    winner: SHAUHIN,
  },
  {
    captain: "Brendan",
    name: "NOT PENNYS BOAT",
    accolades: {
      third: [45],
    },
    players: [MARY, JOE, SHAUHIN, EVA, KAMILLA, CHARITY],
    winner: MARY,
  },
  {
    captain: "Kevin",
    name: "Jeff's Dimples",
    players: [KEVIN, KYLE, CHRISSY, EVA, MITCH, CHARITY],
    winner: KEVIN,
  },
  {
    captain: "Carrie",
    name: "4blackcats",
    players: [STEPHANIE, KYLE, EVA, SHAUHIN, JUSTIN, MARY],
    winner: STEPHANIE,
  },
  {
    captain: "Sean",
    name: "Leafs Nation",
    accolades: {
      third: [46],
    },
    players: [STEPHANIE, EVA, SHAUHIN, JOE, CHARITY, BIANCA],
    winner: STEPHANIE,
  },
  {
    captain: "Kelly",
    name: "Outwit, Outlast, OutSLAY",
    players: [THOMAS, KYLE, EVA, KAMILLA, CHARITY, JOE],
    winner: THOMAS,
  },
  {
    captain: "Sarah",
    name: "Voldemort",
    players: [KEVIN, EVA, BIANCA, JOE, MITCH, MARY],
    winner: KEVIN,
  },
  {
    captain: "Frank",
    name: "Muscle Mania",
    players: [JOE, DAVID, CHRISSY, STAR, MARY, KEVIN],
    winner: JOE,
  },
  {
    captain: "Glaser",
    name: "Cheeseburger (with bacon)",
    players: [MARY, EVA, JOE, KEVIN, KYLE, STEPHANIE],
    winner: MARY,
  },
  {
    captain: "Thomas",
    name: "Chicken Dinner",
    players: [CHRISSY, SHAUHIN, KYLE, SAI, JOE, CHARITY],
    winner: CHRISSY,
  },
  {
    captain: "Vanesa",
    name: "Latte to the Party",
    players: [KYLE, EVA, DAVID, JOE, STEPHANIE, KAMILLA],
    winner: KYLE,
  },
  {
    captain: "Erick",
    name: "Did I Stutter?",
    accolades: {
      second: [47],
    },
    players: [MITCH, THOMAS, BIANCA, MARY, CEDREK, JUSTIN],
    winner: MITCH,
  },
  {
    captain: "Andrea Roulet",
    name: "Here For Friendship",
    players: [KAMILLA, BIANCA, CHARITY, MARY, EVA, JOE],
    winner: KAMILLA,
  },
  {
    captain: "Menard",
    name: "Fight or Flight",
    players: [CHARITY, JUSTIN, STEPHANIE, EVA, KYLE, CHRISSY],
    winner: CHARITY,
  },
  {
    captain: "Leigh",
    name: "LIVIN'",
    players: [KYLE, CHARITY, KEVIN, THOMAS, JOE, EVA],
    winner: KYLE,
  },
  {
    captain: "Elana",
    name: "Papaya?",
    players: [MARY, JOE, BIANCA, CHRISSY, STAR, THOMAS],
    winner: MARY,
  },
  {
    captain: "Alyssa and Adam",
    name: "AA Tribe",
    players: [JUSTIN, MARY, CHRISSY, JOE, KYLE, EVA],
    winner: JUSTIN,
  },
  {
    captain: "Greg",
    name: "Fiji Kokoda",
    accolades: {
      first: [46],
      second: [44],
    },
    players: [MITCH, CEDREK, EVA, CHARITY, BIANCA, DAVID],
    winner: MITCH,
  },
  {
    captain: "Andrew and Lally",
    name: "Ogatally Devotes",
    players: [SHAUHIN, STAR, JUSTIN, CEDREK, MARY, SAI],
    winner: SHAUHIN,
  },
  {
    captain: "Jacob",
    name: "With You 100%",
    players: [CHRISSY, JOE, SHAUHIN, JUSTIN, MARY, STEPHANIE],
    winner: CHRISSY,
  },
  {
    captain: "Jacklyn",
    name: "JSpenny",
    players: [KEVIN, JOE, MITCH, BIANCA, SAI, STAR],
    winner: KEVIN,
  },
  {
    captain: "Sab and Bruno",
    name: "Bing and Bugz",
    players: [SHAUHIN, BIANCA, CHARITY, JOE, SAI, EVA],
    winner: SHAUHIN,
  },
  {
    captain: "Meagan",
    name: "Totally Oswald",
    players: [JUSTIN, JOE, MITCH, CHRISSY, BIANCA, CHARITY],
    winner: JUSTIN,
  },
  {
    captain: "Taylor",
    name: "Clyde's Castaways",
    players: [SHAUHIN, MARY, JUSTIN, JOE, SAI, KYLE],
    winner: SHAUHIN,
  },
  {
    captain: "Dan and Dana",
    name: "Boinko and Ducky 4ever",
    players: [SAI, BIANCA, STAR, DAVID, KAMILLA, CEDREK],
    winner: SAI,
  },
  {
    captain: "Dean",
    name: "Dean's Late Team",
    accolades: {
      first: [44],
      third: [45],
    },
    players: [],
    winner: SAI,
  },
  {
    captain: "Anne",
    name: "Challenge Beasts",
    accolades: {
      first: [45],
    },
    players: [],
    winner: SAI,
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
