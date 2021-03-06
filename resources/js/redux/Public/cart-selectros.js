import { createSelector } from 'reselect';

export const getCartSelectors = (state) => {
    return state.cartPublic.cart;
}

export const getClientSelectors = (state) => {
    return state.cartPublic.client;
}

export const getCommentSelectors = (state) => {
    return state.cartPublic.comment;
}

export const getDeliverySelectors = (state) => {
    return state.cartPublic.delivery;
}

export const getTotalSelectors = (state) => {
    return state.cartPublic.total;
}

export const getOrderIdSelectors = (state) => {
    return state.cartPublic.order_id;
}

