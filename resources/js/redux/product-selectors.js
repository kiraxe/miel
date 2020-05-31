import { createSelector } from 'reselect';

export const getProductsSelectors = (state) => {
    return state.productsAdmin.products;
}

export const getErrorSelector = (state) => {
    return state.productsAdmin.error;
}
