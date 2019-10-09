import uuid from 'uuid';
import { GET_ERRORS, CLEAR_ERROR } from "./types";

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: GET_ERRORS,
    payload: { msg, alertType, id }
  });

  setTimeout(() => dispatch({ type: CLEAR_ERROR, payload: id }), timeout);
};
