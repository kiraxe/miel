import { createSelector } from 'reselect';

export const getCategorySelectors = (state) => {
    return state.categoriesAdmin.categories;
}

export const getErrorSelector = (state) => {
    return state.categoriesAdmin.error;
}

export const getPaginatorSelector = (state) => {
    return state.categoriesAdmin.paginator;
}

export const getSelectSelector = (state) => {
    return state.categoriesAdmin.select;
}
