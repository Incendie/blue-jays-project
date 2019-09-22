export function fetchTeams() {
  return function(dispatch: any) {
    fetch("https://statsapi.mlb.com/api/v1/teams?sportId=1", {
      method: "GET"
    })
      .then(response => {
        dispatch({ type: "FETCH_TEAMS", payload: response.json() });
      })
      .catch(err => {
        dispatch({ type: "FETCH_TEAMS", payload: err });
      });
  };
}

export function fetchTeam(teamid: number) {
  return function(dispatch: any) {
    fetch("https://statsapi.mlb.com/api/v1/teams/" + teamid, {
      method: "GET"
    })
      .then(response => {
        dispatch({ type: "FETCH_SELECTED_TEAM", payload: response.json() });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SELECTED_TEAM", payload: err });
      });
  };
}

export function fetchRoster(teamid: number) {
  return function(dispatch: any) {
    fetch(
      "https://statsapi.mlb.com/api/v1/teams/" +
        teamid +
        "/roster/Active?hydrate=person(stats(type=season))",
      {
        method: "GET"
      }
    )
      .then(response => {
        dispatch({
          type: "FETCH_SELECTED_TEAM_ROSTER",
          payload: response.json()
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SELECTED_TEAM_ROSTER", payload: err });
      });
  };
}

export function fetchPlayer(playerid: number) {
  return function(dispatch: any) {
    fetch("https://statsapi.mlb.com/api/v1/people/" + playerid, {
      method: "GET"
    })
      .then(response => {
        dispatch({
          type: "FETCH_PLAYER",
          payload: response.json()
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PLAYER", payload: err });
      });
  };
}

export function fetchPlayerStats(playerid: number) {
  return function(dispatch: any) {
    fetch(
      "https://statsapi.mlb.com/api/v1/people/" +
        playerid +
        "?hydrate=stats(group=[hitting,pitching,fielding],type=[yearByYear])",
      {
        method: "GET"
      }
    )
      .then(response => {
        dispatch({
          type: "FETCH_PLAYER_STATS",
          payload: response.json()
        });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PLAYER_STATS", payload: err });
      });
  };
}
