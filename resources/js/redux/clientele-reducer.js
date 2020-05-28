import {adminAPI} from "../api/api";

const SET_CLIENTELE = 'SET_CLIENTELE';
const DELETE_CLIENTELE = 'DELETE_CLIENTELE';
const ADD_CLIENTELE = 'ADD_CLIENTELE';
const EDIT_CLIENTELE = 'EDIT_CLIENTELE';

let initialState = {
    clientele: [],
    error: null
}


let clienteleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTELE: {
            return {
                ...state,
                clientele: [...action.data],
            }
        }
        case DELETE_CLIENTELE: {

            let clientele = state.clientele.filter(item => item.id !== action.data.id);

            return {
                ...state,
                clientele: [...clientele]
            }
        }
        case ADD_CLIENTELE: {
            return {
                ...state,
                clientele: [...state.clientele ,...action.data.data],
                error: action.data.error
            }
        }
        case EDIT_CLIENTELE: {

            let clientele = state.clientele.map(item => {
                if (item.id === action.data.id) {
                    item = action.data;
                }
                return item;
            });

            return {
                ...state,
                clientele: [...clientele]
            }
        }
        default:
            return state
    }
};




export const setClienteleAC = (data) => ({type: SET_CLIENTELE, data: data});
export const deleteClienteleAC = (data) => ({type: DELETE_CLIENTELE, data: data});
export const addClienteleAC = (data, error) => ({type: ADD_CLIENTELE, data: {data, error}});
export const editClienteleAC = (data) => ({type: EDIT_CLIENTELE, data: data});

export const getClientele = () => async dispatch => {
    let response = await adminAPI.getClientele();
    if (response.success) {
        dispatch(setClienteleAC(response.data));
    }
};

export const deleteClient = (id) => async dispatch => {
    let response = await adminAPI.deleteClient(id);
    dispatch(deleteClienteleAC(response.data));

};

export const addClient = (clientele) => async dispatch => {
    let response = await adminAPI.addClient(clientele);

    if (response.success) {
        dispatch(addClienteleAC([response.data], null));
    } else {
        dispatch(addClienteleAC([], response.data.message));
    }
};

export const editClient = (clientele) => async dispatch => {
    let response = await adminAPI.editClient(clientele);
    dispatch(editClienteleAC(response.data));
}

export default clienteleReducer;
