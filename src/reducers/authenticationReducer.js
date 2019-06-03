import { USER_TYPES } from "../utils/constants";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export const authentication =  function(state = initialState, action){

    switch(action.type){
        case USER_TYPES.LOGIN_REQUEST:
            return {
                logginIn:true,
                user:{
                    username:action.username
                }
            };
        case USER_TYPES.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };

        case USER_TYPES.LOGIN_FAILURE:
            return {};
            
        case USER_TYPES.LOGOUT:
                return {};    
        default:
            return state

    }




}
