import axios from "axios";
import { setAlert} from "./alert";
import {
  USER_LOADED,
  NUSER_LOADED,
  AUTH_ERROR,
  UAUTH_ERROR,
  LOGIN_SUCCESS,
  ULOGIN_SUCCESS,
  LOGIN_FAIL,
  RESETLINK_SUCCESS,
  RESETLINK_FAIL,
  ULOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOGOUT,
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
    const res = await axios.get("/api/admin");

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
  
  if (localStorage.userToken) {
    setNormalUserToken(localStorage.userToken);
  }
  //Headers

  
  try {
    const res = await axios.get(`/api/user`);

    dispatch({
      type: NUSER_LOADED,
      payload: res.data
    });
  } catch (err) {
    // dispatch(setAlert(err.response.data, "danger"))
    dispatch({
      type: UAUTH_ERROR
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
    const res = await axios.post("/api/user/register", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    console.log(res.data);
    
    dispatch(setAlert('Registered successfully', 'success'))
    dispatch(loadNormalUser());
  } catch (err) {
    const errors = err.response.data.errors;
   console.log(errors);
   
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
//create evnet

//Forgot password 
// @access Public
// @route api/forgotpassword



export const resetpassword = (password, token) => async dispatch =>{
 
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify({ password });

    try {
      const res = await axios.put(
        `/api/user/reset/${token}`,
        body,
        config
      );

      dispatch({
        type: RESETLINK_SUCCESS,
        payload: res
      });

      dispatch(setAlert('Reset password successfully', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: RESETLINK_FAIL,
       
      });
    }

}
export const forgotpassword = (email) => async dispatch =>{
 
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify({ email });

    try {
      const res = await axios.post(
        "/api/user/forgotPassword",
        body,
        config
      );

      dispatch({
        type: RESETLINK_SUCCESS,
        payload: res
      });

      dispatch(setAlert('Reset link sent successfully', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: RESETLINK_FAIL,
       
      });
    }

}


// Login User
export const login = (name, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    } 
  };

  const body = JSON.stringify({ name, password });

  try {
    const res = await axios.post("/api/admin", body, config);
   

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
export const userlogin = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    } 
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/user/login", body, config);
    

  dispatch({
    type: ULOGIN_SUCCESS,
    payload: res.data
  });


     dispatch(loadNormalUser());
     
  } catch (err) {
    const errors = "err.response.data.errors";

    
      dispatch(setAlert(errors, "danger"));
   

    dispatch({
      type: ULOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
   dispatch({ type: LOGOUT });
};
export const userlogout = () => dispatch => {
   dispatch({ type: USER_LOGOUT });
};
