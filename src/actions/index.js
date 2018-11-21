import _ from 'lodash';
import axios from 'axios';
import types from './type';

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

export function getRandomTasks() {
    return (dispatch) => {
        fetchRadnomTasks().then((response) => {
            dispatch({
                type: types.GET_RONDOM_TASKS,
                payload: response.data
            })
        })
    }
}


export function setChangeAuth(isLoggedIn) {
    return {
        type: types.CHANGE_AUTH,
        payload: isLoggedIn
    }
}

function fetchRadnomTasks() {
    return axios({
        method: 'get',
        url: '/api/posts',
        baseURL: 'http://reduxblog.herokuapp.com',
        params: {
            key: 123
        }
    })
}


