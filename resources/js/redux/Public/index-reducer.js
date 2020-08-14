import {publicAPI} from "../../api/api";

const SET_INDEX_PAGE = 'SET_INDEX_PAGE';

let initialState = {
    categories: [],
    popular: [],
    novelty: [],
    initialize: false,
    error: null
}


let indexPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INDEX_PAGE: {

            let cats = action.data.data.categories.filter(item => !item.active);
            return {
                ...state,
                categories: [...cats],
                popular: [...action.data.data.popular],
                novelty: [...action.data.data.novelty],
                initialize: true
            }
        }
        default:
            return state
    }
};




export const setIndexPageAC = (data) => ({type: SET_INDEX_PAGE, data: data});


export const getIndexPage = () => async dispatch => {
    let response = await publicAPI.getIndexPage();
    if (response.data.success) {
        dispatch(setIndexPageAC(response.data));
    }
};


export default indexPageReducer;
