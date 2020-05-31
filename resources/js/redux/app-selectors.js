import { createSelector } from 'reselect'

export const getAppSelector = (state) => {
    return state.app;
}

export const getIsLoggedInSelector = (state) => {
    return state.auth.isLoggedIn;
}

export const getErrorSelector = (state) => {
    return state.auth.error;
}

/* use reselect*/
/*export const getApp = createSelector(getAppSelector, (app) => {
    return app;
});*/
