import { createSelector } from 'reselect';

export const getErrorRegSelectors = (state) => {
    return state.registration.error
}

