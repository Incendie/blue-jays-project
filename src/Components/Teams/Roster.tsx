import React from "react";
import { Link } from "react-router-dom";

import { fetchRoster } from "../../Actions/fetchActions";

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
    if (this.props.roster) {
      const teamRoster = this.props.roster.map((player: any) => {
        return (
          <li key={player.parentTeamId + "_" + player.jerseyNumber}>
            <Link to={"/player/" + player.person.id}>
              {player.person.fullName}
            </Link>
          </li>
        );
      });
      return <div>{teamRoster ? teamRoster : "map"}</div>;
    } else {
      return <div>Fetching Roster Data...</div>;
    }
  }
}

export default Roster;
