import {
  ActionTypes as partyActionTypes,
  createParty,
  getAllPartyMembers,
  joinPartyAsStudent,
  getPartyGame,
} from './party-actions';

import {
  ActionTypes as userActionTypes,
  getInstructorStatus,
} from './user-actions';

const ActionTypes = {
  ...partyActionTypes,
  ...userActionTypes,
};

export {
  ActionTypes,
  createParty,
  getAllPartyMembers,
  joinPartyAsStudent,
  getPartyGame,
  getInstructorStatus,
};
