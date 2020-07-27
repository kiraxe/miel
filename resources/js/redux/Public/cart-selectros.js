import { createSelector } from 'reselect';

export const getCartSelectors = (state) => {
    return state.cartPublic.cart;
}

