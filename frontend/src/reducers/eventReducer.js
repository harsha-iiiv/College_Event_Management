import {
  GET_EVENTS,
  GET_EVENT,
  EVENT_ERROR,
  EVENT_REG,
  ADD_EVENT,
  EVENTS_LOADING,
  CREATE_EVENT
} from "../actions/types";

const initialState = {
  events: [],
  loading: false,
  event : null,
  reg_events: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
         events: payload,
         loading: false
        // loading: false
      };
      case GET_EVENT:
        return {
          ...state,
          event: payload
        }
      case EVENTS_LOADING:
        return {
          ...state,
          loading: true
        }
      case CREATE_EVENT:
        return state;
      default:
        return state;
    
    // // case DELETE_EVENT:
    // //   return {
    // //     ...state,
    // //     posts: state.events.filter(post => events._id !== payload),
    // //     loading: false
    // //   };
    case EVENT_REG:
      return state
    case EVENT_ERROR:
      return {
        ...state,
        
        loading: false
      };
  
  }
}
