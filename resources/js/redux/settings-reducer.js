import {adminAPI} from "../api/api";

const SET_SETTINGS = "SET_SETTINGS";

let initialState = {
    settings: [],
    error: null
}


let settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SETTINGS: {
            return {
                ...state,
                settings: [{...action.data}]
            }
        }
        default: {
            return state;
        }
    }
}

export const setSettingsAC = (data) => ({type: SET_SETTINGS, data: data});

export const getSettings = () => async dispatch => {
    let response = await adminAPI.getSettings();

    if (response.success) {
        dispatch(setSettingsAC(response.data));
    }
}

export const editSettings = (settings) => async dispatch => {
    let response = await adminAPI.editSettings(settings);
    console.log(response);
    dispatch(setSettingsAC(response.data));
}

export default settingsReducer;
