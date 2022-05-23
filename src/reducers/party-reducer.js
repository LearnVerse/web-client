/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions';

const initialState = {
  partyMembers: [],
  partyInfo: {},
};

const PartyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.GET_PARTY_MEMBERS:
      return { ...state, partyMembers: action.payload };
    case ActionTypes.GET_PARTY_INFO:
      return { ...state, partyInfo: action.payload };
    default:
      return state;
  }
};

export default PartyReducer;
