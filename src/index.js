import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './root'
/**** wiring up redux ****/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
/*** React Router ***/
import { BrowserRouter, Route } from 'react-router-dom';




ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>
    , document.getElementById('root'));



