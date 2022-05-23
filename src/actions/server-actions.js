import axios from 'axios';

const ROOT_URL = 'http://localhost:9090'; // local server
// const ROOT_URL = 'https://sa7-backend.onrender.com'; // online server

export const ActionTypes = {
  CREATE_PARTY: 'CREATE_PARTY',
};

export const createParty = (name, game, numPlayers) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${ROOT_URL}/server/createParty`, { name, game, numPlayers });
      dispatch({ type: ActionTypes.CREATE_PARTY, payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
