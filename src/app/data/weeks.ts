import { PlayerKeys, Player } from "./players";

export type Points = {
  teamImmunity?: number;
  individualImmunity?: number;
  advantage?: number;
  idolFound?: number;
  voteNullified?: number;
  placement?: number;
  survival?: number;
  votes?: number;
};

export const airDates = [
  "Feb 26",
  "Mar 5",
  "Mar 12",
  "Mar 19",
  "Mar 26",
  "Apr 2",
  "Apr 9",
  "Apr 16",
  "Apr 23",
  "Apr 30",
  "May 7",
  "May 14",
  "May 21",
  "May 28",
];

export const weeks: Array<Partial<Record<PlayerKeys, Points>>> = [
  {
    SAI: {
      votes: 1,
      advantage: 1,
      idolFound: 2,
    },
    KEVIN: {
      votes: 1,
    },
    CEDREK: {
      votes: 1,
    },
    JUSTIN: {
      votes: 1,
    },
    KAMILLA: {
      teamImmunity: 1,
    },
    CHARITY: {
      teamImmunity: 1,
    },
    CHRISSY: {
      teamImmunity: 1,
    },
    DAVID: {
      teamImmunity: 1,
    },
    KYLE: {
      teamImmunity: 1,
    },
    MITCH: {
      teamImmunity: 1,
    },
    BIANCA: {
      teamImmunity: 1,
    },
    EVA: {
      teamImmunity: 1,
    },
    JOE: {
      teamImmunity: 1,
    },
    SHAUHIN: {
      teamImmunity: 1,
    },
    STAR: {
      teamImmunity: 1,
    },
    THOMAS: {
      teamImmunity: 1,
    },
  },
  {
    SAI: {
      voteNullified: 1,
      survival: 1,
      votes: 1,
    },
    KEVIN: {
      survival: 1,
    },
    CEDREK: {
      survival: 1,
      votes: 1,
    },
    JUSTIN: {
      survival: 1,
      votes: 1,
    },
    MARY: {
      survival: 1,
    },
    KAMILLA: {
      survival: 1,
      teamImmunity: 1,
    },
    CHARITY: {
      survival: 1,
      teamImmunity: 1,
    },
    CHRISSY: {
      survival: 1,
      teamImmunity: 1,
    },
    DAVID: {
      survival: 1,
      teamImmunity: 1,
    },
    KYLE: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
      idolFound: 2,
    },
    MITCH: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    BIANCA: {
      survival: 1,
      teamImmunity: 1,
    },
    EVA: {
      survival: 1,
      teamImmunity: 1,
    },
    JOE: {
      survival: 1,
      teamImmunity: 1,
    },
    SHAUHIN: {
      survival: 1,
      teamImmunity: 1,
    },
    STAR: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    THOMAS: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
  },
  {
    SAI: {
      survival: 1,
    },
    CEDREK: {
      survival: 1,
      votes: 1,
    },
    JUSTIN: {
      survival: 1,
    },
    MARY: {
      survival: 1,
      voteNullified: 2,
    },
    KAMILLA: {
      survival: 1,
      teamImmunity: 1,
      advantage: 1,
    },
    CHARITY: {
      survival: 1,
      teamImmunity: 1,
    },
    CHRISSY: {
      survival: 1,
      teamImmunity: 1,
    },
    DAVID: {
      survival: 1,
      teamImmunity: 1,
    },
    KYLE: {
      survival: 1,
      teamImmunity: 1,
    },
    MITCH: {
      survival: 1,
      teamImmunity: 1,
    },
    BIANCA: {
      survival: 1,
      teamImmunity: 1,
    },
    EVA: {
      survival: 1,
      teamImmunity: 1,
    },
    JOE: {
      survival: 1,
      teamImmunity: 1,
    },
    SHAUHIN: {
      survival: 1,
      teamImmunity: 1,
    },
    STAR: {
      survival: 1,
      teamImmunity: 1,
    },
    THOMAS: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    SAI: {
      survival: 1,
      teamImmunity: 1,
    },
    CEDREK: {
      survival: 1,
      teamImmunity: 1,
    },
    MARY: {
      survival: 1,
      teamImmunity: 1,
    },
    KAMILLA: {
      survival: 1,
      votes: 1,
    },
    CHARITY: {
      survival: 1,
      teamImmunity: 1,
    },
    CHRISSY: {
      survival: 1,
      teamImmunity: 1,
    },
    DAVID: {
      survival: 1,
      teamImmunity: 1,
    },
    KYLE: {
      survival: 1,
      voteNullified: 3,
      votes: 1,
    },
    MITCH: {
      survival: 1,
      teamImmunity: 1,
    },
    BIANCA: {
      survival: 1,
      teamImmunity: 1,
    },
    EVA: {
      survival: 1,
      teamImmunity: 1,
    },
    JOE: {
      survival: 1,
    },
    SHAUHIN: {
      survival: 1,
    },
    STAR: {
      survival: 1,
      teamImmunity: 1,
    },
    THOMAS: {
      survival: 1,
    },
  },
  {
    SAI: {
      survival: 1,
    },
    CEDREK: {
      survival: 1,
      votes: 1,
    },
    MARY: {
      survival: 1,
      teamImmunity: 1,
    },
    KAMILLA: {
      survival: 1,
      teamImmunity: 1,
    },
    CHARITY: {
      survival: 1,
      teamImmunity: 1,
    },
    CHRISSY: {
      survival: 1,
      votes: 1,
    },
    DAVID: {
      survival: 1,
      teamImmunity: 1,
    },
    KYLE: {
      survival: 1,
      teamImmunity: 1,
    },
    MITCH: {
      survival: 1,
    },
    BIANCA: {
      survival: 1,
    },
    EVA: {
      survival: 1,
      teamImmunity: 1,
      idolFound: 2,
    },
    JOE: {
      survival: 1,
      teamImmunity: 1,
    },
    SHAUHIN: {
      survival: 1,
      teamImmunity: 1,
    },
    STAR: {
      survival: 1,
      teamImmunity: 1,
    },
  },
  {
    SAI: {
      survival: 1,
      advantage: 1,
    },
    CEDREK: {
      survival: 1,
      votes: 1,
    },
    MARY: {
      survival: 1,
      votes: 1,
    },
    KAMILLA: {
      survival: 1,
      votes: 1,
    },
    CHARITY: {
      survival: 1,
    },
    CHRISSY: {
      survival: 1,
      votes: 1,
    },
    DAVID: {
      survival: 1,
    },
    KYLE: {
      survival: 1,
      individualImmunity: 2,
      votes: 1,
    },
    MITCH: {
      survival: 1,
    },
    EVA: {
      survival: 1,
    },
    JOE: {
      survival: 1,
      votes: 1,
    },
    SHAUHIN: {
      survival: 1,
    },
    STAR: {
      survival: 1,
      votes: 1,
    },
  },
  {
    SAI: {
      survival: 1,
    },
    CEDREK: {
      survival: 1,
      placement: 2,
    },
    MARY: {
      survival: 1,
      votes: 1,
    },
    KAMILLA: {
      survival: 1,
      votes: 1,
    },
    CHRISSY: {
      survival: 1,
      votes: 1,
    },
    DAVID: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    KYLE: {
      survival: 1,
      votes: 1,
    },
    MITCH: {
      survival: 1,
      votes: 1,
    },
    EVA: {
      survival: 1,
      votes: 1,
    },
    JOE: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    SHAUHIN: {
      survival: 1,
      votes: 1,
    },
    STAR: {
      survival: 1,
      votes: 1,
    },
  },
  {
    MARY: {
      survival: 1,
      votes: 1,
    },
    KAMILLA: {
      survival: 1,
      votes: 1,
    },
    CHRISSY: {
      survival: 1,
      placement: 2,
    },
    DAVID: {
      survival: 1,
      votes: 1,
    },
    KYLE: {
      survival: 1,
      votes: 1,
    },
    MITCH: {
      survival: 1,
      votes: 1,
    },
    EVA: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    JOE: {
      survival: 1,
      votes: 1,
    },
    SHAUHIN: {
      survival: 1,
      votes: 1,
    },
    STAR: {
      survival: 1,
    },
  },
  {
    MARY: {
      survival: 1,
    },
    KAMILLA: {
      survival: 1,
      votes: 1,
    },
    DAVID: {
      survival: 1,
      placement: 2,
    },
    KYLE: {
      survival: 1,
      votes: 1,
    },
    MITCH: {
      survival: 1,
      votes: 1,
    },
    EVA: {
      survival: 1,
      votes: 1,
      advantage: 1,
    },
    JOE: {
      survival: 1,
      votes: 1,
      individualImmunity: 2,
    },
    SHAUHIN: {
      survival: 1,
      votes: 1,
    },
    STAR: {
      survival: 1,
    },
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
        (week[player.key]?.survival || 0) +
        (week[player.key]?.votes || 0) +
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
