import { createSelector } from 'reselect';

export const getProductsSelectors = (state) => {
    return state.catalog.products;
}

export const getInitializeSelectors = (state) => {
    return state.catalog.initialize;
}

export const getTotalProductSelectors = (state) => {
    return state.catalog.totalProduct;
}
