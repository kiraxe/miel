import { createSelector } from 'reselect';

export const getProductsSelectors = (state) => {
    return state.productsAdmin.products;
}

export const getErrorSelector = (state) => {
    return state.productsAdmin.error;
}

export const getPaginatorSelector = (state) => {
    return state.productsAdmin.paginator;
}

export const getSelectSelector = (state) => {
    return state.productsAdmin.select;
}
