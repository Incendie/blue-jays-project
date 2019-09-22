import React from "react";
import "./details.scss";

import { fetchPlayerStats } from "../../Actions/fetchActions";

import Splits from "./Splits";
import Player from "./Player";

const { connect } = require("react-redux");
@connect((store: any) => {
  return {
    player: store.fetch.player
  };
})
class PlayerStats extends React.Component<any, any> {
  componentDidMount() {
    this.props.dispatch(fetchPlayerStats(this.props.match.params.playerid));
  }

  render() {
    let stats = {
      hitting: [] as string[],
      pitching: [] as string[],
      fielding: [] as string[]
    };

    if (this.props.player.people) {
      const player = this.props.player.people[0];
      const details = { person: player };
      player.stats.map((stat: any) => {
        switch (stat.group.displayName) {
          case "hitting":
            stats.hitting.push(stat);
            break;
          case "pitching":
            stats.pitching.push(stat);
            break;
          case "fielding":
            stats.fielding.push(stat);
            break;
          default:
            break;
        }
        return true;
      });
      return (
        <div className="detail">
          <Player player={details} />
          <ul>
            {stats.hitting.length ? (
              <li key={player.id + "hitting"}>
                <h3>Hitting</h3>
                <ul className="batter__headings">
                  <li className="year">Year</li>
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
                  <li className="avg">AVG</li>
                  <li className="babip">BABIP</li>
                  <li className="obp">OBP</li>
                  <li className="slg">SLG</li>
                  <li className="groundIntoDoublePlay">GIDP</li>
                  <li className="sacBunts">SH</li>
                  <li className="sacFlies">SF</li>
                </ul>
                <Splits statType="hitting" stats={stats.hitting} />
              </li>
            ) : null}
            {stats.pitching.length ? (
              <li key={player.id + "pitching"}>
                <h3>Pitching</h3>
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
                <Splits statType="pitching" stats={stats.pitching} />
              </li>
            ) : null}
            {stats.fielding.length ? (
              <li key={player.id + "fielding"}>
                <h3>Fielding</h3>
                <ul className="fielder__headings">
                  <li className="year">Year</li>
                  <li className="games">G</li>
                  <li className="gamesStarted">GS</li>
                  <li className="innings">INN</li>
                  <li className="chances">OPP</li>
                  <li className="putOuts">PO</li>
                  <li className="assists">A</li>
                  <li className="errors">E</li>
                  <li className="doublePlays">DP</li>
                  <li className="fielding">FPCT</li>
                  <li className="rangeFactorPerGame">RF</li>
                </ul>
                <Splits statType="fielding" stats={stats.fielding} />
              </li>
            ) : null}
          </ul>
        </div>
      );
    } else {
      return <div>Fetching Player's Statline ...</div>;
    }
  }
}

export default PlayerStats;
