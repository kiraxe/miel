import {adminAPI, publicAPI} from "../../api/api";

const SET_ACCOUNT = 'SET_ACCOUNT';
const EDIT_ACCOUNT = 'EDIT_ACCOUNT';

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
        default:
            return state
    }
};




export const setClienteleAccountAC = (data) => ({type: SET_ACCOUNT, data: data});
export const editClienteleAccountAC = (data, error) => ({type: EDIT_ACCOUNT, data: data, error: error});

export const getAccount = (client_id) => async dispatch => {
    let response = await publicAPI.getAccountPage(client_id);

    if (response.data.success) {
        dispatch(setClienteleAccountAC(response.data));
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

export default accountReducer;
