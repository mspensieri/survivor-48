import { PlayerKeys, Player } from "./players";

export type Points = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  voteNullified?: number;
  placement?: number;
};

export const airDates = [
  "Sept 18",
  "Sept 25",
  "Oct 2",
  "Oct 9",
  "Oct 16",
  "Oct 23",
  "Oct 30",
  "Nov 6",
  "Nov 13",
  "Nov 20",
  "Nov 27",
  "Dec 4",
  "Dec 11",
  "Dec 18",
];

export const weeks: Array<Partial<Record<PlayerKeys, Points>>> = [
  {
    STEPHANIE: { teamImmunity: 1 },
    SHAUHIN: { teamImmunity: 1 },
    EVA: { teamImmunity: 1 },
    MITCH: { teamImmunity: 1, advantage: 1 },
    SAI: { teamImmunity: 1 },
    JOE: { teamImmunity: 1 },
    KAMILLA: { teamImmunity: 1 },
    DAVID: {
      advantage: 2,
      idolFound: 2,
      teamImmunity: 1,
    },
    KYLE: { teamImmunity: 1 },
    THOMAS: { teamImmunity: 1 },
    KEVIN: { teamImmunity: 1 },
    CEDREK: { teamImmunity: 1 },
  },
  {
    CHARITY: { teamImmunity: 1 },
    JUSTIN: { teamImmunity: 1 },
    BIANCA: { teamImmunity: 1 },
    CHRISSY: { teamImmunity: 1, advantage: 1, idolFound: 2 },
    STAR: { teamImmunity: 1 },
    STEPHANIE: { teamImmunity: 1 },
    SHAUHIN: { teamImmunity: 1 },
    EVA: {
      teamImmunity: 1,
    },
    MITCH: { teamImmunity: 1, idolFound: 2 },
    SAI: { teamImmunity: 1 },
    JOE: { teamImmunity: 1 },
  },
  {
    CHARITY: { teamImmunity: 1 },
    JUSTIN: { teamImmunity: 1 },
    BIANCA: { teamImmunity: 1 },
    CHRISSY: { teamImmunity: 1 },
    STAR: { teamImmunity: 1 },
    MITCH: { voteNullified: 1, advantage: 1 },
    KAMILLA: { teamImmunity: 1 },
    DAVID: { teamImmunity: 1 },
    KYLE: { teamImmunity: 1 },
    THOMAS: { teamImmunity: 1 },
    CEDREK: { teamImmunity: 1 },
  },
  {
    CHARITY: { teamImmunity: 1, advantage: 1 },
    JUSTIN: { teamImmunity: 1 },
    BIANCA: { teamImmunity: 1 },
    CHRISSY: { teamImmunity: 1 },
    STAR: { teamImmunity: 1 },
    KAMILLA: { teamImmunity: 1, advantage: 1 },
    DAVID: { teamImmunity: 1 },
    KYLE: { teamImmunity: 1 },
    THOMAS: { teamImmunity: 1, advantage: 1, idolFound: 2 },
    CEDREK: { teamImmunity: 1 },
    JOE: { advantage: 1 },
  },
  {
    KAMILLA: { teamImmunity: 1 },
    DAVID: { teamImmunity: 1 },
    KYLE: { teamImmunity: 1 },
    THOMAS: { teamImmunity: 1 },
    CEDREK: { teamImmunity: 1 },
    SHAUHIN: { teamImmunity: 1 },
    MITCH: { teamImmunity: 1 },
    SAI: { teamImmunity: 1 },
    JOE: { teamImmunity: 1 },
  },
  {
    SHAUHIN: { advantage: 1 },
    KYLE: { individualImmunity: 2 },
  },
  {
    CHARITY: { teamImmunity: 1 },
    CHRISSY: { teamImmunity: 1 },
    STAR: { teamImmunity: 1 },
    SAI: { teamImmunity: 1, advantage: 1 },
    JOE: { teamImmunity: 1 },
    SHAUHIN: { teamImmunity: 1 },
    KYLE: { individualImmunity: 2 },
  },
  {
    KYLE: { individualImmunity: 2 },
    THOMAS: { individualImmunity: 2 },
    BIANCA: { idolFound: 2 },
    STAR: { placement: 2 },
  },
  {
    DAVID: { individualImmunity: 2 },
    SAI: { placement: 2 },
  },
  {
    KYLE: { individualImmunity: 2 },
    DAVID: { placement: 2 },
  },
  {
    KYLE: { placement: 2 },
    BIANCA: { advantage: 1, individualImmunity: 2 },
  },
  {
    BIANCA: { individualImmunity: 2 },
    KAMILLA: { placement: 2 },
  },
  {
    BIANCA: { individualImmunity: 2, voteNullified: 3 },
    CHARITY: { placement: 2 },
    SHAUHIN: { placement: 3, individualImmunity: 2 },
  },
  {
    BIANCA: { placement: 7, individualImmunity: 2 },
    THOMAS: { placement: 5 },
    CHRISSY: { placement: 6 },
    JOE: { placement: 3 },
  },
];

export function computePlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Points | "total"
) {
  let score = 0;

  for (const week of weeks.slice(0, weekNumber + 1)) {
    if (scoreKey === "total") {
      score +=
        (week[player.key]?.teamImmunity || 0) +
        (week[player.key]?.individualImmunity || 0) +
        (week[player.key]?.advantage || 0) +
        (week[player.key]?.idolFound || 0) +
        (week[player.key]?.voteNullified || 0) +
        (week[player.key]?.placement || 0);
    } else {
      score += week[player.key]?.[scoreKey] || 0;
    }
  }

  return score;
}

export function getPlayerScore(
  player: Player,
  weekNumber: number,
  scoreKey: keyof Points | "total"
) {
  return computePlayerScore(player, weekNumber, scoreKey) || "-";
}
