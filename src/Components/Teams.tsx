import React from 'react';
import { fetchTeams } from '../Actions/fetchActions';

const { connect } = require('react-redux');
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
        if (toFilter.target) {
          if (team.name.toLowerCase().includes(toFilter.target)) {
            return <li key={team.id}>{team.name}</li>;
          } else {
            return false;
          }
        } else {
          return <li key={team.id}>{team.name}</li>;
        }
      });
    }

    return (
      <div id="teams" className="wrapper">
        <ul>{teamNames ? teamNames : 'Loading Teams'}</ul>
      </div>
    );
  }
}
