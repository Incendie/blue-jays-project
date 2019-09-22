import React from "react";

const Player: React.FC<any> = (props: any) => {
  const player = props.player.person
    ? props.player.person
    : {
        fullName: "",
        currentAge: 0,
        birthDate: "",
        birthCity: "",
        birthStateProvince: "",
        birthCountry: "",
        height: "",
        weight: 0,
        primaryPosition: {
          abbreviation: "NA",
          name: ""
        },
        draftYear: "",
        batSide: {
          description: "NA",
          code: "NA"
        },
        pitchHand: {
          description: "NA"
        },
        id: 0
      };
  return (
    <main>
      <div className="player__photo">
        <img
          src={
            "https://securea.mlb.com/mlb/images/players/head_shot/" +
            player.id +
            ".jpg"
          }
          alt=""
        />
      </div>
      <div className="player__info">
        <p>{"Name: " + player.fullName}</p>
        <p>{"Age: " + player.currentAge}</p>
        <p>{"Birth Date: " + player.birthDate}</p>
        <p>{"Born: " + player.birthCity + ", " + player.birthStateProvince}</p>
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
          {"Drafted: " + (player.draftYear ? player.draftYear : "Not Drafted")}
        </p>
        <p>{"Bats: " + player.batSide.description}</p>
        <p>{"Throws: " + player.pitchHand.description}</p>
      </div>
    </main>
  );
};

export default Player;
