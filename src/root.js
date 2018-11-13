import ReactDOM from 'react-dom';
import React from 'react';
/**** wiring up redux ****/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
/***  middleware ***/
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

export default ({ children, initialState = {} }) => {
    return (
        <Provider store={applyMiddleware(thunk)(createStore)(reducers, initialState)}>
            {children}
        </Provider>
    );
}