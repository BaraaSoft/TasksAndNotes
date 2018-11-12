export default function (state = null, action) {
    switch (action.type) {
        case 'MODAL_DETAILS':
            return action.payload;
        default:
            return state;
    }
}