import {
  ActionTypes as partyActionTypes,
  createParty,
  getAllPartyMembers,
  joinPartyAsStudent,
  getPartyGame,
} from './party-actions';

const ActionTypes = {
  ...partyActionTypes,
};

export {
  ActionTypes,
  createParty,
  getAllPartyMembers,
  joinPartyAsStudent,
  getPartyGame,
};
