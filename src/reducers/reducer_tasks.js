export default (state = [], action) => {
    switch (action.type) {
        case 'CREATE_NEW_TASK':
            return [action.payload, ...state];
        case 'TASKS_LIST':
            return state;
        default:
            return state;
    }
}