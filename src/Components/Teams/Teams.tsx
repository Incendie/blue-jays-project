import React from "react";
import { Link } from "react-router-dom";
import "./styles/styles.scss";

import { fetchTeams } from "../../Actions/fetchActions";

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
        if (
          team.name.toLowerCase().includes(toFilter.target) ||
          !toFilter.target
        ) {
          const orderStyle = {
            order: team.league.id.toString() + team.division.id.toString()
          };
          return (
            <li
              className={
                "teamList__team " +
                team.division.name.toLowerCase().replace(/ /g, "")
              }
              key={team.id}
              style={orderStyle}
            >
              <Link to={"/team/" + team.id}>
                <div className="teamList__logo">
                  <img
                    src={
                      "https://www.mlbstatic.com/team-logos/" + team.id + ".svg"
                    }
                    alt=""
                  />
                </div>
                <p className="teamList__name">{team.name}</p>
              </Link>
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
