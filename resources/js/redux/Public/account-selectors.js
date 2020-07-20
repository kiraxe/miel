import { createSelector } from 'reselect';

export const getClientSelectors = (state) => {
    return state.accountPagePublic.client;
}

export const getErrorSelector = (state) => {
    return state.accountPagePublic.error;
}
