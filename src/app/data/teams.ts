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
  AYSHA,
  GENEVIEVE,
  TEENY,
  SIERRA,
  RACHEL,
  ANIKA,
  ROME,
  SOL,
  KISHAN,
  JON,
  SAM,
  ANDY,
  TIYANA,
  SUE,
  CAROLINE,
  TK,
  GABE,
  KYLE,
} = PLAYERS;

export const teams: Array<Team> = [
  {
    name: "First Time in Fiji",
    captain: "Mike",
    winner: SOL,
    players: [SOL, CAROLINE, TEENY, TK, ANIKA, ANDY],
  },
  {
    name: "Sandy's Spynest",
    captain: "Sandy",
    accolades: {
      second: [46],
    },
    winner: SIERRA,
    players: [SIERRA, ANIKA, GABE, ROME, TK, AYSHA],
  },
  {
    name: "4blackcats",
    captain: "Carrie",
    winner: GENEVIEVE,
    players: [GENEVIEVE, ROME, TIYANA, GABE, KYLE, SIERRA],
  },
  {
    name: "Leafs Nation",
    captain: "Sean",
    accolades: {
      third: [46],
    },
    winner: GENEVIEVE,
    players: [GENEVIEVE, CAROLINE, KYLE, SIERRA, GABE, ANDY],
  },
  {
    name: "Wendy's Chickens",
    captain: "Alex",
    winner: ROME,
    players: [ROME, ANIKA, KYLE, SUE, KISHAN, ANDY],
  },
  {
    name: "Dean's T and A Team",
    captain: "Dean",
    accolades: {
      first: [44],
      third: [45],
    },
    winner: TK,
    players: [TK, TIYANA, TEENY, ANDY, ANIKA, AYSHA],
  },
  {
    name: "Charlie's Angels",
    captain: "Kara",
    winner: ANDY,
    players: [ANDY, KYLE, GENEVIEVE, RACHEL, KISHAN, TK],
  },
  {
    name: "Jeff's Dimples",
    captain: "Kevin",
    winner: ANDY,
    players: [ANDY, ROME, TK, KYLE, TEENY, TIYANA],
  },
  {
    name: "Truth Kamikazee",
    captain: "Katie",
    accolades: {
      second: [45],
    },
    winner: AYSHA,
    players: [AYSHA, RACHEL, SAM, SIERRA, TK, KYLE],
  },
  {
    name: "Muscle Mania",
    captain: "Frank",
    winner: TK,
    players: [TK, ANDY, CAROLINE, TIYANA, SAM, SOL],
  },
  {
    name: "Mermaid Dragon",
    captain: "Colleen",
    winner: JON,
    players: [JON, GENEVIEVE, SIERRA, TEENY, SOL, ANDY],
  },
  {
    name: "Fiji Kokoda",
    captain: "Greg",
    accolades: {
      first: [46],
      second: [44],
    },
    winner: KYLE,
    players: [KYLE, GABE, KISHAN, SOL, SAM, GENEVIEVE],
  },
  {
    name: "Totally Oswald",
    captain: "Meagan",
    winner: CAROLINE,
    players: [CAROLINE, KYLE, GENEVIEVE, SAM, SOL, TEENY],
  },
  {
    name: "Frank has Foot Fungus",
    captain: "Erick",
    winner: RACHEL,
    players: [RACHEL, TEENY, SOL, TK, SAM, KYLE],
  },
  {
    name: "Jeff's Six Pack",
    captain: "Alec",
    winner: ANDY,
    players: [ANDY, JON, GENEVIEVE, KYLE, SIERRA, SOL],
  },
  {
    name: "Here for Friendship",
    captain: "Andrea R",
    winner: KYLE,
    players: [KYLE, JON, KISHAN, SUE, TIYANA, TK],
  },
  {
    name: "TEAM JO",
    captain: "Joanne",
    winner: ROME,
    players: [ROME, SAM, GENEVIEVE, RACHEL, SOL, TIYANA],
  },
  {
    name: "UNDERDOGS",
    captain: "Stan",
    accolades: {
      second: [44],
    },
    winner: JON,
    players: [JON, SUE, KISHAN, AYSHA, SAM, ANIKA],
  },
  {
    name: "Challenge Beasts",
    captain: "Anne",
    accolades: {
      first: [45],
    },
    winner: KYLE,
    players: [KYLE, SAM, ANDY, TK, ANIKA, TEENY],
  },
  {
    name: "BIG DUCK",
    captain: "Dana",
    winner: SIERRA,
    players: [SIERRA, TEENY, KYLE, TK, SUE, ANDY],
  },
  {
    name: "Survivor 2025",
    captain: "Thomas",
    winner: TK,
    players: [TK, ROME, ANIKA, GABE, AYSHA, CAROLINE],
  },
  {
    name: "Boinko's Brats",
    captain: "Dan",
    winner: TEENY,
    players: [TEENY, TIYANA, TK, GABE, KISHAN, SIERRA],
  },
  {
    name: "Q's 6",
    captain: "Ryan Lemay",
    winner: RACHEL,
    players: [RACHEL, SIERRA, ROME, KYLE, GABE, CAROLINE],
  },
  {
    name: "Ancient Voices",
    captain: "Elana",
    winner: TIYANA,
    players: [TIYANA, ANDY, KISHAN, SUE, AYSHA, TK],
  },
  {
    name: "Play Your Idol",
    captain: "Elizabeth",
    winner: KYLE,
    players: [KYLE, SIERRA, ANDY, SOL, CAROLINE, TEENY],
  },
  {
    name: "Come On In Guys",
    captain: "Spen",
    winner: RACHEL,
    players: [RACHEL, TEENY, KYLE, TK, ANDY, CAROLINE],
  },
  {
    name: "Ogatally Devotes",
    captain: "Andy & Lally",
    winner: SAM,
    players: [SAM, KISHAN, TEENY, ANDY, AYSHA, TIYANA],
  },
  {
    name: "Got Nothin' For Ya",
    captain: "Leila",
    winner: TK,
    players: [TK, ANIKA, GENEVIEVE, KYLE, JON, SOL],
  },
  {
    name: "The Noob",
    captain: "Fekre",
    winner: TIYANA,
    players: [TIYANA, KYLE, TK, AYSHA, TEENY, SAM],
  },
  {
    name: "Clyde's Castaways",
    captain: "Taylor",
    winner: SOL,
    players: [SOL, ANDY, KYLE, TK, TEENY, TIYANA],
  },
  {
    name: "TRACKS",
    captain: "Ally",
    winner: ROME,
    players: [ROME, TIYANA, KISHAN, SUE, CAROLINE, ANIKA],
  },
  {
    name: "LIVIN'",
    captain: "Leigh",
    winner: TK,
    players: [TK, GENEVIEVE, CAROLINE, ROME, SIERRA, ANDY],
  },
  {
    name: "With You 100%",
    captain: "Jacob",
    winner: KYLE,
    players: [KYLE, TK, ANIKA, CAROLINE, SOL, RACHEL],
  },
  {
    name: "JSpenny",
    captain: "Jacklyn",
    winner: KYLE,
    players: [KYLE, SOL, TIYANA, TEENY, JON, ANDY],
  },
  {
    name: "House of Vidmar",
    captain: "Menard",
    winner: CAROLINE,
    players: [CAROLINE, SIERRA, SAM, KYLE, TK, TIYANA],
  },
  {
    name: "Fight For It?",
    captain: "Kian & Katie",
    winner: KYLE,
    players: [KYLE, ANDY, GENEVIEVE, KISHAN, TEENY, SOL],
  },
  {
    name: "NO SPOILERS",
    captain: "Brendan",
    accolades: {
      third: [45],
    },
    winner: CAROLINE,
    players: [CAROLINE, JON, GENEVIEVE, KYLE, SOL, SIERRA],
  },
  {
    name: "AA Team",
    captain: "Alyssa & Adam",
    winner: KYLE,
    players: [KYLE, CAROLINE, SOL, JON, SUE, TEENY],
  },
  {
    name: "Jer-iatrics",
    captain: "Jeremy",
    winner: TIYANA,
    players: [TIYANA, JON, GENEVIEVE, AYSHA, TK, KYLE],
  },
  {
    name: "S.A.D",
    captain: "Susan, Andrea & Diego",
    winner: KYLE,
    players: [KYLE, TK, ANDY, SIERRA, TEENY, SOL],
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
    winner: AYSHA,
    players: [AYSHA, GENEVIEVE, TEENY, SIERRA, RACHEL, ANIKA],
  },
  {
    name: "2",
    winner: AYSHA,
    players: [ROME, SOL, KISHAN, JON, SAM, ANDY],
  },
  {
    name: "3",
    winner: AYSHA,
    players: [TIYANA, SUE, CAROLINE, TK, GABE, KYLE],
  },
  {
    name: "4",
    winner: AYSHA,
    players: [SOL, KISHAN, JON, SAM, ANDY, TIYANA],
  },
  {
    name: "5",
    winner: AYSHA,
    players: [TK, GABE, KYLE, ROME, SOL, KISHAN],
  },
  {
    name: "6",
    winner: AYSHA,
    players: [RACHEL, ANIKA, ROME, SOL, KISHAN, JON],
  },
  {
    name: "7",
    winner: AYSHA,
    players: [JON, SAM, ANDY, TIYANA, SUE, CAROLINE],
  },
  {
    name: "8",
    winner: AYSHA,
    players: [CAROLINE, TK, GABE, KYLE, ROME, SOL],
  },
];
