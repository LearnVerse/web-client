import axios from 'axios';

const ROOT_URL = 'http://localhost:9090'; // local server
// const ROOT_URL = 'https://sa7-backend.onrender.com'; // online server

export const ActionTypes = {
  CREATE_PARTY: 'CREATE_PARTY',
  GET_PARTY_MEMBERS: 'GET_PARTY_MEMBERS',
};

export const createParty = (name, game, numPlayers, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${ROOT_URL}/party/create`, { name, game, numPlayers });
      localStorage.setItem('partyId', response.data.data.partyId);
      localStorage.setItem('userId', response.data.data.userId);
      navigate(`/room/${response.data.data.partyId}`);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllPartyMembers = (partyId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/party/${partyId}/getAllMembers`);
      dispatch({ type: ActionTypes.GET_PARTY_MEMBERS, payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
