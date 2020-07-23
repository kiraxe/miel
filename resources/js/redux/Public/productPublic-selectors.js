import { createSelector } from 'reselect';

export const getProductSelectors = (state) => {
    return state.productPublic.product;
}
