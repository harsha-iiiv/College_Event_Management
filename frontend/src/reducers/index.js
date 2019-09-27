import { combineReducers } from "redux";

import events from './eventReducer';
import auth from './authReducer';
import error from './errorReducer';

export default combineReducers({
  events, auth, error
}); 
