import _ from 'lodash';
export function openModalDetails(callback) {

    return {
        type: "MODAL_DETAILS",
        payload: new Promise((resolve) => {
            resolve();
        })
    }

}

export function addNewTask(value) {
    return {
        type: 'CREATE_NEW_TASK',
        payload: _.cloneDeep(value)
    }
}