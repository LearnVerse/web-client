import { combineReducers } from '@reduxjs/toolkit';

import ServerReducer from './server-reducer';

const rootReducer = combineReducers({
  serverState: ServerReducer,
});

export default rootReducer;
