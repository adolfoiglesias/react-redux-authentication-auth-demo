import {createstore, applyMiddleware, compose, createStore }  from 'redux';
import thunk from 'redux-thunk';
import reducerPrincipal from '../reducers';

const initialState = {};
const middleware = [thunk];

export const store = createStore(reducerPrincipal, initialState, 
        compose(applyMiddleware(...middleware), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

//export default store;