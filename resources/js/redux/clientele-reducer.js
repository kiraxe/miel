import {adminAPI} from "../api/api";

const SET_CLIENTELE = 'SET_CLIENTELE';
const DELETE_CLIENTELE = 'DELETE_CLIENTELE';
const ADD_CLIENTELE = 'ADD_CLIENTELE';
const EDIT_CLIENTELE = 'EDIT_CLIENTELE';

let initialState = {
    clientele: [],
    paginator: {
        total_page : null,
        current_page : null,
        per_page : null,
    },
    error: null
}


let clienteleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTELE: {
            return {
                ...state,
                clientele: [...action.data.data],
                paginator: {
                    total_page: action.data.last_page,
                    current_page: action.data.current_page,
                    per_page: action.data.per_page
                }
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

            let clientele = [];

            state.paginator.current_page === state.paginator.total_page ? clientele = [...state.clientele ,...action.data.data] : clientele = [...state.clientele];

            return {
                ...state,
                clientele: clientele,
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
                clientele: [...clientele],
                error: action.error
            }
        }
        default:
            return state
    }
};




export const setClienteleAC = (data) => ({type: SET_CLIENTELE, data: data});
export const deleteClienteleAC = (data) => ({type: DELETE_CLIENTELE, data: data});
export const addClienteleAC = (data, error) => ({type: ADD_CLIENTELE, data: {data, error}});
export const editClienteleAC = (data, error) => ({type: EDIT_CLIENTELE, data: data, error: error});

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
    } else if (!response.data.success) {
        dispatch(addClienteleAC([], response.data.message));
    }
};

export const editClient = (clientele) => async dispatch => {
    let response = await adminAPI.editClient(clientele);

    if (response.success) {
        dispatch(editClienteleAC(response.data, null));
    } else if (!response.data.success) {
        dispatch(editClienteleAC([], response.data.message));
    }

}

export default clienteleReducer;
