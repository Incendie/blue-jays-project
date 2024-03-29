const initialState = {
    fetching: false,
    fetched: false,
    payload: [],
    roster: [],
    player: []
  },
  fetchReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case "FETCH_TEAMS_FULFILLED":
        return {
          ...state,
          fetched: true,
          fetching: false,
          payload: action.payload
        };
      case "FETCH_TEAMS_PENDING":
        return { ...state, fetched: false, fetching: true };
      case "FETCH_SELECTED_TEAM_FULFILLED":
        return {
          ...state,
          fetched: true,
          fetching: false,
          payload: action.payload
        };
      case "FETCH_SELECTED_TEAM_PENDING":
        return { ...state, fetched: false, fetching: true };
      case "FETCH_SELECTED_TEAM_ROSTER_FULFILLED":
        return {
          ...state,
          fetched: true,
          fetching: false,
          roster: action.payload
        };
      case "FETCH_SELECTED_TEAM_ROSTER_PENDING":
        return { ...state, fetched: false, fetching: true };
      case "FETCH_PLAYER_FULFILLED":
        return {
          ...state,
          fetched: true,
          fetching: false,
          player: action.payload
        };
      case "FETCH_PLAYER_PENDING":
        return { ...state, fetched: false, fetching: true };
      case "FETCH_PLAYER_STATS_FULFILLED":
        return {
          ...state,
          fetched: true,
          fetching: false,
          player: action.payload
        };
      case "FETCH_PLAYER_STATS_PENDING":
        return { ...state, fetched: false, fetching: true };
      default:
        return state;
    }
  };

export default fetchReducer;
