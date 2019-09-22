import React from "react";

import { fetchPlayerStats } from "../../Actions/fetchActions";
import Splits from "./Splits";

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
        <div className="player__detail">
          <div className="player__photo">
            <img
              src={
                "https://securea.mlb.com/mlb/images/players/head_shot/" +
                player.id +
                ".jpg"
              }
              alt=""
            />
          </div>
          <ul>
            <li key={player.id + "hitting"}>
              <Splits statType="hitting" stats={stats.hitting} />
            </li>
            <li key={player.id + "pitching"}>
              <Splits statType="pitching" stats={stats.pitching} />
            </li>
            <li key={player.id + "fielding"}>
              <Splits statType="fielding" stats={stats.fielding} />
            </li>
          </ul>
        </div>
      );
    } else {
      return <div>Fetching Player's Statline ...</div>;
    }
  }
}

export default PlayerStats;
