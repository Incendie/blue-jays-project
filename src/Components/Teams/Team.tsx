import React from "react";

import { fetchTeam } from "../../Actions/fetchActions";

import Roster from "./Roster";

const { connect } = require("react-redux");
@connect((store: any) => {
  return {
    team: store.fetch.payload.teams
  };
})
class Team extends React.Component<any> {
  componentDidMount() {
    this.props.dispatch(fetchTeam(this.props.match.params.teamid));
  }

  render() {
    if (this.props.team) {
      const teamData = this.props.team[0];
      return (
        <section>
          <div className="teamInfo">
            <p className="teamName">{teamData.name}</p>
            <div className="teamLogo">
              <img
                src={
                  "https://www.mlbstatic.com/team-logos/" +
                  this.props.match.params.teamid +
                  ".svg"
                }
                alt=""
              />
            </div>
          </div>
          <Roster />
        </section>
      );
    } else {
      return <div>Fetching Team Info...</div>;
    }
  }
}

export default Team;
