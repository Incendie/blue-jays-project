import React from "react";

import { fetchRoster } from "../../Actions/fetchActions";

import RosterStats from "./RosterStats";
import Player from "../Players/Player";

const { connect } = require("react-redux");
@connect((store: any) => {
  return {
    roster: store.fetch.roster.roster
  };
})
class Roster extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { focusPlayer: {}, show: false };

    this.onChange = this.onChange.bind(this);
    this.closeOnClick = this.closeOnClick.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(fetchRoster(this.props.teamid));
  }

  onChange(e: any, player: any) {
    if (e.currentTarget.checked) {
      this.setState({ focusPlayer: player, show: true });
    }
  }

  closeOnClick(e: any) {
    let checkedButton = document.getElementById(
      this.state.focusPlayer.person.fullName.replace(/\s/g, "") + "Toggle"
    ) as HTMLInputElement;
    this.setState({ show: false });
    // checkedButton.checked = false;
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
        return true;
      });
      return (
        <section className="team__roster">
          <h2>Click on any player's name to see some more info</h2>
          <h3 className="tableTitle__pitchers">Pitchers</h3>
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
                        onChange={e => this.onChange(e, pitcher)}
                      />
                    </div>
                    <RosterStats playerType="pitcher" player={pitcher} />
                  </li>
                );
              })}
            </form>
          </ul>
          <h3 className="tableTitle__batters">Batters</h3>
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
                    <label
                      htmlFor={
                        batter.person.firstName +
                        batter.person.lastName +
                        "Toggle"
                      }
                      className="name"
                    >
                      {batter.person.fullName}
                    </label>
                    <input
                      type="radio"
                      id={
                        batter.person.firstName +
                        batter.person.lastName +
                        "Toggle"
                      }
                      name="player__name"
                      onChange={e => this.onChange(e, batter)}
                    />
                  </div>
                  <RosterStats playerType="batter" player={batter} />
                </li>
              );
            })}
          </ul>
          <Player
            player={this.state.focusPlayer}
            show={this.state.show}
            close={this.closeOnClick}
          />
        </section>
      );
    } else {
      return <div>Fetching Roster Data...</div>;
    }
  }
}

export default Roster;
