import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component,roles,  ...rest }) => (
    <Route {...rest} render={props => {
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(roles);
        
        if(!user || (roles && roles.indexOf(user.rol) == -1)){
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }else{
            return <Component {...props} />
        }
    }} />
)