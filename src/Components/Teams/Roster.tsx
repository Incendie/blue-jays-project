import React from "react";
import { Link } from "react-router-dom";

import { fetchRoster } from "../../Actions/fetchActions";

import RosterStats from "./RosterStats";
import Player from "../Players/Player";

const { connect } = require("react-redux");
@connect((store: any) => {
  return {
    roster: store.fetch.roster.roster
  };
})
class Roster extends React.Component<any> {
  componentDidMount() {
    this.props.dispatch(fetchRoster(this.props.teamid));
  }

  render() {
    let pitchers: any = [],
      batters: any = [];
    if (this.props.roster) {
      this.props.roster.map((player: any) => {
        if (player.position.type.toLowerCase() === "pitcher") {
          pitchers.push(player);
        } else {
          batters.push(player);
        }
      });
      return (
        <section>
          <p className="tableTitle__pitchers">Pitchers</p>
          <ul className="pitcher__headings">
            <li className="year">Year</li>
            <li className="wins">W</li>
            <li className="losses">L</li>
            <li className="winPercentage">W-L%</li>
            <li className="era">ERA</li>
            <li className="gamesPitched">GP</li>
            <li className="gamesStarted">GS</li>
            <li className="numberOfPitches">NP</li>
            <li className="inningsPitched">IP</li>
            <li className="pitchesPerInning">NP/IP</li>
            <li className="strikePercentage">PC-ST</li>
            <li className="hits">H</li>
            <li className="runs">R</li>
            <li className="earnedRuns">ER</li>
            <li className="homeRuns">HR</li>
            <li className="groundOuts">GO</li>
            <li className="airOuts">AO</li>
            <li className="strikeOuts">K</li>
            <li className="baseOnBalls">BB</li>
            <li className="strikeoutWalkRatio">K/BB</li>
            <li className="wildPitches">WP</li>
            <li className="battersFaced">BF</li>
            <li className="saveOpportunities">SVO</li>
            <li className="saves">SV</li>
            <li className="holds">HLD</li>
            <li className="pickoffs">PK</li>
            <li className="whip">WHIP</li>
            <li className="strikeoutsPer9Inn">K/9</li>
            <li className="walksPer9Inn">BB/9</li>
            <li className="hitsPer9Inn">H/9</li>
            <li className="runsScoredPer9">R/9</li>
            <li className="homeRunsPer9">HR/9</li>
          </ul>
          <ul className="pitchers">
            <form>
              {pitchers.map((pitcher: any) => {
                return (
                  <li
                    className="player"
                    key={pitcher.parentTeamId + "_" + pitcher.jerseyNumber}
                  >
                    <div className="player__name">
                      <p className="jersey">{pitcher.jerseyNumber}</p>
                      {/* <Link to={"/player/" + pitcher.person.id}>
                      {pitcher.person.fullName}
                    </Link> */}
                      <label
                        htmlFor={
                          pitcher.person.firstName +
                          pitcher.person.lastName +
                          "Toggle"
                        }
                        className="name"
                      >
                        {pitcher.person.fullName}
                      </label>
                      <input
                        type="radio"
                        id={
                          pitcher.person.firstName +
                          pitcher.person.lastName +
                          "Toggle"
                        }
                        name="player__name"
                      />
                    </div>
                    <RosterStats playerType="pitcher" player={pitcher} />
                  </li>
                );
              })}
            </form>
          </ul>
          <p className="tableTitle__batters">Batters</p>
          <ul className="batter__headings">
            <li className="gamesPlayed">GP</li>
            <li className="plateAppearances">PA</li>
            <li className="atBats">AB</li>
            <li className="runs">R</li>
            <li className="hits">H</li>
            <li className="doubles">2B</li>
            <li className="triples">3B</li>
            <li className="homeRuns">HR</li>
            <li className="rbi">RBI</li>
            <li className="stolenBases">SB</li>
            <li className="caughtStealing">CS</li>
            <li className="stolenBasePercentage">SB%</li>
            <li className="baseOnBalls">BB</li>
            <li className="strikeOuts">SO</li>
            <li className="airOuts">AO</li>
            <li className="groundOuts">GO</li>
            <li className="avg">BA</li>
            <li className="babip">BABIP</li>
            <li className="obp">OBP</li>
            <li className="slg">SLG</li>
            <li className="groundIntoDoublePlay">GIDP</li>
            <li className="sacBunts">SH</li>
            <li className="sacFlies">SF</li>
          </ul>
          <ul className="batters">
            {batters.map((batter: any) => {
              return (
                <li
                  className="player"
                  key={batter.parentTeamId + "_" + batter.jerseyNumber}
                >
                  <div className="player__name">
                    <p className="jersey">{batter.jerseyNumber}</p>
                    <Link to={"/player/" + batter.person.id}>
                      {batter.person.fullName}
                    </Link>
                  </div>
                  <RosterStats playerType="batter" player={batter} />
                </li>
              );
            })}
          </ul>
        </section>
      );
    } else {
      return <div>Fetching Roster Data...</div>;
    }
  }
}

export default Roster;
