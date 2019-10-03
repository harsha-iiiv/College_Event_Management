import axios from "axios";
import { setAlert, clearError } from "./alert";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CREATE_EVENT,
} from "./types";
import setUserToken from "../utils/setAdminToken";
import setNormalUserToken from "../utils/setUserToken";

// check token and Load User 
export const loadUser = () => async (dispatch) => {
  
  if (localStorage.token) {
    setUserToken(localStorage.token);
  }
  //Headers

  
  try {
    const res = await axios.get("http://localhost:8000/api/admin");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    // dispatch(setAlert(err.response.data, "danger"))
    dispatch({
      type: AUTH_ERROR
    });
  }
};
export const loadNormalUser = () => async (dispatch) => {
  
  if (localStorage.token) {
    setNormalUserToken(localStorage.token);
  }
  //Headers

  
  try {
    const res = await axios.get("http://localhost:8000/api/user");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    // dispatch(setAlert(err.response.data, "danger"))
    dispatch({
      type: AUTH_ERROR
    });
  }
};


// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }; 

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("http://localhost:8000/api/user/register", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data;

    if (errors) {
       dispatch(setAlert(errors, "danger"));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
//create evnet



// Login User
export const login = (name, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    } 
  };

  const body = JSON.stringify({ name, password });

  try {
    const res = await axios.post("http://localhost:8000/api/admin", body, config);
   

  dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data
  });


     dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
   dispatch({ type: LOGOUT });
};
