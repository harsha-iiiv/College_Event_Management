import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_EVENTS,
  EVENT_ERROR,
  CREATE_EVENT,
  GET_EVENT,
  EVENTS_LOADING,
  EVENT_REG
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
export const getEventById = eventId => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8000/api/events/${eventId}`);
   console.log(res);
   
    dispatch({
      type: GET_EVENT,
      payload: res.data
    });
  } catch (err) {
    console.log("errroro")
    dispatch({
      type: EVENT_ERROR,
      payload: "sorry"
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

    dispatch(setAlert("Event added successfully", "success"));
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

// Event registrion

export const eventreg = (name, email, phone, event, user)=> async (dispatch) =>{
  const config = {
    headers: {
      "Content-Type" : "application/json" 
    }
  }

  const body = JSON.stringify({name, email, phone, event , user });
  console.log(body);
  
  try {
        const res = await axios.post("http://localhost:8000/api/user/event_reg", body, config);

    dispatch(setAlert("Event registration successfully", "success"));
  dispatch({
    type: EVENT_REG,
    payload: res.data
  });
 

  }
   catch (err) {
     const errors = err.response.data.errors;

     if (errors) {
       errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
     }
    dispatch({
      type: EVENT_ERROR,
      payload: { msg: "sorry" }
    });
  }
}


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