import { createSelector } from 'reselect';

export const getSettingsSelectors = (state) => {
    return state.public.settings;
}

export const getInitializeSelectors = (state) => {
    return state.indexPagePublic.initialize
}

