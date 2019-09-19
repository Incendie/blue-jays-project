import React from "react";

import { fetchPlayer } from "../../Actions/fetchActions";

const { connect } = require("react-redux");
@connect((store: any) => {
  return {
    player: store.fetch.player
  };
})
class Player extends React.Component<any> {
  componentDidMount() {
    this.props.dispatch(fetchPlayer(this.props.match.params.playerid));
  }

  render() {
    if (this.props.player.people) {
      const player = this.props.player.people[0];
      return (
        <main key={player.id}>
          <div className="player__photo">
            <img
              src={
                "https://securea.mlb.com/mlb/images/players/head_shot/" +
                this.props.match.params.playerid +
                ".jpg"
              }
              alt=""
            />
          </div>
          <div className="player__info">
            <p>{"Name: " + player.fullName}</p>
            <p>{"Age: " + player.currentAge}</p>
            <p>{"Birth Date: " + player.birthDate}</p>
            <p>
              {"Born: " + player.birthCity + ", " + player.birthStateProvince}
            </p>
            <p>{"Country: " + player.birthCountry}</p>
          </div>
          <div className="player__bio">
            <p>{"Height: " + player.height + '"'}</p>
            <p>{"Weight: " + player.weight + "lbs"}</p>
          </div>
          <div className="player__baseballBio">
            <p>
              {"Position: " +
                player.primaryPosition.abbreviation +
                ", " +
                player.primaryPosition.name}
            </p>
            <p>
              {"Drafted: " +
                (player.draftYear ? player.draftYear : "Not Drafted")}
            </p>
            <p>{"Bats: " + player.batSide.description}</p>
            <p>{"Throws: " + player.pitchHand.description}</p>
          </div>
        </main>
      );
    } else {
      return <main>Fetching Player Bio ...</main>;
    }
  }
}

export default Player;
