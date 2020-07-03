import { createSelector } from 'reselect';

export const getOptionsSelectors = (state) => {
    return state.optionsAdmin.options;
}

export const getErrorSelector = (state) => {
    return state.optionsAdmin.error;
}

export const getPaginatorSelector = (state) => {
    return state.optionsAdmin.paginator;
}
