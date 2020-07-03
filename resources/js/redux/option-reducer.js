import {adminAPI} from "../api/api";

const SET_OPTIONS = 'SET_OPTIONS';
const DELETE_OPTIONS = 'DELETE_OPTIONS';
const ADD_OPTIONS = 'ADD_OPTIONS';
const EDIT_OPTIONS = 'EDIT_OPTIONS';

let initialState = {
    options: [],
    paginator: {
        total_page : null,
        current_page : null,
        per_page : null,
    },
    error: null
}


let optionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_OPTIONS: {
            return {
                ...state,
                options: [...action.data.data],
                paginator: {
                    total_page: action.data.last_page,
                    current_page: action.data.current_page,
                    per_page: action.data.per_page
                }
            }
        }
        case DELETE_OPTIONS: {

            let options = state.options.filter(item => item.id !== action.data.id);

            return {
                ...state,
                options: [...options]
            }
        }
        case ADD_OPTIONS: {

            let options = [];

            state.paginator.current_page === state.paginator.total_page ? options = [...state.options ,...action.data.data] : options = [...state.options];

            return {
                ...state,
                options: options,
                error: action.data.error
            }
        }
        case EDIT_OPTIONS: {

            let options = state.options.map(item => {

                if (item.id === action.data.id) {
                    item = action.data;
                }

                return item;
            });

            return {
                ...state,
                options: [...options],
                error: action.error
            }
        }
        default:
            return state
    }
};




export const setOptionsAC = (data) => ({type: SET_OPTIONS, data: data});
export const deleteOptionsAC = (data) => ({type: DELETE_OPTIONS, data: data});
export const addOptionsAC = (data, error) => ({type: ADD_OPTIONS, data: {data, error}});
export const editOptionsAC = (data, error) => ({type: EDIT_OPTIONS, data: data, error: error});

export const getOptions = () => async dispatch => {
    let response = await adminAPI.getOptions();
    console.log(response);
    if (response.success) {
        dispatch(setOptionsAC(response.data));
    }
};

export const deleteOption = (id) => async dispatch => {
    let response = await adminAPI.deleteOption(id);
    console.log(response);
    dispatch(deleteOptionsAC(response.data));
};

export const addOption = (options) => async dispatch => {
    let response = await adminAPI.addOption(options);
    console.log(response);

    if (response.success) {
        dispatch(addOptionsAC([response.data], null));
    } else  {
        dispatch(addOptionsAC([], response.data));
    }
};

export const editOption = (options) => async dispatch => {
    let response = await adminAPI.editOption(options);
    console.log(response);
    if (response.success) {
        dispatch(editOptionsAC(response.data));
    } else {
        dispatch(editOptionsAC(response.data));
    }

}

export default optionsReducer;
