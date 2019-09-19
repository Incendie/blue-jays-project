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
          <div className="team__info">
            <p className="team__name">{teamData.name}</p>
            <div className="team__logo">
              <img
                src={
                  "https://www.mlbstatic.com/team-logos/" +
                  this.props.match.params.teamid +
                  ".svg"
                }
                alt=""
              />
            </div>
            <div className="team__park">
              {console.log(teamData)}
              <img
                src={
                  "https://prod-gameday.mlbstatic.com/responsive-gameday-assets/1.2.0/images/fields/" +
                  teamData.venue.id +
                  ".svg"
                }
                alt=""
              />
            </div>
          </div>
          <Roster teamid={this.props.match.params.teamid} />
        </section>
      );
    } else {
      return <div>Fetching Team Info...</div>;
    }
  }
}

export default Team;
