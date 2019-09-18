import { combineReducers } from 'redux';

import fetchReducer from './fetchReducer';
import filterReducer from './filterReducer';

const reducer = combineReducers({
  fetch: fetchReducer,
  filtered: filterReducer
});

export type AppState = ReturnType<typeof reducer>;
export default reducer;
