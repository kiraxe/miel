import {adminAPI} from "../api/api";

const SET_ORDERS = 'SET_ORDERS';
const DELETE_ORDER = 'DELETE_ORDER';
const SHOW_ORDER = 'EDIT_ORDER';

let initialState = {
    orders: [
        {order_id: 1}
    ],
    paginator: {
        total_page : null,
        current_page : null,
        per_page : null,
    },
    error: null
}


let ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDERS: {
            return {
                ...state,
                orders: [...action.data.data],
                paginator: {
                    total_page: action.data.last_page,
                    current_page: action.data.current_page,
                    per_page: action.data.per_page
                },
            }
        }
        case DELETE_ORDER: {

            let orders = state.orders.filter(item => item.order_id !== action.data.order_id);

            return {
                ...state,
                orders: [...orders]
            }
        }
        case SHOW_ORDER: {

            let orders = state.orders.map(item => {
                if (item.order_id === action.data.order_id) {
                    item = action.data;
                }
                return item;
            });

            return {
                ...state,
                orders: [...orders]
            }
        }
        default:
            return state
    }
};




export const setOrdersAC = (data) => ({type: SET_ORDERS, data: data});
export const deleteOrderAC = (data) => ({type: DELETE_ORDER, data: data});
export const showOrderAC = (data) => ({type: SHOW_ORDER, data: data});

export const getOrders = (page) => async dispatch => {
}

export const deleteOrder = (id) => async dispatch => {
}

export const showOrder = (id) => async dispatch => {
}

export default ordersReducer;
