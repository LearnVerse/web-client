/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions';

const initialState = {
  partyMembers: [],
  gameStarted: false,
};

const PartyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_PARTY_MEMBERS:
      return { ...state, partyMembers: action.payload };
    case ActionTypes.START_GAME:
      return { ...state, gameStarted: action.payload };
    default:
      return state;
  }
};

export default PartyReducer;
