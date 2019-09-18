interface stateTypes {
  gender: string[];
  colors: string[];
  style: string[];
  patterns: string[];
  items: string[];
  filtersSelected: string[];
  firstLoad: boolean;
}
const initialState: stateTypes = {
  gender: [],
  colors: [],
  style: [],
  patterns: [],
  items: [],
  filtersSelected: [],
  firstLoad: true
};
const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GENDER_FILTER_SELECTED":
      if (!state.gender.includes(action.payload.filterName)) {
        state.gender.push(action.payload.filterName);
      }
      return { ...state, firstLoad: false };
    case "GENDER_FILTER_DESELECTED":
      let gender = state.gender.filter(e => e !== action.payload.filterName);
      return { ...state, gender, firstLoad: false };
    case "COLOR_FILTER_SELECTED":
      if (!state.colors.includes(action.payload.filterName)) {
        state.colors.push(action.payload.filterName);
      }
      return { ...state, firstLoad: false };
    case "COLOR_FILTER_DESELECTED":
      let colors = state.colors.filter(e => e !== action.payload.filterName);
      return { ...state, colors, firstLoad: false };
    case "STYLE_FILTER_SELECTED":
      if (!state.style.includes(action.payload.filterName)) {
        state.style.push(action.payload.filterName);
      }
      return { ...state, firstLoad: false };
    case "STYLE_FILTER_DESELECTED":
      let style = state.style.filter(e => e !== action.payload.filterName);
      return { ...state, style, firstLoad: false };
    case "PATTERN_FILTER_SELECTED":
      if (!state.patterns.includes(action.payload.filterName)) {
        state.patterns.push(action.payload.filterName);
      }
      return { ...state, firstLoad: false };
    case "PATTERN_FILTER_DESELECTED":
      let patterns = state.patterns.filter(
        e => e !== action.payload.filterName
      );
      return { ...state, patterns, firstLoad: false };
    case "ITEM_FILTER_SELECTED":
      if (!state.items.includes(action.payload.filterName)) {
        state.items.push(action.payload.filterName);
      }
      return { ...state, firstLoad: false };
    case "ITEM_FILTER_DESELECTED":
      let items = state.items.filter(e => e !== action.payload.filterName);
      return { ...state, items, firstLoad: false };
    default:
      return state;
  }
};

export default filterReducer;
