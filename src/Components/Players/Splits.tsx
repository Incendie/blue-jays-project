import React from "react";

const Splits: React.FC<any> = (props: any) => {
  const stats = props.stats[0];
  switch (props.statType) {
    case "hitting":
      return stats.splits.map((split: any) => {
        return (
          <ul
            key={split.season + "hitting"}
            className={split.season + "stats player__stats--year"}
          >
            <li className="year">{split.season}</li>
            <li className="gamesPlayed">{split.stat.gamesPlayed}</li>
            <li className="plateAppearances">{split.stat.plateAppearances}</li>
            <li className="atBats">{split.stat.atBats}</li>
            <li className="runs">{split.stat.runs}</li>
            <li className="hits">{split.stat.hits}</li>
            <li className="doubles">{split.stat.doubles}</li>
            <li className="triples">{split.stat.triples}</li>
            <li className="homeRuns">{split.stat.homeRuns}</li>
            <li className="rbi">{split.stat.rbi}</li>
            <li className="stolenBases">{split.stat.stolenBases}</li>
            <li className="caughtStealing">{split.stat.caughtStealing}</li>
            <li className="stolenBasePercentage">{split.stat.gamesPlayed}</li>
            <li className="baseOnBalls">{split.stat.baseOnBalls}</li>
            <li className="strikeOuts">{split.stat.strikeOuts}</li>
            <li className="airOuts">{split.stat.airOuts}</li>
            <li className="groundOuts">{split.stat.groundOuts}</li>
            <li className="avg">{split.stat.avg}</li>
            <li className="babip">{split.stat.babip}</li>
            <li className="obp">{split.stat.obp}</li>
            <li className="slg">{split.stat.slg}</li>
            <li className="groundIntoDoublePlay">
              {split.stat.groundIntoDoublePlay}
            </li>
            <li className="sacBunts">{split.stat.sacBunts}</li>
            <li className="sacFlies">{split.stat.sacFlies}</li>
          </ul>
        );
      });
    case "pitching":
      return stats.splits.map((split: any) => {
        return (
          <ul
            key={split.season + "pitching"}
            className={split.season + "stats player__stats--year"}
          >
            <li className="year">{split.season}</li>
            <li className="wins">{split.stat.wins}</li>
            <li className="losses">{split.stat.losses}</li>
            <li className="winPercentage">{split.stat.winPercentage}</li>
            <li className="era">{split.stat.era}</li>
            <li className="gamesPitched">{split.stat.gamesPitched}</li>
            <li className="gamesStarted">{split.stat.gamesStarted}</li>
            <li className="numberOfPitches">{split.stat.numberOfPitches}</li>
            <li className="inningsPitched">{split.stat.inningsPitched}</li>
            <li className="pitchesPerInning">{split.stat.pitchesPerInning}</li>
            <li className="strikePercentage">{split.stat.strikePercentage}</li>
            <li className="hits">{split.stat.hits}</li>
            <li className="runs">{split.stat.runs}</li>
            <li className="earnedRuns">{split.stat.earnedRuns}</li>
            <li className="homeRuns">{split.stat.homeRuns}</li>
            <li className="groundOuts">{split.stat.groundOuts}</li>
            <li className="airOuts">{split.stat.airOuts}</li>
            <li className="strikeOuts">{split.stat.strikeOuts}</li>
            <li className="baseOnBalls">{split.stat.baseOnBalls}</li>
            <li className="strikeoutWalkRatio">
              {split.stat.strikeoutWalkRatio}
            </li>
            <li className="wildPitches">{split.stat.wildPitches}</li>
            <li className="battersFaced">{split.stat.battersFaced}</li>
            <li className="saveOpportunities">
              {split.stat.saveOpportunities}
            </li>
            <li className="saves">{split.stat.saves}</li>
            <li className="holds">{split.stat.holds}</li>
            <li className="pickoffs">{split.stat.pickoffs}</li>
            <li className="whip">{split.stat.whip}</li>
            <li className="strikeoutsPer9Inn">
              {split.stat.strikeoutsPer9Inn}
            </li>
            <li className="walksPer9Inn">{split.stat.walksPer9Inn}</li>
            <li className="hitsPer9Inn">{split.stat.hitsPer9Inn}</li>
            <li className="runsScoredPer9">{split.stat.runsScoredPer9}</li>
            <li className="homeRunsPer9">{split.stat.homeRunsPer9}</li>
          </ul>
        );
      });
    case "fielding":
      return stats.splits.map((split: any) => {
        return (
          <ul
            key={split.season + "fielding"}
            className={split.season + "stats player__stats--year"}
          >
            <li className="year">{split.season}</li>
            <li className="asssists">{split.stat.asssists}</li>
            <li className="chances">{split.stat.chances}</li>
            <li className="doublePlays">{split.stat.doublePlays}</li>
            <li className="errors">{split.stat.errors}</li>
            <li className="fielding">{split.stat.fielding}</li>
            <li className="games">{split.stat.games}</li>
            <li className="gamesStarted">{split.stat.gamesStarted}</li>
            <li className="innings">{split.stat.innings}</li>
            <li className="putOuts">{split.stat.putOuts}</li>
            <li className="rangeFactorPerGame">
              {split.stat.rangeFactorPerGame}
            </li>
          </ul>
        );
      });
    default:
      return <div>Fetching Statline ...</div>;
  }
};

export default Splits;
