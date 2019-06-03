
import { USER_TYPES } from "../utils";
import { userService } from "../services";
import { history } from "../utils";

export const userActions = {
    login,
    logout
}

function login(username, password) {
    return dispatch => {
        const action = {
            type:USER_TYPES.LOGIN_REQUEST,
            username
        }
       
        dispatch(action);

        userService.login(username, password)
            .then(
                user => { 
                    
                    console.log("user obtenido");
                    console.log(user);
                    
                    const action = {
                        type:USER_TYPES.LOGIN_SUCCESS,
                        user
                    }
                    //dispatch(success(user));
                    dispatch(action);
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                   // dispatch(alertActions.error(error));
                }
            );
    };
/*
    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  */
    function failure(error) { return { type: USER_TYPES.LOGIN_FAILURE, error } }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    return { type: USER_TYPES.LOGOUT };
}