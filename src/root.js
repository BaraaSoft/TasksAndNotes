import ReactDOM from 'react-dom';
import React from 'react';
/**** wiring up redux ****/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';

export default ({ children, initialState = {} }) => {
    return (
        <Provider store={applyMiddleware()(createStore)(reducers, initialState)}>
            {children}
        </Provider>
    );
}