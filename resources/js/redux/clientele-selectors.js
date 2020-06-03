import { createSelector } from 'reselect';

export const getClienteleSelectors = (state) => {
    return state.clienteleAdmin.clientele;
}

export const getErrorSelector = (state) => {
    return state.clienteleAdmin.error;
}

export const getPaginatorSelector = (state) => {
    return state.clienteleAdmin.paginator;
}
