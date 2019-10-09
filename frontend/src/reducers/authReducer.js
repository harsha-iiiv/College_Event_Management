import {REGISTER_SUCCESS
,REGISTER_FAIL
,USER_LOADED 
,NUSER_LOADED 
,USER_LOADING
,AUTH_ERROR 
,UAUTH_ERROR 
,LOGIN_SUCCESS  
,ULOGIN_SUCCESS  
,ULOGIN_FAIL
,LOGIN_FAIL
,LOGOUT
,USER_LOGOUT
 

} from '../actions/types'

const initialState = {
    token : localStorage.getItem('token'),
    userToken : localStorage.getItem('userToken'),
    isAuthenticated: false,
    isUserAuthenticated: false,
    isLoading: false,
    isUserLoading: false,
    user: null,
    normalUser: null
};

export default function(state = initialState, action){
    switch (action.type) {
      // case USER_LOADING:
      //     return {
      //         ...state,
      //         isLoading : true
      //     }

      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
      case NUSER_LOADED:
        return {
          ...state,

          isUserAuthenticated: true,
          isUserLoading: false,
          normalUser: action.payload
        };
      case LOGIN_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        if (action.payload.token != null)
          return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false
          };
        else return state;
      case REGISTER_SUCCESS:
      case ULOGIN_SUCCESS:
        localStorage.setItem("userToken", action.payload.userToken);
        if (action.payload.userToken != null)
          return {
            ...state,
            ...action.payload,
            isUserAuthenticated: true,
            isUserLoading: false
          };
        else return state;
      case AUTH_ERROR:
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          isLoading: false,
          user: null
        };
      case UAUTH_ERROR:
      case REGISTER_FAIL:
      case ULOGIN_FAIL:
      case USER_LOGOUT:
        localStorage.removeItem("userToken");
        return {
          ...state,
          userToken: null,
          isUserAuthenticated: false,
          isUserLoading: false,
          normalUser: null
        };
      default:
        return state
    }
}