import {adminAPI} from "../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';
const DELETE_PRODUCTS = 'DELETE_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const EDIT_PRODUCT = 'EDIT_PRODUCT';

let initialState = {
    products: [],
    error: null
}


let productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: [...action.data],
            }
        }
        case DELETE_PRODUCTS: {

            let products = state.products.filter(item => item.id !== action.data.id);

            return {
                ...state,
                products: [...products]
            }
        }
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products ,...action.data.data],
                error: action.data.error
            }
        }
        case EDIT_PRODUCT: {

            let products = state.products.map(item => {
                if (item.id === action.data.id) {
                    item = action.data;
                }
                return item;
            });

            return {
                ...state,
                products: [...products]
            }
        }
        default:
            return state
    }
};




export const setProductsAC = (data) => ({type: SET_PRODUCTS, data: data});
export const deleteProductAC = (data) => ({type: DELETE_PRODUCTS, data: data});
export const addProductAC = (data, error) => ({type: ADD_PRODUCT, data: {data, error}});
export const editProductAC = (data) => ({type: EDIT_PRODUCT, data: data});

export const getProducts = () => async dispatch => {
    let response = await adminAPI.getProducts();
    if (response.success) {
        dispatch(setProductsAC(response.data));
    }
};

export const deleteProduct = (id) => async dispatch => {
    let response = await adminAPI.deleteProduct(id);
    dispatch(deleteProductAC(response.data));
};

export const addProduct = (product) => async dispatch => {
    let response = await adminAPI.addProduct(product);
    if (response.success) {
        dispatch(addProductAC([response.data], null));
    } else {
        dispatch(addProductAC([], response.data.message));
    }
};

export const editProduct = (product) => async dispatch => {
    let response = await adminAPI.editProduct(product);
    dispatch(editProductAC(response.data));
}

export default productsReducer;
