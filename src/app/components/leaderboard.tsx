"use client";

import Table from "react-bootstrap/Table";
import React from "react";

import { TeamRankings } from "../data/rankings";

const styles = {
  indicatorGreen: {
    fontSize: "10pt",
    color: "green",
  },
  indicatorRed: {
    fontSize: "10pt",
    color: "red",
  },
  medals: {
    fontSize: "17pt",
  },
  captain: {
    fontSize: "8pt",
    color: "#84827a",
  },
  row: {
    lineHeight: "1",
  },
};

class Leaderboard extends React.Component<{
  thisWeekRankings: TeamRankings;
  lastWeekRankings: TeamRankings;
}> {
  render() {
    const { thisWeekRankings = [], lastWeekRankings = [] } = this.props;

    return (
      <Table striped responsive>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {...thisWeekRankings.map((thisWeekScore) => {
            const lastWeekScore = lastWeekRankings?.find(
              (r) => r.team === thisWeekScore.team
            );

            function getScore() {
              if (lastWeekScore) {
                if (thisWeekScore.total > lastWeekScore.total) {
                  return (
                    <td>
                      {thisWeekScore.total}{" "}
                      <span style={styles.indicatorGreen}>
                        (+{thisWeekScore.total - lastWeekScore.total})
                      </span>
                    </td>
                  );
                } else {
                  return <td>{thisWeekScore.total || "-"}</td>;
                }
              } else {
                return <td>{thisWeekScore.total || "-"}</td>;
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

            let medals;
            if (thisWeekScore.team.accolades) {
              const { first, second, third } = thisWeekScore.team.accolades;

              const medalsString = [
                first && "🥇".repeat(first.length),
                second && "🥈".repeat(second.length),
                third && "🥉".repeat(third.length),
              ]
                .filter((a) => a)
                .join("");

              medals = (
                <span>
                  {" "}
                  (<span style={styles.medals}>{medalsString}</span>)
                </span>
              );
            }

            return (
              <tr key={thisWeekScore.team.name}>
                {rank}
                <td style={styles.row}>
                  {thisWeekScore.team.name}
                  {medals}
                  <br />
                  <span style={styles.captain}>
                    {thisWeekScore.team.captain}
                  </span>
                </td>
                <td>{getScore()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Leaderboard;
