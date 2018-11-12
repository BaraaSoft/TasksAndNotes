import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
/**** wiring up redux ****/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';



const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(

    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));



