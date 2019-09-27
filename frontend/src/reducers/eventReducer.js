import {
  GET_EVENTS,
  EVENT_ERROR,
  ADD_EVENT,
  EVENTS_LOADING,
  CREATE_EVENT
} from "../actions/types";

const initialState = {
  events: [],
  loading: false
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
      case EVENTS_LOADING:
        return {
          ...state,
          loading: true
        }
      case CREATE_EVENT:
        return state;
      default:
        return state;
    // case GET_POST:
    //   return {
    //     ...state,
    //     post: payload,
    //     loading: false
    //   };
    // case ADD_EVENT:
    //   return {
    //     ...state,
    //     posts: [payload, ...state.events],
    //     loading: false
    //   };
    // // case DELETE_POST:
    // //   return {
    // //     ...state,
    // //     posts: state.posts.filter(post => post._id !== payload),
    // //     loading: false
    // //   };
    case EVENT_ERROR:
      return {
        ...state,
        
        loading: false
      };
  
  }
}
