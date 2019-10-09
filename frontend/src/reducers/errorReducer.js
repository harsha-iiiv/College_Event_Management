import {GET_ERRORS,CLEAR_ERROR} from '../actions/types';
 
const initialState = [];

export default function(state = initialState, action){
     switch(action.type){
         case GET_ERRORS:
            return [...state, action.payload];

         case CLEAR_ERROR:
            return state.filter(alert => alert.id !== action.payload);

         default:
            return state;   
     }
}