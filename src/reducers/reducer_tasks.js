import * as types from '../actions/type'
export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_NEW_TASK':
            state = [action.payload, ...state]
            return state;
        case 'TASKS_LIST':
            return state;
        case types.default.GET_RONDOM_TASKS:
            state = [...action.payload, ...state]
            return state;
        default:
            return state;
    }
}