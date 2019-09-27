import axios from "axios";
import { setAlert, clearError } from "./alert";

import {
  GET_EVENTS,
  EVENT_ERROR,
  CREATE_EVENT,
  GET_EVENT,
  EVENTS_LOADING
} from "./types";

//GET EVENTS
export const getEvents = () => async dispatch => {
  try {
    dispatch(eventsLoading());
    const res = await axios.get("http://localhost:8000/api/events");

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const eventsLoading = () =>{
  return {
    type: EVENTS_LOADING
  }
}

export const createEvent = (name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  const body = JSON.stringify({ name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice });
  console.log("hello");
  
  try {
    const res = await axios.post("http://localhost:8000/api/events", body, config);
     console.log("TRing");

    
  dispatch({
    type: CREATE_EVENT,
    payload: res.data
  });
 

  }
   catch (err) {
    const errors = "Something went wrong";

    // if (errors) {
    //  dispatch(setAlert(errors, "danger"));
    // }

    // dispatch({
    //   type: EVENT_ERROR
    // });
  }
};


//ADD EVENTS

// export const addEvent = formData => async dispatch => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   try {
//     const res = await axios.post("/api/events", formData, config);

//     dispatch({
//       type: ADD_EVENT,
//       payload: res.data
//     });

// // dispatch(setAler    t("Post Created", "success"));
//   } catch (err) {
//     dispatch({
//       type: EVENT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };