import { createSelector } from 'reselect';

export const getSettingsSelectors = (state) => {
    return state.public.settings;
}

export const getCategoriesSelectors = (state) => {
    return state.public.categories;
}

