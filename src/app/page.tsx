"use client";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/esm/Navbar";
import { useEffect, useState } from "react";

import { players } from "./data/players";
import { airDates, weeks } from "./data/weeks";
import { getTeamRankings, getPlayerRankings } from "./data/rankings";
import { teams, fakeTeams } from "./data/teams";
import Leaderboard from "./components/leaderboard";
import Teams from "./components/teams";
import Scores from "./components/scores";
import Rules from "./components/rules";
import WeekSelectorAccordion from "./components/weekSelectorAccordion";

const currentWeek = weeks.length;
const teamRankings = getTeamRankings(teams);
const playerRankings = getPlayerRankings(players);

const styles: Record<string, React.CSSProperties> = {
  spoilersButton: {
    color: "var(--link-color)",
    backgroundColor: "var(--background-color)",
    border: "1px solid var(--link-color)",
    width: "200px",
    height: "50px",
    borderRadius: "25px",
    left: "50%",
    marginTop: "200px",
    transform: "translateX(-50%)",
    display: "block",
    position: "absolute",
    zIndex: 10,
  },
  logo: {
    position: "absolute",
    width: "180px",
    margin: "auto",
    left: 320,
  },
  logoSmall: {
    display: "none",
  },
};

function Page() {
  const [reveal, setReveal] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [screenWidth, setScreenWidth] = useState(-1);
  const [selectedWeek, setSelectedWeek] = useState(currentWeek - 1);

  useEffect(() => {
    setIsSmallScreen(global.window.innerWidth < 768);
    setScreenWidth(global.window.innerWidth);

    const handleResize = () => {
      setIsSmallScreen(global.window.innerWidth < 768);
      setScreenWidth(global.window.innerWidth);
    };

    global.window.addEventListener("resize", handleResize);
  }, []);

  function SpoilersButton() {
    return (
      <button
        style={styles.spoilersButton as any}
        onClick={() => setReveal(true)}
      >
        Reveal Spoilers
      </button>
    );
  }

  function SpoilerMask({ children }: { children: React.ReactNode }) {
    return (
      <div className="blur-container">
        <SpoilersButton></SpoilersButton>
        <div className="blur">{children}</div>
      </div>
    );
  }

  function generateLeaderboardForWeek(weekNumber: number) {
    if (!reveal && weekNumber === currentWeek - 1) {
      return (
        <SpoilerMask>
          <Leaderboard
            thisWeekRankings={getTeamRankings(fakeTeams)[0]}
            lastWeekRankings={getTeamRankings(fakeTeams)[0]}
          ></Leaderboard>
        </SpoilerMask>
      );
    } else {
      return (
        <Leaderboard
          thisWeekRankings={teamRankings[weekNumber]}
          lastWeekRankings={teamRankings[weekNumber - 1]}
        ></Leaderboard>
      );
    }
  }

  function generatePlayerScoresForWeek(weekNumber: number) {
    if (!reveal && weekNumber === currentWeek - 1) {
      return (
        <SpoilerMask>
          <Scores
            thisWeekRankings={getPlayerRankings(players)[0]}
            lastWeekRankings={getPlayerRankings(players)[0]}
            weekNumber={0}
            teams={teams}
            isSmallScreen={isSmallScreen}
            screenWidth={screenWidth}
          ></Scores>
        </SpoilerMask>
      );
    } else {
      return (
        <Scores
          thisWeekRankings={playerRankings[weekNumber]}
          lastWeekRankings={playerRankings[weekNumber - 1]}
          weekNumber={weekNumber}
          teams={teams}
          isSmallScreen={isSmallScreen}
          screenWidth={screenWidth}
        ></Scores>
      );
    }
  }

  function generateTeams() {
    if (reveal) {
      return (
        <Teams
          thisWeekRankings={teamRankings[currentWeek - 1]}
          currentWeek={currentWeek}
        ></Teams>
      );
    } else {
      return (
        <SpoilerMask>
          <Teams
            thisWeekRankings={getTeamRankings(fakeTeams)[0]}
            currentWeek={currentWeek}
          ></Teams>
        </SpoilerMask>
      );
    }
  }

  if (screenWidth < 0) {
    return <div></div>;
  }

  return (
    <Row>
      <img
        src="logo.webp"
        alt="survivor logo"
        className="logo"
        style={{
          ...styles.logo,
          ...(screenWidth < 510 ? styles.logoSmall : {}),
        }}
      ></img>
      <Navbar className="bg-body-tertiary">
        <Navbar.Brand>
          <img
            src="torch.webp"
            alt="survivor logo"
            width={30}
            height={30}
            style={{ display: "inline" }}
          ></img>
          Survivor Pool Season 48
        </Navbar.Brand>
      </Navbar>
      <Tabs
        defaultActiveKey="leaderboard"
        id="uncontrolled-tab-example"
        variant="underline"
        className="mb-3"
        style={{ paddingLeft: "15px" }}
      >
        <Tab eventKey="leaderboard" title="Leaderboard">
          {isSmallScreen ? (
            <div>
              <WeekSelectorAccordion
                selectedWeek={selectedWeek}
                setSelectedWeek={setSelectedWeek}
                currentWeek={currentWeek}
              ></WeekSelectorAccordion>
              {generateLeaderboardForWeek(selectedWeek)}
            </div>
          ) : (
            <Tabs
              activeKey={`${selectedWeek + 1}`}
              onSelect={(k) => setSelectedWeek(Number(k) - 1)}
              id="week-selector-leaderboard"
              className="mb-3"
            >
              {[...Array(13)].map((_, index) => {
                const weekNumber = index;
                const disabled = currentWeek < weekNumber + 1;
                return (
                  <Tab
                    key={weekNumber}
                    eventKey={weekNumber + 1}
                    title={airDates[weekNumber]}
                    disabled={disabled}
                  >
                    {generateLeaderboardForWeek(weekNumber)}
                  </Tab>
                );
              })}
            </Tabs>
          )}
        </Tab>
        <Tab eventKey="teams" title="Teams">
          {generateTeams()}
        </Tab>
        <Tab eventKey="players" title="Players">
          {isSmallScreen ? (
            <div>
              <WeekSelectorAccordion
                selectedWeek={selectedWeek}
                setSelectedWeek={setSelectedWeek}
                currentWeek={currentWeek}
              ></WeekSelectorAccordion>
              {generatePlayerScoresForWeek(selectedWeek)}
            </div>
          ) : (
            <Tabs
              activeKey={`${selectedWeek + 1}`}
              onSelect={(k) => setSelectedWeek(Number(k) - 1)}
              id="week-selector-players"
              className="mb-3"
            >
              {[...Array(13)].map((_, index) => {
                const weekNumber = index;
                const disabled = currentWeek < weekNumber + 1;
                return (
                  <Tab
                    key={weekNumber}
                    eventKey={weekNumber + 1}
                    title={airDates[weekNumber]}
                    disabled={disabled}
                  >
                    {generatePlayerScoresForWeek(weekNumber)}
                  </Tab>
                );
              })}
            </Tabs>
          )}
        </Tab>
        <Tab eventKey="rules" title="Rules" className="rules">
          <Rules></Rules>
        </Tab>
      </Tabs>
    </Row>
  );
}

export default Page;
