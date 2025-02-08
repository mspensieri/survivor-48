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
    AYSHA: { teamImmunity: 1 },
    GENEVIEVE: { teamImmunity: 1 },
    KISHAN: { teamImmunity: 1 },
    ROME: { teamImmunity: 1, advantage: 1 },
    SOL: { teamImmunity: 1 },
    TEENY: { teamImmunity: 1 },
    CAROLINE: { teamImmunity: 1 },
    GABE: {
      advantage: 2,
      idolFound: 2,
      teamImmunity: 1,
    },
    KYLE: { teamImmunity: 1 },
    SUE: { teamImmunity: 1 },
    TK: { teamImmunity: 1 },
    TIYANA: { teamImmunity: 1 },
  },
  {
    ANDY: { teamImmunity: 1 },
    ANIKA: { teamImmunity: 1 },
    RACHEL: { teamImmunity: 1 },
    SAM: { teamImmunity: 1, advantage: 1, idolFound: 2 },
    SIERRA: { teamImmunity: 1 },
    AYSHA: { teamImmunity: 1 },
    GENEVIEVE: { teamImmunity: 1 },
    KISHAN: {
      teamImmunity: 1,
    },
    ROME: { teamImmunity: 1, idolFound: 2 },
    SOL: { teamImmunity: 1 },
    TEENY: { teamImmunity: 1 },
  },
  {
    ANDY: { teamImmunity: 1 },
    ANIKA: { teamImmunity: 1 },
    RACHEL: { teamImmunity: 1 },
    SAM: { teamImmunity: 1 },
    SIERRA: { teamImmunity: 1 },
    ROME: { voteNullified: 1, advantage: 1 },
    CAROLINE: { teamImmunity: 1 },
    GABE: { teamImmunity: 1 },
    KYLE: { teamImmunity: 1 },
    SUE: { teamImmunity: 1 },
    TIYANA: { teamImmunity: 1 },
  },
  {
    ANDY: { teamImmunity: 1, advantage: 1 },
    ANIKA: { teamImmunity: 1 },
    RACHEL: { teamImmunity: 1 },
    SAM: { teamImmunity: 1 },
    SIERRA: { teamImmunity: 1 },
    CAROLINE: { teamImmunity: 1, advantage: 1 },
    GABE: { teamImmunity: 1 },
    KYLE: { teamImmunity: 1 },
    SUE: { teamImmunity: 1, advantage: 1, idolFound: 2 },
    TIYANA: { teamImmunity: 1 },
    TEENY: { advantage: 1 },
  },
  {
    CAROLINE: { teamImmunity: 1 },
    GABE: { teamImmunity: 1 },
    KYLE: { teamImmunity: 1 },
    SUE: { teamImmunity: 1 },
    TIYANA: { teamImmunity: 1 },
    GENEVIEVE: { teamImmunity: 1 },
    ROME: { teamImmunity: 1 },
    SOL: { teamImmunity: 1 },
    TEENY: { teamImmunity: 1 },
  },
  {
    GENEVIEVE: { advantage: 1 },
    KYLE: { individualImmunity: 2 },
  },
  {
    ANDY: { teamImmunity: 1 },
    SAM: { teamImmunity: 1 },
    SIERRA: { teamImmunity: 1 },
    SOL: { teamImmunity: 1, advantage: 1 },
    TEENY: { teamImmunity: 1 },
    GENEVIEVE: { teamImmunity: 1 },
    KYLE: { individualImmunity: 2 },
  },
  {
    KYLE: { individualImmunity: 2 },
    SUE: { individualImmunity: 2 },
    RACHEL: { idolFound: 2 },
    SIERRA: { placement: 2 },
  },
  {
    GABE: { individualImmunity: 2 },
    SOL: { placement: 2 },
  },
  {
    KYLE: { individualImmunity: 2 },
    GABE: { placement: 2 },
  },
  {
    KYLE: { placement: 2 },
    RACHEL: { advantage: 1, individualImmunity: 2 },
  },
  {
    RACHEL: { individualImmunity: 2 },
    CAROLINE: { placement: 2 },
  },
  {
    RACHEL: { individualImmunity: 2, voteNullified: 3 },
    ANDY: { placement: 2 },
    GENEVIEVE: { placement: 3, individualImmunity: 2 },
  },
  {
    RACHEL: { placement: 7, individualImmunity: 2 },
    SUE: { placement: 5 },
    SAM: { placement: 6 },
    TEENY: { placement: 3 },
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
