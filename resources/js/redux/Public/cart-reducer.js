import {adminAPI, publicAPI} from '../../api/api';
import {addCategoryAC} from "../category-reducer";

const SET_CART = 'SET_CART'
const ADD_CART = 'ADD_CART';
const ADD_CART_CLIENT = 'ADD_CART_CLIENT'
const GET_CART = 'GET_CART';
const EDIT_CART = 'EDIT_CART';
const DELETE_CART = 'DELETE_CART';
const SET_QUARTERLY = 'SET_QUARTERLY';
const SET_COMMENT = 'SET_COMMENT';
const SET_DELIVERY = 'SET_DELIVERY';
const SET_TOTAL = 'SET_TOTAL';
const SEND_ORDER = 'SEND_ORDER';


let initialState = {
    client: {
        id: null,
        name: null,
        company: null,
        phone: null,
        email: null,
    },
    delivery: null,
    cart: [],
    quarterly: null,
    comment: null,
    total: null,
    error: null
}

const catReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CART_CLIENT : {
            return {
                ...state,
                client: {...action.data}
            }
        }
        case ADD_CART : {

            let cart = state.cart.map(item => {
                if (item.product_id !== action.data.product_id) {
                    return item;
                }
            })

            cart = cart.filter(function(x) {
                return x !== undefined && x !== null;
            });

            return {
                ...state,
                cart: [...cart, action.data],
            }
        }
        case EDIT_CART : {

            let cart = state.cart.map((item, key) => {
                if(item.product_id === action.data.product_id) {
                    return action.data;
                } else {
                    return item;
                }
            });

            return {
                ...state,
                cart: [...cart]
            }
        }
        case DELETE_CART : {
            let cart = state.cart.map((item, key) => {
                if(item.product_id !== action.data) { return item}
            });

            cart = cart.filter(function(x) {
                return x !== undefined && x !== null;
            });

            return {
                ...state,
                cart: [...cart]
            }
        }
        case SET_CART: {
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(state));
            return {
                ...state
            }
        }
        case SET_QUARTERLY: {
            return {
                ...state,
                quarterly: action.data
            }
        }
        case SET_COMMENT: {
            return {
                ...state,
                comment: action.data
            }
        }
        case SET_DELIVERY: {
            return {
                ...state,
                delivery: action.data
            }
        }
        case SET_TOTAL: {
            return {
                ...state,
                total: action.data
            }
        }
        case GET_CART: {
            let st = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : state;
            return {
                ...st
            }
        }
        case SEND_ORDER: {
            localStorage.removeItem('cart');
            return {
                ...state,
                delivery: null,
                cart: [],
                quarterly: null,
                comment: null,
                total: null,
                error: null
            }
        }
        default: {
            return state;
        }

    }
}
export const addCartAC = (data) => ({type: ADD_CART, data: data});
export const addCartClientAC = (data) => ({type: ADD_CART_CLIENT, data: data});
export const setCartAC = () => ({type: SET_CART});
export const setQuarterlyAC = (data) => ({type: SET_QUARTERLY, data: data});
export const setCommentAC = (data) => ({type: SET_COMMENT, data: data});
export const setDeliveryAC = (data) => ({type: SET_DELIVERY, data: data});
export const setTotalAC = (data) => ({type: SET_TOTAL, data: data});
export const getCartAC = () => ({type: GET_CART});
export const editCartAC = (data) => ({type: EDIT_CART, data: data});
export const deleteCartAC = (data) => ({ type: DELETE_CART, data: data});
export const sendOrderAC = (error) => ({type: SEND_ORDER, error: error})


export const addCart = (product) => async dispatch => {
    let promise = dispatch(addCartAC(product));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const addCartClient = (client) => async dispatch => {
    dispatch(addCartClientAC(client));
}

export const getCart = () => async  dispatch => {
    dispatch(getCartAC());
}

export const editCart = (product) => async dispatch => {
    let promise =  dispatch(editCartAC(product));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const deleteCart = (id) => async dispatch => {
    let promise = dispatch(deleteCartAC(id));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const setQuarterly = (value) => async dispatch => {

    let promise = dispatch(setQuarterlyAC(value));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const setComment = (comment) => async dispatch => {

    let promise = dispatch(setCommentAC(comment));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const setDelivery = (delivery) => async dispatch => {

    let promise = dispatch(setDeliveryAC(delivery));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const setTotal = (total) => async dispatch => {

    let promise = dispatch(setTotalAC(total));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const sendOrder = (order) => async dispatch => {
    let response = await publicAPI.addOrder(order);
    console.log(response);
    if (response.success) {
        dispatch(sendOrderAC());
    } else {
        dispatch(addCategoryAC(response.data.message));
    }
}

export default catReducer;
