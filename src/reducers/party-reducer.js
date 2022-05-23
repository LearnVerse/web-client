/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions';

const initialState = {
  partyMembers: [],
};

const PartyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_PARTY_MEMBERS:
      return { ...state, partyMembers: action.payload };
    default:
      return state;
  }
};

export default PartyReducer;
