import React from 'react';
import { Link } from 'react-router-dom';

import { fetchRoster } from '../../Actions/fetchActions';

import RosterStats from './RosterStats';

const { connect } = require('react-redux');
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
    let pitchers: any = [],
      batters: any = [];
    if (this.props.roster) {
      this.props.roster.map((player: any) => {
        if (player.position.type.toLowerCase() === 'pitcher') {
          pitchers.push(player);
        } else {
          batters.push(player);
        }
      });
      return (
        <section>
          <p className="tableTitle__pitchers">Pitchers</p>
          <ul className="pitchers">
            {pitchers.map((pitcher: any) => {
              return (
                <li key={pitcher.parentTeamId + '_' + pitcher.jerseyNumber}>
                  <p className="jersey">{pitcher.jerseyNumber}</p>
                  <Link to={'/player/' + pitcher.person.id}>
                    {pitcher.person.fullName}
                  </Link>
                  <RosterStats playerType="pitcher" player={pitcher} />
                </li>
              );
            })}
          </ul>
          <p className="tableTitle__batters">Batters</p>
          <ul className="batters">
            {batters.map((batter: any) => {
              return (
                <li key={batter.parentTeamId + '_' + batter.jerseyNumber}>
                  <p className="jersey">{batter.jerseyNumber}</p>
                  <Link to={'/player/' + batter.person.id}>
                    {batter.person.fullName}
                  </Link>
                  <RosterStats playerType="batter" player={batter} />
                </li>
              );
            })}
          </ul>
        </section>
      );
    } else {
      return <div>Fetching Roster Data...</div>;
    }
  }
}

export default Roster;
