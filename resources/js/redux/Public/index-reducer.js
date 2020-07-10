import {publicAPI} from "../../api/api";

const SET_INDEX_PAGE = 'SET_INDEX_PAGE';

let initialState = {
    header: [],
    error: null
}


let indexPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INDEX_PAGE: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
};




export const setIndexPageAC = (data) => ({type: SET_INDEX_PAGE, data: data});


export const getIndexPage = () => async dispatch => {
    let response = await publicAPI.getIndexPage();
    if (response.success) {
        dispatch(setIndexPageAC(response.data));
    }
};


export default indexPageReducer;
