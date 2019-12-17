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
axios.defaults.baseURL = "http://localhost:8000";
//GET EVENTS
export const getEvents = () => async dispatch => {
  try {
    dispatch(eventsLoading()); 
    const res = await axios.get("/api/events");

    dispatch({
      type: GET_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EVENT_ERROR,
      payload: "error"
    });
  }
};
export const getEventById = eventId => async dispatch => {
  try {
    const res = await axios.get(`/api/events/${eventId}`);
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

export const createEvent = (eic, name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  const body = JSON.stringify({eic, name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice });
  console.log(body);
  
  try {
    const res = await axios.post("/api/events", body, config);
     console.log(body);

    dispatch(setAlert("Event added successfully", "success"));
  dispatch({
    type: CREATE_EVENT,
    payload: res.data
  });
 

  }
   catch (err) {
    const errors = err.response.data.errors;

   
if (errors) {
  errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
}
    dispatch({
      type: EVENT_ERROR
    });
  }
};
export const editEvent = (id, eic, name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  const body = JSON.stringify({eic, name,date,time,venue,Description,type,image,logo,organiserName,role,email,ticketrequired,ticketname,isPaid,ticketprice });
  console.log('hhh');
  
  try {
    const res = await axios.put(`/api/events/${id}`, body, config);

    dispatch(setAlert("Event updated successfully", "success"));
   
 

  }
   catch (err) {
    const errors = err.response.data.errors;

   
if (errors) {
  errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
}
    dispatch({
      type: EVENT_ERROR
    });
  }
};

// Event registrion

export const eventreg = (name, email, phone, event)=> async (dispatch) =>{
  const config = {
    headers: {
      "Content-Type" : "application/json" 
    }
  }

  const body = JSON.stringify({name, email, phone, event });
  console.log(body);
  
  try {
        const res = await axios.post("/api/user/event_reg", body, config);

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
export const announceEvent = (id, msg) => async dispatch => {
         const config = {
           headers: {
             "Content-Type": "application/json"
           }
         };

         const body = JSON.stringify({ id, msg : "Please visit website for new changes" });
         console.log(body);

         try {
           const res = await axios.post("/api/events/announce", body, config);

           dispatch(setAlert("Event announced successfully", "success"));
           dispatch({
             type: EVENT_REG,
             payload: res.data
           });
         } catch (err) {
           const errors = "Error";

           
             dispatch(setAlert(errors, "danger"))
           
           dispatch({
             type: EVENT_ERROR,
             payload: { msg: "sorry" }
           });
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

//delete events


export const deleteEvent = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  
  console.log('hhh');
  
  try {
    const res = await axios.delete(`/api/events/${id}`);

    dispatch(setAlert("Event Deleted successfully", "success"));
   
 

  }
   catch (err) {
    const errors = err.response.data.errors;

   
if (errors) {
  errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
}
    dispatch({
      type: EVENT_ERROR
    });
  }
};