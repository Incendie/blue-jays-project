import React from "react";
import { Link } from "react-router-dom";

import { fetchTeams } from "../../Actions/fetchActions";
import "./styles.scss";

const { connect } = require("react-redux");
@connect((store: any) => {
  return {
    fetch: store.fetch.payload,
    filtered: store.filtered.filtered
  };
})
export default class Teams extends React.Component<any> {
  componentDidMount() {
    this.props.dispatch(fetchTeams());
  }

  public render() {
    let teamNames,
      toFilter = this.props.filtered;
    if (this.props.fetch.teams) {
      teamNames = this.props.fetch.teams.map((team: any) => {
        console.log(toFilter.target);
        if (
          team.name.toLowerCase().includes(toFilter.target) ||
          !toFilter.target
        ) {
          return (
            <li className="teamList" key={team.id}>
              <div className="teamList__logo">
                <Link to={"/team/" + team.id}>
                  <img
                    src={
                      "https://www.mlbstatic.com/team-logos/" + team.id + ".svg"
                    }
                    alt=""
                  />
                </Link>
              </div>
              <p className="teamList__name">{team.name}</p>
            </li>
          );
        } else {
          return false;
        }
      });
    }

    return (
      <div id="teams" className="wrapper">
        <ul>{teamNames ? teamNames : "Loading Teams"}</ul>
      </div>
    );
  }
}
