"use client";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

import { computePlayerScore } from "../data/weeks";
import { TeamRankings } from "../data/rankings";

const styles = {
  indicatorGreenLarge: {
    fontSize: "12pt",
    color: "green",
  },
  cardNumber: {
    fontSize: "40pt",
    marginTop: "-5px",
  },
  accolades: {
    textAlign: "center" as any,
    position: "absolute" as any,
    right: "10px",
    top: "20px",
    fontSize: "12pt",
    lineHeight: "1",
    fontWeight: "400",
  },
  medalContainer: {
    backgroundColor: "#facf8b",
    borderRadius: "5px",
    padding: "5px",
    paddingTop: "10px",
    marginRight: "5px",
  },
  medal: {
    fontSize: "17pt",
  },
  playerEliminated: {
    textDecoration: "line-through",
    color: "red",
  },
  card: {
    minHeight: "270px",
  },
  teamName: {
    fontSize: "20pt",
    marginBottom: "20px",
  },
  teamNameSmall: {
    fontSize: "17pt",
    paddingBottom: "5px",
    marginBottom: "20px",
  },
  captain: {
    marginTop: "-5px",
    marginBottom: "20px",
    fontWeight: "400",
    fontSize: "12pt",
    color: "#84827a",
  },
};

class Teams extends React.Component<{
  thisWeekRankings: TeamRankings;
  currentWeek: number;
}> {
  render() {
    const { thisWeekRankings = [], currentWeek } = this.props;

    return (
      <Row>
        {...thisWeekRankings.map((teamScore) => {
          let accoladesComponent;

          if (teamScore.team.accolades) {
            const { first, second, third } = teamScore.team.accolades;
            accoladesComponent = (
              <div style={styles.accolades}>
                {first && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥇</span>S{first.join(", ")}
                  </span>
                )}
                {second && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥈</span>S{second.join(", ")}
                  </span>
                )}
                {third && (
                  <span style={styles.medalContainer}>
                    <span style={styles.medal}>🥉</span>S{third.join(", ")}
                  </span>
                )}
              </div>
            );
          }

          return (
            <Col key={teamScore.team.name} xs={12} sm={6} md={4} lg={3}>
              <Card style={styles.card}>
                {accoladesComponent}
                <Card.Body>
                  <Card.Title style={styles.cardNumber}>
                    {teamScore.rank === 0 ? "👑" : `#${teamScore.rank + 1}`}{" "}
                  </Card.Title>
                  <Card.Title
                    style={
                      teamScore.team.name.length > 21
                        ? styles.teamNameSmall
                        : styles.teamName
                    }
                  >
                    {teamScore.team.name}
                  </Card.Title>
                  <hr />
                  {/* <Card.Title style={styles.captain}>
                    {teamScore.team.captain}
                  </Card.Title>  */}
                  {...[...teamScore.team.players]
                    .sort(
                      (a, b) =>
                        computePlayerScore(b, currentWeek, "total") -
                        computePlayerScore(a, currentWeek, "total")
                    )
                    .map((player, j) => {
                      return (
                        <Card.Text key={j}>
                          {player === teamScore.team.winner ? (
                            <span style={styles.indicatorGreenLarge}>[W] </span>
                          ) : (
                            ""
                          )}
                          {typeof player.eliminatedWeek !== "undefined" ? (
                            <span style={styles.playerEliminated}>
                              {player.name}
                            </span>
                          ) : (
                            player.name
                          )}{" "}
                          ({computePlayerScore(player, currentWeek, "total")})
                        </Card.Text>
                      );
                    })}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Teams;
