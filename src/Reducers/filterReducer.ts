interface stateTypes {
  filtered: string;
}
const initialState: stateTypes = {
  filtered: ''
};
const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FILTER_SUBMITTED':
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
};

export default filterReducer;
