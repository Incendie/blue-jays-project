const fetchReducer = (
  state = {
    fetching: false,
    fetched: false,
    payload: []
  },
  action: any
) => {
  switch (action.type) {
    case "FETCH_TEAMS_FULFILLED":
      return { ...state, fetched: true, payload: action.payload };
    case "FETCH_FILTERED_EXAMPLES_FULFILLED":
      return { ...state, fetched: true, payload: action.payload };
    default:
      return state;
  }
};

export default fetchReducer;
