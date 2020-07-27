import { createSelector } from 'reselect';

export const getOrdersSelectors = (state) => {
    return state.ordersAdmin.orders;
}

export const getOrdersErrorSelector = (state) => {
    return state.ordersAdmin.error;
}

export const getOrdersPaginatorSelector = (state) => {
    return state.ordersAdmin.paginator;
}
