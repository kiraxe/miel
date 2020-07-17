import { createSelector } from 'reselect'

export const getAppSelector = (state) => {
    return state.app;
}

/* use reselect*/
/*export const getApp = createSelector(getAppSelector, (app) => {
    return app;
});*/
