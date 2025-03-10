"use client";

import Badge from "react-bootstrap/Badge";
import React from "react";

import { Player } from "../data/players";
import { Points } from "../data/weeks";
import { PlayerRankings } from "../data/rankings";
import { Team } from "../data/teams";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";

const styles: Record<string, React.CSSProperties> = {
  badge: { width: "90px", position: "absolute", top: "16px", right: "16px" },
  indicatorGreen: {
    fontSize: "10pt",
    color: "green",
  },
  indicatorRed: {
    fontSize: "10pt",
    color: "red",
  },
  indicatorNeutral: {
    fontSize: "10pt",
  },
  avatar: {
    borderRadius: "12px",
    marginTop: "20px",
    marginLeft: "16px",
  },
  name: {
    fontSize: "25pt",
    marginLeft: "16px",
  },
  units: {
    fontSize: "10pt",
  },
  details: {
    position: "absolute",
    top: "74px",
    left: "145px",
  },
  hr: {
    margin: "16px",
    marginTop: "4px",
    marginBottom: "10px",
  },
  leftCard: {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    minHeight: "215px",
  },
  leftCardSmall: {
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    marginBottom: "0px",
    minHeight: "215px",
  },
  rightCard: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderLeft: "0px",
    minHeight: "215px",
  },
  rightCardSmall: {
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    borderTop: "0px",
    marginTop: "0px",
  },
};

class Scores extends React.Component<{
  thisWeekRankings: PlayerRankings;
  lastWeekRankings: PlayerRankings;
  weekNumber: number;
  teams: Array<Team>;
  isSmallScreen: boolean;
  screenWidth: number;
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
      isSmallScreen,
      screenWidth,
    } = this.props;

    return (
      <Container>
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
                  <span>
                    {thisWeekPoints}
                    <span style={styles.units}>pts</span>{" "}
                    <span style={styles.indicatorGreen}>
                      (+{thisWeekPoints - lastWeekPoints})
                    </span>
                  </span>
                );
              } else {
                return (
                  <span>
                    {thisWeekPoints}
                    <span style={styles.units}>pts</span>{" "}
                    <span style={styles.indicatorNeutral}>(-)</span>
                  </span>
                );
              }
            } else {
              return (
                <span>
                  {thisWeekPoints}
                  <span style={styles.units}>pts</span>
                </span>
              );
            }
          }

          let rank;

          if (lastWeekScore) {
            if (thisWeekScore.rank < lastWeekScore.rank) {
              rank = (
                <span>
                  #{thisWeekScore.rank + 1}{" "}
                  <span style={styles.indicatorGreen}>
                    (▲ {lastWeekScore.rank - thisWeekScore.rank})
                  </span>
                </span>
              );
            } else if (thisWeekScore.rank > lastWeekScore.rank) {
              rank = (
                <span>
                  #{thisWeekScore.rank + 1}{" "}
                  <span style={styles.indicatorRed}>
                    (▼ {thisWeekScore.rank - lastWeekScore.rank})
                  </span>
                </span>
              );
            } else {
              rank = <span>#{thisWeekScore.rank + 1}</span>;
              rank = (
                <span>
                  #{thisWeekScore.rank + 1}{" "}
                  <span style={styles.indicatorNeutral}>(-)</span>
                </span>
              );
            }
          } else {
            rank = <span>#{thisWeekScore.rank + 1}</span>;
          }

          function getDetailsView() {
            return (
              <>
                {thisWeekScore.total! === 0 && <>No points earned yet :(</>}
                {thisWeekScore.points.survival! > 0 && (
                  <>
                    <strong>Survived: </strong>
                    {getScore("survival")}
                    <br />{" "}
                  </>
                )}
                {thisWeekScore.points.votes! > 0 && (
                  <>
                    <strong>Correct votes: </strong>
                    {getScore("votes")}
                    <br />{" "}
                  </>
                )}
                {thisWeekScore.points.teamImmunity! > 0 && (
                  <>
                    <strong>Immunity (team): </strong>
                    {getScore("teamImmunity")}
                    <br />{" "}
                  </>
                )}
                {thisWeekScore.points.individualImmunity! > 0 && (
                  <>
                    <strong>Immunity (indiv.): </strong>
                    {getScore("individualImmunity")}
                    <br />
                  </>
                )}
                {thisWeekScore.points.advantage! > 0 && (
                  <>
                    <strong>Advantage: </strong>
                    {getScore("advantage")}
                    <br />
                  </>
                )}
                {thisWeekScore.points.idolFound! > 0 && (
                  <>
                    <strong>Idol found: </strong>
                    {getScore("idolFound")}
                    <br />
                  </>
                )}
                {thisWeekScore.points.voteNullified! > 0 && (
                  <>
                    <strong>Votes nullified: </strong>
                    {getScore("voteNullified")}
                    <br />
                  </>
                )}
                {thisWeekScore.points.placement! > 0 && (
                  <>
                    <strong>Jury placement: </strong>
                    {getScore("placement")}
                  </>
                )}
              </>
            );
          }

          return (
            <Row
              key={thisWeekScore.player.name}
              className="justify-content-center gx-0"
            >
              <Col xs={12} lg={9} xl={8} xxl={7}>
                <Row className="justify-content-center gx-0">
                  <Col xs={12} md={6}>
                    <Card
                      style={
                        screenWidth < 768
                          ? styles.leftCardSmall
                          : styles.leftCard
                      }
                    >
                      <div>
                        <span style={styles.name}>
                          {thisWeekScore.player.name}
                        </span>
                        <hr style={styles.hr} />
                        <img
                          src={`${thisWeekScore.player.name.toLowerCase()}.jpg`}
                          alt={thisWeekScore.player.name}
                          width={115}
                          height={115}
                          style={styles.avatar}
                        ></img>
                        <div style={styles.details}>
                          <br />
                          <strong>Rank: </strong>
                          {rank}
                          <br />
                          <strong>Total: </strong> {getScore("total")}
                          <br />
                          <strong>Popularity: </strong>
                          {teams.reduce((acc, curr) => {
                            return curr.players.includes(thisWeekScore.player)
                              ? acc + 1
                              : acc;
                          }, 0)}
                          <span style={styles.units}> teams</span>
                        </div>
                        {this.getBadge(thisWeekScore.player, weekNumber)}
                      </div>
                    </Card>
                  </Col>
                  <Col xs={12} md={5}>
                    <Card
                      style={
                        screenWidth < 768
                          ? styles.rightCardSmall
                          : styles.rightCard
                      }
                    >
                      <div>
                        <Card.Body>
                          {isSmallScreen ? (
                            <Accordion
                              flush
                              className="player-details-accordion"
                            >
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  Show details
                                </Accordion.Header>
                                <Accordion.Body>
                                  {getDetailsView()}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          ) : (
                            getDetailsView()
                          )}
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default Scores;
