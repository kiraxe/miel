import {adminAPI} from "../api/api";


const SET_MESSAGES = 'SET_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const SHOW_MESSAGE = 'EDIT_MESSAGE';

let initialState = {
    messages: [],
    paginator: {
        total_page : null,
        current_page : null,
        per_page : null,
    },
    error: null
}


let messageAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES: {
            return {
                ...state,
                messages: [...action.data.data],
                paginator: {
                    total_page: action.data.last_page,
                    current_page: action.data.current_page,
                    per_page: action.data.per_page
                },
            }
        }
        case DELETE_MESSAGE: {

            let messages = state.messages.filter(item => item.message_id !== action.data.message_id);

            return {
                ...state,
                messages: [...messages]
            }
        }
        case SHOW_MESSAGE: {

            let messages = state.messages.map(item => {
                if (item.message_id === action.data.message_id) {
                    item = action.data;
                }
                return item;
            });

            return {
                ...state,
                messages: [...messages]
            }
        }
        default:
            return state
    }
};




export const setMessagesAC = (data) => ({type: SET_MESSAGES, data: data});
export const deleteMessageAC = (data) => ({type: DELETE_MESSAGE, data: data});
export const showMessageAC = (data) => ({type: SHOW_MESSAGE, data: data});

export const getMessages = (page) => async dispatch => {
    let response = await adminAPI.getMessages(page);
    console.log(response);
    if (response.success) {
        dispatch(setMessagesAC(response.data));
    }
}

export const deleteMessage = (id) => async dispatch => {
    let response = await adminAPI.deleteMessage(id);
    console.log(response);
    dispatch(deleteMessageAC(response.data));
}

export const showMessage = (id) => async dispatch => {}

export default messageAdminReducer;
