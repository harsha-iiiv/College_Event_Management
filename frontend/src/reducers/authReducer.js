import {REGISTER_SUCCESS
,REGISTER_FAIL
,USER_LOADED 
,USER_LOADING
,AUTH_ERROR 
,LOGIN_SUCCESS  
,LOGIN_FAIL
,LOGOUT
} from '../actions/types'

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
};

export default function(state = initialState, action){
    switch(action.type){

        // case USER_LOADING:
        //     return {
        //         ...state,
        //         isLoading : true
        //     }
        case USER_LOADED: 
           return {
               ...state,
               isAuthenticated:true,
               isLoading: false,
               user: action.payload
           }
        
         case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            if(action.payload.token!=null)
             return {
               ...state,
                ...action.payload,
               isAuthenticated: true,
               isLoading: false,
             };  
             else
             return state
        //  case AUTH_ERROR:
         case LOGIN_FAIL:
         case LOGOUT:
             localStorage.removeItem('token');
             return {
               ...state,
               token:null,
               isAuthenticated : false,
               isLoading: false ,
               user: null 
             };
          default:
              return state   

    }
}