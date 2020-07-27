import {publicAPI} from '../../api/api';
import {initializedSuccessAC} from "../app-reducer";

const SET_CART = 'SET_CART'
const ADD_CART = 'ADD_CART';
const ADD_CART_CLIENT = 'ADD_CART_CLIENT'
const GET_CART = 'GET_CART';
const EDIT_CART = 'EDIT_CART';
const DELETE_CART = 'DELETE_CART';
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
    quarterly: false,
    send: false,
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
            return {
                ...state
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
        case GET_CART: {
            let st = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : state;
            return {
                ...st
            }
        }
        case SEND_ORDER: {
            return {
                ...action.data
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
export const getCartAC = () => ({type: GET_CART});
export const editCartAC = (data) => ({type: EDIT_CART, data: data});
export const deleteCartAC = (data) => ({ type: DELETE_CART, data: data});
export const sendCartAC = (data) => ({type: SEND_ORDER, data: data});


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
    dispatch(editCartAC(product));
}

export const deleteCart = (id) => async dispatch => {
    let promise = dispatch(deleteCartAC(id));

    Promise.all([promise])
        .then(() => {
            dispatch(setCartAC());
        })
}

export const sendCart = () => async dispatch => {

}


export default catReducer;
