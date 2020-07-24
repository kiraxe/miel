import {publicAPI} from '../../api/api';

const SET_CART = 'SET_CART'
const ADD_CART = 'ADD_CART';
const ADD_CART_CLIENT = 'ADD_CART_CLIENT'
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
            return {
                ...state,
                cart: [...state.cart, action.data],
            }
        }
        case EDIT_CART : {
            return {
                ...state
            }
        }
        case DELETE_CART : {
            return {
                ...state
            }
        }
        case SET_CART: {
            console.log(action.data);
            return {
                ...action.data
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
export const editCartAC = (data) => ({type: EDIT_CART, data: data});
export const deleteCartAC = (data) => ({ type: DELETE_CART, data: data});
export const sendCartAC = (data) => ({type: SEND_ORDER, data: data});


export const addCart = (product) => async dispatch => {
    dispatch(addCartAC(product));
}

export const addCartClient = (client) => async dispatch => {
    dispatch(addCartClientAC(client));
}

export const editCart = (product) => async dispatch => {
    dispatch(editCartAC(product));
}

export const deleteCart = (product) => async dispatch => {
    dispatch(deleteCartAC(product));
}

export const sendCart = () => async dispatch => {

}


export default catReducer;
