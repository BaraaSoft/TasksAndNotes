import { combineReducers } from 'redux';
import interfaceReducer from './interface_reducer'
import tasksReducer from './reducer_tasks'
import { reducer as formReducer } from 'redux-form'
import reducer_auth from './reducer_auth';

export default combineReducers({
    modal: interfaceReducer,
    form: formReducer,
    tasksList: tasksReducer,
    changeAuth: reducer_auth
});