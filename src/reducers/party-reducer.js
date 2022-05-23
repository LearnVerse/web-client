/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions';

const initialState = {
  partyId: '',
  userId: '',
  partyMembers: [],
};

const PartyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.CREATE_PARTY:
      return { ...state, partyId: action.payload.partyId, userId: action.payload.userId };
    case ActionTypes.GET_PARTY_MEMBERS:
      return { ...state, partyMembers: action.payload };
    default:
      return state;
  }
};

export default PartyReducer;
