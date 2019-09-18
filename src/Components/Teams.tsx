import React from 'react';
import { fetchTeams } from '../Actions/fetchActions';

const { connect } = require('react-redux');
@connect((store: any) => {
  return {
    fetch: store.fetch.payload
  };
})
export default class Inspirations extends React.Component<any> {
  componentDidMount() {
    this.props.dispatch(fetchTeams());
  }

  public render() {
    let teamNames;
    if (this.props.fetch.teams) {
      teamNames = this.props.fetch.teams.map((team: any) => {
        return <li key={team.id}>{team.name}</li>;
      });
    }

    return (
      <div id="teams" className="wrapper">
        <ul>{teamNames ? teamNames : 'Henlo'}</ul>
      </div>
    );
  }
}
