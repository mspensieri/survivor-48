"use client";

const styles = {
  bold: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  rulesList: { listStyleType: "disc", lineHeight: 2 },
  firstListItem: {
    marginTop: "10px",
  },
};

function Rules() {
  return (
    <div>
      The score per team is the sum of the scores of all players on the team
      across all weeks of play. In the event of a tie, the team whose predicted
      winner made it farthest in the season will win the pool.
      <br />
      <br /> The scores per player are calculated according to the following
      rules:
      <ul style={styles.rulesList}>
        <li style={styles.firstListItem}>
          <span style={styles.bold}>Immunity (team):</span> If a player is part
          of a team winning immunity: they receive 1 point
        </li>
        <li>
          <span style={styles.bold}>Immunity (indiv.):</span> If a player wins
          individual immunity: they receive 2 points
        </li>
        <li>
          <span style={styles.bold}>Advantage:</span> If a player receives an
          advantage (from a journey, a random twist, etc.): they receive 1 point
        </li>
        <li>
          <span style={styles.bold}>Idols Found:</span> If a player finds a
          hidden immunity idol: they receive 2 points
        </li>
        <li>
          <span style={styles.bold}>Votes Nullified:</span> If a player properly
          uses an idol: they receive 1 point for every vote nullified
        </li>
        <li>
          <span style={styles.bold}>Jury Placement:</span> Initial jury members
          will receive 2 points, the 5th and 4th runner up get 3 points, 3rd and
          2nd runner up will receive 5 points, and the winner will receive 7
          points. The player who wins fire will receive 1 extra point.{" "}
        </li>
      </ul>
    </div>
  );
}

export default Rules;
