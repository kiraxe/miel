import { createSelector } from 'reselect';

export const getPermissionSelectors = (state) => {
    return state.auth.permission;
}

export const getIsLoggedInSelector = (state) => {
    return state.auth.isLoggedIn;
}

export const getErrorSelector = (state) => {
    return state.auth.error;
}

export const getIdSelector = (state) => {
    return state.auth.id;
}

export const getNameSelector = (state) => {
    return state.auth.name;
}


