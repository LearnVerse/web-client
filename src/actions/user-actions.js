import axios from 'axios';

const ROOT_URL = 'http://localhost:9090'; // local server
// const ROOT_URL = 'https://sa7-backend.onrender.com'; // online server

export const ActionTypes = {
  GET_INSTRUCTOR_STATUS: 'GET_INSTRUCTOR_STATUS',
};

export const getInstructorStatus = (userId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${ROOT_URL}/user/${userId}`);
      console.log(response.data);
      dispatch({ type: ActionTypes.GET_INSTRUCTOR_STATUS, payload: response.data.data });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
