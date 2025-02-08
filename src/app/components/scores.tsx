"use client";

import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import React from "react";

import { Player } from "../data/players";
import { Points } from "../data/weeks";
import { PlayerRankings } from "../data/rankings";
import { Team } from "../data/teams";

const styles = {
  badge: { width: "90px" },
  indicatorGreen: {
    fontSize: "10pt",
    color: "green",
  },
  indicatorRed: {
    fontSize: "10pt",
    color: "red",
  },
};

class Scores extends React.Component<{
  thisWeekRankings: PlayerRankings;
  lastWeekRankings: PlayerRankings;
  weekNumber: number;
  teams: Array<Team>;
}> {
  getBadge(player: Player, weekNumber: number) {
    if (
      typeof player.eliminatedWeek !== "undefined" &&
      weekNumber >= player.eliminatedWeek
    ) {
      if (player.status === "eliminated") {
        return (
          <Badge bg="danger" style={styles.badge}>
            Eliminated
          </Badge>
        );
      } else if (player.status === "jury") {
        return (
          <Badge bg="info" style={styles.badge}>
            Jury
          </Badge>
        );
      }
    } else if (player.status === "winner" && weekNumber === 13) {
      return (
        <Badge bg="success" style={styles.badge}>
          Winner
        </Badge>
      );
    }

    return (
      <Badge bg="secondary" style={styles.badge}>
        Active
      </Badge>
    );
  }

  render() {
    const {
      thisWeekRankings = [],
      lastWeekRankings = [],
      weekNumber,
      teams,
    } = this.props;

    return (
      <Table striped responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player Name</th>
            <th>Total Points</th>
            <th>Teams</th>
            <th>Status</th>
            <th>Immunity (team)</th>
            <th>Immunity (indiv.)</th>
            <th>Advantage</th>
            <th>Idols Found</th>
            <th>Votes Nullified</th>
            <th>Jury Placement</th>
          </tr>
        </thead>
        <tbody>
          {...thisWeekRankings.map((thisWeekScore) => {
            const lastWeekScore = lastWeekRankings?.find(
              (p) => p.player === thisWeekScore.player
            );

            function getScore(scoreKey: keyof Points | "total") {
              const thisWeekPoints =
                (scoreKey === "total"
                  ? thisWeekScore.total
                  : thisWeekScore.points[scoreKey]) || 0;
              const lastWeekPoints =
                (scoreKey === "total"
                  ? lastWeekScore?.total
                  : lastWeekScore?.points[scoreKey]) || 0;

              if (lastWeekScore) {
                if (thisWeekPoints > lastWeekPoints) {
                  return (
                    <td>
                      {thisWeekPoints}{" "}
                      <span style={styles.indicatorGreen}>
                        (+{thisWeekPoints - lastWeekPoints})
                      </span>
                    </td>
                  );
                } else {
                  return <td>{thisWeekPoints || "-"}</td>;
                }
              } else {
                return <td>{thisWeekPoints || "-"}</td>;
              }
            }

            let rank;

            if (lastWeekScore) {
              if (thisWeekScore.rank < lastWeekScore.rank) {
                rank = (
                  <td>
                    #{thisWeekScore.rank + 1}{" "}
                    <span style={styles.indicatorGreen}>
                      (▲ {lastWeekScore.rank - thisWeekScore.rank})
                    </span>
                  </td>
                );
              } else if (thisWeekScore.rank > lastWeekScore.rank) {
                rank = (
                  <td>
                    #{thisWeekScore.rank + 1}{" "}
                    <span style={styles.indicatorRed}>
                      (▼ {thisWeekScore.rank - lastWeekScore.rank})
                    </span>
                  </td>
                );
              } else {
                rank = <td>#{thisWeekScore.rank + 1}</td>;
              }
            } else {
              rank = <td>#{thisWeekScore.rank + 1}</td>;
            }

            return (
              <tr key={thisWeekScore.player.name}>
                {rank}
                <td>{thisWeekScore.player.name}</td>
                <td>{getScore("total")}</td>
                <td>
                  {teams.reduce((acc, curr) => {
                    return curr.players.includes(thisWeekScore.player)
                      ? acc + 1
                      : acc;
                  }, 0)}
                </td>
                <td>{this.getBadge(thisWeekScore.player, weekNumber)}</td>
                <td>{getScore("teamImmunity")}</td>
                <td>{getScore("individualImmunity")}</td>
                <td>{getScore("advantage")}</td>
                <td>{getScore("idolFound")}</td>
                <td>{getScore("voteNullified")}</td>
                <td>{getScore("placement")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Scores;
