import {publicAPI} from "../../api/api";

const SET_CATALOG = 'SET_CATALOG';
const SET_INIT = 'SET_INIT';

let initialState = {
    products: [],
    totalProduct: null,
    initialize: false,
    error: null
}


let catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG: {
            return {
                ...state,
                products: [...action.data.products],
                totalProduct : action.data.totalProduct,
                initialize: true
            }
        }
        case SET_INIT: {
            return {
                ...state,
                initialize: false
            }
        }
        default:
            return state
    }
};




export const setCatalogAC = (data) => ({type: SET_CATALOG, data: data});
export const setInitAC = () => ({type: SET_INIT});


export const getCatalog = (page, offset, limit) => async dispatch => {
    dispatch(setInitAC());
    let response = await publicAPI.getCatalog(page, offset, limit);
    console.log(response);
    if (response.success) {
        dispatch(setCatalogAC(response.data));
    }
};


export default catalogReducer;
