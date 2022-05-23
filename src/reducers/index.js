import { combineReducers } from '@reduxjs/toolkit';

import PartyReducer from './party-reducer';

const rootReducer = combineReducers({
  partyState: PartyReducer,
});

export default rootReducer;
