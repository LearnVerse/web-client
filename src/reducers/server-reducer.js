/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions';

const initialState = {
  partyId: '',
};

const ServerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.CREATE_PARTY:
      return { ...state, partyId: action.payload };
    default:
      return state;
  }
};

export default ServerReducer;
