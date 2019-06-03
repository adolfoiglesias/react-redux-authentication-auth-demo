import axios from 'axios';

import { LOGIN_URL, LOGOUT_URL, HOST } from "../utils";

export const userService = {
    login
}


function login(username, password){
    
   // return  loginWithFecth(username, password);
   // return await loginWithAxios(username, password);
   return  loginFake(username, password);
    
}

const loginFake = (username, password) =>{

    /*
    if(username != "test" || password != 'test'){
        // authentication fail
        const error = "authentication failed";
        return Promise.reject(error);
    }*/

    let user = {};

    if(username == 'admin' && password == 'admin'){
        user = {
            username: 'admin',
            name: 'Admin user',
            email: 'admin@email.com',
            rol:"admin"
        }
    }else if(username == 'user' && password == 'user'){
        user = {
            username: 'user',
            name: 'User demo',
            email: 'user@email.com',
            rol:"user"
        };
    }

    // guardando las credenciales en el localStorage
    localStorage.setItem('user', JSON.stringify(user));

    return Promise.resolve(user);
}

const loginWithAxios = (username, password) => async() => {
    // ref: https://flaviocopes.com/axios/
    // ref : https://github.com/axios/axios
    const response = await axios.post(LOGIN_URL, {username,password}) ;
    return response;
}

function loginWithFecth(username, password){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${HOST}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
