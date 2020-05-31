import { createSelector } from 'reselect';

export const getAdminPageSelector = (state) => {
    return state.adminPage;
}

export const getCurrentUserSelector = (state) => {
    return state.auth.name;
}
