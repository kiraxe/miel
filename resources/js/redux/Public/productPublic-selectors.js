import { createSelector } from 'reselect';

export const getProductSelectors = (state) => {
    return state.productPublic.product;
}

export const getInitializeSelectors = (state) => {
    return state.productPublic.initialize;
}
