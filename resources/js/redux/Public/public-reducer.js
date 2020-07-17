import {publicAPI} from "../../api/api";

const SET_PUBLIC_SETTINGS = 'SET_PUBLIC_SETTINGS';

let initialState = {
    settings: {},
    error: null
}


let publicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PUBLIC_SETTINGS: {
            return {
                ...state,
                settings: {...action.data.data.settings},
            }
        }
        default:
            return state
    }
};




export const setPublicAC = (data) => ({type: SET_PUBLIC_SETTINGS, data: data});


export const getPublic = () => async dispatch => {
    let response = await publicAPI.getPublic();
    if (response.data.success) {
        dispatch(setPublicAC(response.data));
    }
};


export default publicReducer;
