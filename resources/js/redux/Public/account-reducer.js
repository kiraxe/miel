import {adminAPI, publicAPI} from "../../api/api";

const SET_ACCOUNT = 'SET_ACCOUNT';
const EDIT_ACCOUNT = 'EDIT_ACCOUNT';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

let initialState = {
    client: {},
    error: null
}


let accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACCOUNT: {
            return {
                ...state,
                client: {...action.data.data.client},
            }
        }
        case EDIT_ACCOUNT: {
            return {
                ...state,
                client:  {...action.data},
                error: action.error
            }
        }
        case DELETE_ACCOUNT: {
            return  {
                ...state,
                client: {}
            }
        }
        default:
            return state
    }
};




export const setClienteleAccountAC = (data) => ({type: SET_ACCOUNT, data: data});
export const setDeleteAccountAC = () => ({type: DELETE_ACCOUNT});
export const editClienteleAccountAC = (data, error) => ({type: EDIT_ACCOUNT, data: data, error: error});

export const getAccount = (client_id) => async dispatch => {
    let response = await publicAPI.getAccountPage(client_id);

    if (response.data.success) {
        localStorage.setItem('client', JSON.stringify(response.data.data.client));
        dispatch(setClienteleAccountAC(response.data));

        return response;
    }
};

export const editAccount = (client) => async dispatch => {
    let response = await publicAPI.editAccountPage(client);
    if (response.success) {
        dispatch(editClienteleAccountAC(response.data, null));
    } else if (!response.data.success) {
        dispatch(editClienteleAccountAC([], response.data.message));
    }

}

export const deleteAccount = () => async dispatch => {
    dispatch(setDeleteAccountAC());
}

export default accountReducer;
