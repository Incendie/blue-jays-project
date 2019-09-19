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
    fetch("https://statsapi.mlb.com/api/v1/teams/" + teamid + "/roster", {
      method: "GET"
    })
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
