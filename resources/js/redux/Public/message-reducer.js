import {adminAPI, publicAPI} from '../../api/api';


const SET_MESSAGE = 'SET_MESSAGE'
const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_SEND = 'SET_SEND'


let initialState = {
    message: null,
    send: false,
    error: null
}

const messagePublicReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_MESSAGE: {
            return {
                ...state,
                message: action.data,
            }
        }
        case SET_SEND: {
            return {
                ...state,
                send: false
            }
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                message: null,
                send: action.data.error ? false : true,
                error: action.data.error ? action.data.error : null
            }
        }
        default: {
            return state;
        }

    }
}
export const setMessageAC = (data) => ({type: SET_MESSAGE, data: data});
export const setSendAC = (data) => ({type: SET_SEND, data: data});
export const sendMessageAC = (data, error) => ({type: SEND_MESSAGE, data:{data, error}})

export const setMessage = (message) => async dispatch => {
    dispatch(setMessageAC(message));
}

export  const setSend = () => async  dispatch => {
    dispatch(setSendAC())
}

export const sendMessage = (message) => async dispatch => {
    let response = await publicAPI.addMessage(message);
    console.log(response);
    if (response.success) {
        dispatch(sendMessageAC(response.data, null));
    } else {
        dispatch(sendMessageAC([], response.data.message));
    }
}

export default messagePublicReducer;
