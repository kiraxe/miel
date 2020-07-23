import {publicAPI} from "../../api/api";

const SET_PRODUCT = 'SET_PRODUCT';

let initialState = {
    product: null,
    initialize: false,
    error: null
}


let productPublicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT: {
            return {
                ...state,
                product: action.data.data,
                initialize: true
            }
        }
        default:
            return state
    }
};




export const setProductAC = (data) => ({type: SET_PRODUCT, data: data});

export const getProduct = (page) => async dispatch => {
    let response = await publicAPI.getProductPage(page);
    console.log(response);
    if (response.data.success) {
        dispatch(setProductAC(response.data));
    }
};


export default productPublicReducer;
