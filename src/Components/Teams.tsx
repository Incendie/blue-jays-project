import React from "react";
import { fetchTeams } from "../Actions/fetchActions";

const { connect } = require("react-redux");
@connect((store: any) => {
  return {
    teams: store.teams
  };
})
export default class Inspirations extends React.Component<any> {
  componentDidMount() {
    fetch("https://statsapi.mlb.com/api/v1/teams?sportId=1").then(function(
      response
    ) {
      console.log(response);
    });
    this.props.dispatch(fetchTeams());
  }

  public render() {
    return (
      <div id="teams" className="wrapper">
        Henlo
      </div>
    );
  }
}
